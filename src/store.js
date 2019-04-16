import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';

Vue.use(Vuex)

const TOKEN_KEY = 'token_key';

export default new Vuex.Store({
    state: {
        token: Cookies.get(TOKEN_KEY),
        userName: '',
        // 角色，可能是多个角色
        roles: [],
    },
    mutations: {
        setToken(store, token) {
            store.token = token;
        },
        setRoles(store, roles) {
            store.roles = roles;
        }
    },
    getters: {
        roles: store => store.roles,
    },
    actions: {}
})
