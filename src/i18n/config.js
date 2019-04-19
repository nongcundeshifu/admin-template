import store from "store";

let locale = store.get('locale');

if (!locale) {
    locale = 'zh';
    store.set('locale', 'zh');
}

export default {
    // 缓存中语言设置
    defaultLocale: locale,

}
