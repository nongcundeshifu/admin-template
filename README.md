# admin-template
简易后台管理系统demo
本篇文章：https://blog.csdn.net/harsima/article/details/77949448
本篇文章github：https://github.com/PanJiaChen/vue-admin-template

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
		1. 在全局导航守卫中判断，用户是否获取了权限列表，如果没有，则获取到用户的权限列表数据，然后根据权限列表中的path（这种页面一般没有参数和:id这种的，或者你使用name或者如果有:id参数则使用match进行判断这个path都可以）判断用户是否有次页面的权限，有则跳转，没有则跳没有权限页
		3. 如果已经获取到了权限列表那么就可以直接进行校验，不用获取权限列表。
		
		2. 优化：
			1. 你可以将多层嵌套的权限列表进行扁平化格，即把item类型的数据提取到一个数组中，避免多层次遍历。这样就直接遍历一次即可。或者使用递归（现在我用的方法就是）
			2. 使用caceh缓存已经判断过的页面（比如name或者path作为标志都可以）
		
	2. 问题：第一种方法，如果用户访问的如果是一个不存在的页面，根据这个校验，还是会跳没有权限页面，而不是404页面，如何解决？使用动态路由没有这个问题，而且动态路由不需要每次都进行使用拥有与权限的路由判断，只需要判断一次即可。
	
3. 数据级页面权限，即页面中的权限。
	4. 向路由中存储meta信息。
		1. 善用store的meta，并且，你可以直接获取store中的实例，并且直接使用上面的方法以及store。而且router实例对象也是一样，也可以直接引用并且使用上面的属性方法。你在获取到权限列表后，可以为路由中设置meta数据。这样可以对页面中的权限进行控制了。因为页面中的权限重要有一个标志，meta是不错的选择。不能每次进入一个页面都要遍历权限列表来找到页面中的权限字段吧。

4. 根据权限列表，递归生成菜单列表。



# 其他
1. 用模块分割store
2. 善用路由中的meta字段，因为怎么说，在这种情况下，因为权限列表最多只遍历一次，不能
每次进入到一个路由时，想要进行某个权限判断时，都需要遍历一般路由表吧，所以尽可能把页面所需要的数据都存储在meta中，这样就不用每次都遍历权限列表了。
3. 如果真的需要多次遍历权限列表，那么为权限列表编写一个迭代器。这样遍历时方便一些。但这是可能无限嵌套的，可能也不好搞。
4. 你可以直接引入router.js和store.js中创建的实例的。有点意思。他和挂载在vue实例中的store和router有什么不同吗？还是一样的？经过测试，好像他和组件的$router和$store还是真的一样的。有点意思。


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






