# admin-template
简易后台管理系统demo
本篇文章：https://blog.csdn.net/harsima/article/details/77949448
本篇的github：https://github.com/PanJiaChen/vue-admin-template

深入：https://juejin.im/post/59097cd7a22b9d0065fb61d2
官网：https://panjiachen.github.io/vue-element-admin-site/
github：https://github.com/PanJiaChen/vue-element-admin


# 功能
1. 登陆：
	1. 用户在进入任何一个页面时，由全局路由守卫进行判断此用户是否登陆（校验cookie中的token）
	如果此用户的cookie的token没有，则跳转到登陆页面（由于登陆页面也会触发全局路由守卫，所以
	需要设置一个忽略校验token的列表）
	2. 进入登陆页面后，在登陆页面中的导航守卫校验是否登陆（其实此处的校验可以放在全局路由守卫中一起判断的），
	如果登陆则跳转首页，否则调用登陆接口进行登陆，从后台获取到token后，设置到cookie中，并设置到vuex中（是否有必要看情况）
	3. 登陆成功后，跳转到首页。
	4. 在axios中为每一个接口设置token请求头或者参数。
2. 路由访问权限，根据后台返回的用户的权限列表，生成相应的路由权限，有两种方法
	1. 根据权限列表数据，获取此用户真正的可访问路由表，使用addRouters方法
    2. 根据权限列表数据，此时路由中的路由是完全是静态的，那么在每次进行路由跳转时，我们都需要判断此用户是否有次路由的权限。  
	ps：上面两种方法的permission数据都是一样的，即只有这个用户的可访问的权限列表。这里我们使用简单的第二种。第一种的实现在另外一个分支可见。
	
	1. 使用第一种方法。
		1. 在全局导航守卫中判断，用户是否获取了权限列表，如果没有，则获取到用户的权限列表数据，然后根据权限列表中的path（这种页面一般没有参数和:id这种的，或者你使用name(一般name都是唯一的，不应该有相同的name出现的)或者如果有:id参数则使用match进行判断这个path都可以）判断用户是否有次页面的权限，有则跳转，没有则跳没有权限页
		3. 如果已经获取到了权限列表那么就可以直接进行校验，不用获取权限列表。
		
		2. 优化：
			1. 你可以将多层嵌套的权限列表进行扁平化格，即把item类型的数据提取到一个数组中，避免多层次遍历。这样就直接遍历一次即可。或者使用递归（现在我用的方法就是）
			2. 使用caceh缓存已经判断过的页面（比如name或者path作为标志都可以）
		
	2. 问题：第一种方法，如果用户访问的如果是一个不存在的页面，根据这个校验，还是会跳没有权限页面，而不是404页面，如何解决？使用动态路由没有这个问题，而且动态路由不需要每次都进行使用拥有与权限的路由判断，只需要判断一次即可。
	
3. 数据级页面权限，即页面中的权限。
	4. 向路由中存储meta信息。
		1. 善用store的meta，并且，你可以直接获取store中的实例，并且直接使用上面的方法以及store。而且router实例对象也是一样，也可以直接引用并且使用上面的属性方法。你在获取到权限列表后，可以为路由中设置meta数据。这样可以对页面中的权限进行控制了。因为页面中的权限重要有一个标志，meta是不错的选择。不能每次进入一个页面都要遍历权限列表来找到页面中的权限字段吧。

4. 根据权限列表，递归生成菜单列表。
	1. 根据权限列表，使用递归组件来显示菜单列表。这里的知识点是`循环递归组件`（这一点可以啊）
	2. 注意，即使是所有角色都可以使用的菜单项，那么也要显示在权限列表中，而不应该分开，不然合并起来很麻烦，也就是你只要想显示出菜单项的，都要出现在权限列表中。
	3. 没有加入item分组功能，因为可能会在显示index上面有问题（其实如果要加入，则手动权限列表增加index，但是，问题在于，每个用户的权限列表不一样，所以可能在一开始需要进行递归遍历，进行格式化地增加一个index，并且index是唯一的，后续搜索按照这个index搜索也可以），如果不使用index的话，也可以不加。
	4. 以path作为index的值，然后启用router模式，为什么以index作为path模式，有点奇怪啊。不过必须要这样，因为不这样可能会出现bug，比如跳转，或者default-active这些东西都可能失效，不过如果有重复的path（不可能吧，怎么说不能定义重复的菜单啊），好吧，想多了。
	4. 优化
		1. 编写一个递归函数，专门用来递归权限列表的。
		2. 你也可以使用createElmenet这种reader函数来递归编写这些组件，但是可能就麻烦一些了，但原理都是一样的，其实没有什么差别。
		3. 菜单中的层级不能和路由进行对应，如果真的是子路由还好，不然就不能设置为子路由，菜单虽然可能是多层级，但打开的页面可能并不是
		进行路由嵌套的，所以需要注意。

5. 关于左侧菜单栏和顶部栏和菜单页面的布局问题。
	1. 现在是左侧菜单栏和顶部导航栏和页面三部分构成一个Layout，那么每个菜单页面都有一个父路由包含一个Layout组件。
	```javascript
	// 测试页面
        const router = {
    		// 所有测试的页面分组。
            path: '/test',
            name: 'test',
            // Layout布局组件
            component: Layout,
            // 自动跳转到子路由中，因为这个父路由本身就只是一个布局容器。
            redirect: '/test/test1',
            children: [
                {
                    path: 'test1',
                    name: 'test1',
                    component: test1,
                },
            ],
        }
	```
	但是每次切换分组时，因为Layout也会切换，所以菜单栏可能会闪一下。
	解决方案就是：
	```javascript
	// 首页
    const index = {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: Index,
            }
        ]
    }
	```
	即所有的菜单页面都在一个Layout的包裹之下即可。index在 '/'路由的包裹下。
	（缓存Layout失败了，这个方案其实也是等于所有菜单页面都在Layout组件下。）
6. 菜单栏和路由的层级不一定要对应的，因为菜单栏有多层次的子菜单，但路由如果嵌套了
	那么页面就需要嵌套，除非真的需要，不然切换菜单项时还是需要切换整个页面的。
7. 切换权限
	切换权限时，请求一个getRolesInfo的action，更新数据（他和设置的缓存冲突了）
	1. 设置一个页面内权限，并编写一个指令v-permission。或者根据meta中的v-if
8. i18n
	这里的i18n格式需要和权限列表类似，
	1. 需要约定一个和权限列表一致的字段
	2. 使用遍历，循环定位找到i18n数据中的字段
	3. 优化
		1. 其实不一定要进行嵌套，因为如果设置了唯一标识字段，那么直接是i18n的数据直接是平级的即可
		2. 但是注意不要冲突

10. 顶部导航栏的标签选项卡的实现。
	1. 在vuex中维护一个当前打开的列表，但是并不缓存其组件
	2. 在全局路由守卫中控制选项卡的添加，这样简单很多，而是点击菜单栏，
	不然就要进行遍历查找页面了。
11. 真的还好这些菜单栏不需要带参数，不然更难写。


# 其他
1. 用模块分割store
2. 善用路由中的meta字段，因为怎么说，在这种情况下，因为权限列表最多只遍历一次，不能
每次进入到一个路由时，想要进行某个权限判断时，都需要遍历一般路由表吧，所以尽可能把页面所需要的数据都存储在meta中，这样就不用每次都遍历权限列表了。
	把一些需要进行进行区分的数据放到meta中，而不是vuex中，这样会方便很多。
3. 如果真的需要多次遍历权限列表，那么为权限列表编写一个迭代器。这样遍历时方便一些。但这是可能无限嵌套的，可能也不好搞。
4. 你可以直接引入router.js和store.js中创建的实例的。有点意思。他和挂载在vue实例中的store和router有什么不同吗？还是一样的？经过测试，好像他和组件的$router和$store还是真的一样的。有点意思。
5. 如果service中有包含store的，那么可以让store的action作为一个service也是ok的。如果这个service有store操作的话。

# 路由导航
1.守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中.
2. 使用next跳转到一个新的路由，那么会重新开始一个新的导航（会再执行完整的导航守卫解析）
3. 如何理解这句话：路由对象是不可变 (immutable) 的，每次成功的导航后都会产生一个新的对象。
	1. 只要有路由改变了，即重新导航了，那么每个组件的路由对象都是一个新的对象了。所以，才可以
	监听$router属性。（即使是这个路由的子路由变化了，那么父路由还是一个新的路由对象）
	2. 一个路由对象 (route object) 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，
	还有 URL 匹配到的路由记录 (route records)。注意：每次导航的发生，都会生成一个新的路由对象，并且，
	这个路由对象是当前激活的路由的状态信息，`所有在此激活路由中的组件的路由对象都是同一个`
4. 组件中的$router.matched这个属性包含了当前这个在组件中的路由记录对象。
5.当进入一个路由时，如果这个路由会进行重定向，那么这个全局路由守卫会执行两次吗？好像不会，如果重定向了，那么只执行一次全局路由守卫，而且是重定向后的路由对象。





