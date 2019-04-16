import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';

Vue.use(Vuex)

const TOKEN_KEY = 'token_key';

const store = new Vuex.Store({
    state: {
        // 存储token，用以判断用户是否登录了。
        token: Cookies.get(TOKEN_KEY),
        userName: '',
        // 角色，可能是多个角色，存储角色信息
        roles: [],
        permissionData: null,
    },
    mutations: {
        setToken(store, token) {
            store.token = token;
        },
        setRoles(store, roles) {
            store.roles = roles;
        },
        setPermissionData(store, permissionData) {
            store.permissionData = permissionData;
        },
    },
    getters: {
        roles: store => store.roles,
        token: store => store.token,
        permissionData: store => store.permissionData,
    },
    actions: {}
})
window.store = store;

export default store;
