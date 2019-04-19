import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

// i18n
import i18n from './i18n/index';

// 路由
// import routerTest from './router-test';
import './permission';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
    require('./api/mock');
}

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value),
});




new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
