/**  time:2019/4/15
 *   作者:农村的师傅
 *   功能:
 */
import axios from './axios';
import apiTypes from './apiTypes';


export const userLogin = ({ user, password }) => {

    return axios.post(apiTypes.USER_LOGIN, {
        user,
        password,
    });

}

/**
 * 根据token获取用户信息（他不和token一起返回，而是分开）
*/
export const getUserInfo = () => {
    return axios.post(apiTypes.GET_USER_INFO, {});
}

