/**  time:2019/4/15
 *   作者:农村的师傅
 *   功能:
 */

import router from './router';
import store from './store';
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import Cookies from 'js-cookie';
import { getUserInfo } from "./api/userLogin";
import _ from 'lodash';


const TOKEN_KEY = 'token_key';
function getToken() {
    return Cookies.get(TOKEN_KEY);
}

const ignorePage = [
    '/login',
    '/not-permission',
];

// 静态路由，不需要进行权限验证的
const staticRoutes = [
    'login',
    'not-permission',
];


// 有个问题，如果是一个不存在的页面，根据这个校验，还是会跳没有权限页面，而不是404页面，如何破？

// 递归校验。
// 除了递归校验之外，还可以先将后台的数据递归抽取到一个数组中后，再进行判断，这样，避免
// 递归遍历了。因为反正是根据item类型来判断的，把item的数据提取出来为一个数组就好了。
// 这就是数据的扁平化，避免深层次嵌套遍历。
const check = (permission, urlName) => {

    if (_.isArray(permission)) {
        for (let i = 0; i < permission.length; i += 1) {
            const result = check(permission[i], urlName);
            if (result) {
                return result;
            }
        }
        return false;
    }

    if (_.isObject(permission)) {
        if (permission.type === 'item') {
            return permission.name === urlName;
        }
        if (permission.type === 'subMenu') {
            return check(permission.children, urlName);
        }
        return false;
    }

    return false;



}

// 一个页面权限的缓存。(如果切换了权限，缓存应该也要更换的)
// const cache = new Map();

// 校验此页面是否符合权限
// 优化：你可以提供递归校验的缓存。每一个item的校验结果都缓存起来。
const checkPermission = (permissionData, route) => {
    let result = false;
    // if (cache.has(route.name)) {
    //     result = cache.get(route.name);
    // }
    // else {
    //     result = check(permissionData, route.name);
    //     cache.set(route.name, result);
    // }
    result = check(permissionData, route.name);
    if (!result) {
        // 静态路由的校验
        result = staticRoutes.findIndex((value) => {
            return value === route.name;
        }) >= 0;
    }

    return result;
}


// 全局路由守卫
router.beforeEach((to, from , next) => {
    NProgress.start();
    if (getToken()) {
        // 已登陆或者在不需要校验的页面中，比如登陆页面中就不应该校验，否则，死循环
        // 拥有token
        if (to.path === '/login') {
            next({
                path: '/',
            });
            NProgress.done();
        }
        else {
            // 竟然可以直接使用store实例
            if (store.getters.roles.length > 0) {
                // 以获取用户角色信息
                const result = checkPermission(store.getters.permissionData, to);
                if (result) {
                    store.commit('addTagPage', to);
                    // 权限通过
                    next();
                    NProgress.done();
                }
                else {
                    // 权限未通过
                    next({
                        path: '/not-permission',
                    });
                    NProgress.done();
                }
            }
            else {
                // 未获取角色信息
                store.dispatch('getRolesInfo', { type: 'admin' }).then(({ data }) => {

                    // 根据permission数据，获取此用户真正的可访问路由表，使用addRouters方法
                    // 根据permission数据，此时路由中的路由是完全是静态的，那么在每次进行路由跳转
                    // 时，我们都需要判断此用户是否有次路由的权限。
                    // 上面两种方法的permission数据都是一样的，即只有这个用户的可访问的权限列表
                    const result = checkPermission(data.rolesInfo.permission, to);
                    if (result) {
                        store.commit('addTagPage', to);
                        // 权限通过
                        next();
                        NProgress.done();
                    }
                    else {
                        // 权限未通过
                        next({
                            path: '/not-permission',
                            replace: true,
                        });
                        NProgress.done();
                    }

                }).catch(() => {
                    // 获取失败，退出登录
                });

            }



        }

    }
    else {

        if (ignorePage.findIndex((value) => {
            return value === to.path;
        }) >= 0 ) {
            next();
            NProgress.done();
            return;
        }

        // 暂未登陆，跳转到登陆页
        next({
            path: '/login',
        });
        NProgress.done();
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})


