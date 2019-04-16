import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

// 路由
import routerTest from './router-test';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
    require('./api/mock');
}

Vue.use(ElementUI);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
