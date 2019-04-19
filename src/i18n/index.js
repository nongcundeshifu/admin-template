import Vue from 'vue';
import VueI18n from 'vue-i18n';
import lang from './lang';
import config from './config';


// 主要要在之前使用注册这个。
Vue.use(VueI18n);

// 他妈的是messages 不是 message
const i18n = new VueI18n({
    locale: config.defaultLocale,
    messages: lang,
})

export default i18n;







