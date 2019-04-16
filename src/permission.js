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


const TOKEN_KEY = 'token_key';
function getToken() {
    return Cookies.get(TOKEN_KEY);
}

// 全局路由守卫
router.beforeEach((to, from , next) => {
    if (getToken()) {
        // 已登陆

    }
    else {
        // 暂未登陆，跳转到登陆页
        next({
            path: '/login',
        });
    }
})


