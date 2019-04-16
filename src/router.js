import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "index" */ './views/Index.vue');
const Login = () => import(/* webpackChunkName: "login" */ './views/Login.vue');

Vue.use(Router);

const staticRoutes = [
    {
        path: '/index',
        name: 'index',
        component: Index,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
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

export default new Router({
    routes: [
        ...staticRoutes,
        ...routerTest,
    ]
})
