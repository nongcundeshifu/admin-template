import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';
import { getUserInfo } from "./api/userLogin";

Vue.use(Vuex)

const TOKEN_KEY = 'token_key';

const tagPageIgnoreList = ['login', 'not-permission'];



const store = new Vuex.Store({
    state: {
        // 存储token，用以判断用户是否登录了。
        token: Cookies.get(TOKEN_KEY),
        userName: '',
        // 角色，可能是多个角色，存储角色信息
        roles: [],
        permissionData: null,

        // 当前打开页面的列表tag标签,默认有一个index首页，且无法删除的
        tagPageList: [{
            name: 'index',
            target: true,
            path: '/index',
            notClosable: true,
        }],
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

        addTagPage(store, tagData) {
            const tagPageList = store.tagPageList.splice(0);

            if (tagPageIgnoreList.includes(tagData.name)) {
                return;
            }

            let tarageIndex = null;
            tagPageList.forEach((tagPage, index) => {
                if (tagPage.name === tagData.name) {
                    tarageIndex = index;
                }
            })

            // 说明页面栈中已经存在了
            if (tarageIndex !== null) {
                tagPageList.forEach((tagPage) => {
                    tagPage.target = false;
                })
                tagPageList[tarageIndex].target = true;
            }
            else {
                tagPageList.forEach((tagPage) => {
                    tagPage.target = false;
                })
                // 找不到，则添加进去
                tagPageList.push({
                    name: tagData.name,
                    target: true,
                    path: tagData.path,
                })
            }

            store.tagPageList = tagPageList;

        },
        delTagPage(store, tagData) {
            const tagPageList = store.tagPageList.splice(0);

            let tarageIndex = null;
            tagPageList.forEach((tagPage, index) => {
                if (tagPage.name === tagData.name) {
                    tarageIndex = index;
                }
            })

            // 说明页面栈中已经存在了
            if (tarageIndex !== null) {

                if (tagPageList[tarageIndex].target) {
                    tagPageList[tarageIndex - 1].target = true;
                }
                tagPageList.splice(tarageIndex, 1);
            }
            store.tagPageList = tagPageList;
            return
        },

    },
    getters: {
        roles: store => store.roles,
        token: store => store.token,
        permissionData: store => store.permissionData,
        tagPageList: store => store.tagPageList,
        tarageTagPage: (store) => {
            let tarageTagPage = null;
            store.tagPageList.forEach((tagData) => {
                if (tagData.target) {
                    tarageTagPage = tagData;
                }
            });
            if (tarageTagPage) {
                return tarageTagPage;
            }
            return store.tagPageList[0];
        },
    },
    actions: {
        // 获取角色信息
        getRolesInfo({ commit }, { type: rolesType }) {
            return new Promise((resolve) => {

                getUserInfo({ type: rolesType }).then((res) => {
                    const { data } = res;
                    store.commit('setRoles', data.rolesInfo.roles);
                    store.commit('setPermissionData', data.rolesInfo.permission);
                    resolve(res);
                })


            })
        },
    }
})
window.store = store;

export default store;
