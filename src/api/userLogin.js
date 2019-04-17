/**  time:2019/4/15
 *   作者:农村的师傅
 *   功能:
 */
import axios from './axios';
import apiTypes from './apiTypes';
import _ from "lodash";


export const userLogin = ({ user, password }) => {

    return axios.post(apiTypes.USER_LOGIN, {
        user,
        password,
    });

}


/**
 * 递归permission，为每一个类型为item的项目增加一个index。
 *
*/
// 初始index为null.
const addIndexToPermissionData = (permission, index) => {
    // 如果是对象类型
    if (_.isObject(permission)) {

        if (permission.type === 'item') {
            permission.index = index;
            return;
        }
        // 1.bug修复：item-group中的item和一般item是共享index的才对。
        // 或者说，可以直接让配置自己提供一个index。
        // 2.并且item-group里面也可以放subMenu类型的
        // 扩展：item-group里面也可以放subMenu类型
        if (permission.type === 'item-group') {
            permission.index = index;
            return;
        }

        if (permission.type === 'subMenu') {
            permission.index = index;
            return addIndexToPermissionData(permission.children, index);
            return;
        }

    }

    if (_.isArray(permission)) {

        for(let i = 1; i <= permission.length; i += 1) {
            let nextIndex;
            if (!index) {
                nextIndex = `${i}`;
            }
            else {
                nextIndex = `${index}-${i}`;
            }
            addIndexToPermissionData(permission[i - 1], nextIndex);
        }
        return;

    }

}


/**
 * 根据token获取用户信息（他不和token一起返回，而是分开）
*/
export const getUserInfo = () => {

    return axios.post(apiTypes.GET_USER_INFO, {}).then((res) => {
        addIndexToPermissionData(res.data.rolesInfo.permission, null);
        return res;
    });
}

