import Vue from 'vue'
import Router from 'vue-router';




const Login = () => import(/* webpackChunkName: "login" */ './views/Login.vue');
const NotPermission = () => import(/* webpackChunkName: "not-permission" */ './views/NotPermission.vue');

Vue.use(Router);

// 布局组件
const Layout = () => import(/* webpackChunkName: "layout" */ './views/Layout/Layout.vue');

const Index = () => import(/* webpackChunkName: "index" */ './views/Index.vue');

// 测试组
const test1 = () => import(/* webpackChunkName: "test1" */ './views/test/test1.vue');
const test2 = () => import(/* webpackChunkName: "test2" */ './views/test/test2.vue');
const test3 = () => import(/* webpackChunkName: "test3" */ './views/test/test3.vue');


// 权限路由
const permissionRoutes = [

    // 首页
    {
        path: '/index',
        name: 'index',
        component: Index,
    },

    // 测试页面
    {
        path: '/test',
        name: 'test',
        component: Layout,
        // 自动跳转到子路由中，因为这个父路由本身就只是一个布局容器。
        redirect: '/test/test1',
        children: [
            {
                path: 'test1',
                name: 'test1',
                component: test1,
            },
            {
                path: 'test2',
                name: 'test2',
                component: test2,
            },
            {
                path: 'test3',
                name: 'test3',
                component: test3,
            },
        ],
    },
];


const staticRoutes = [
    {
        path: '/',
        redirect: '/index',
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/not-permission',
        name: 'not-permission',
        component: NotPermission,
    },
    ...permissionRoutes,
    {
        path: '*',
        name: '404',
        component: Index,
    },




];

import Router1 from './views/routerTest/router1';
import Router1_1 from './views/routerTest/router-1-1';
import Router2 from './views/routerTest/router2';

const routerTest = [
    {
        path: '/router1',
        component: Router1,
        meta: {
            route: 'router1',
        },
        children: [
            {
                path: 'router1-1',
                component: Router1_1,
                meta: {
                    route: 'router1-1',
                },
                children: [
                    {
                        path: 'router1-1-1',
                        component: Router2,
                        meta: {
                            route: 'router1-1-1',
                        },
                    },
                ],
            },
            {
                path: 'router1-2',
                component: Router1_1,
                meta: {
                    route: 'router1-2',
                },
            },
        ],
    },

    {
        path: '/router2',
        component: Router2,
        meta: {
            route: 'router2',
        },
    },
];


// 其他的动态路由
export const permissionsRoutes = [

];

const route = new Router({
    routes: [
        ...staticRoutes,
        ...routerTest,
    ]
});
window.route = route;

export default route;
