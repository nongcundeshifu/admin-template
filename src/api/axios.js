/**  time:2019/1/16
 *   作者:农村的师傅
 *   功能:返回axios实例
 */

import axiosConfig from './axios.config';
import axios from 'axios';
import Cookies from 'js-cookie';


const TOKEN_KEY = 'token_key';

const defaultAxios = axios.create(axiosConfig);

// 为每一个请求增加一个token
defaultAxios.interceptors.request.use((config) => {
    let token = Cookies.get(TOKEN_KEY);

    // 为自定义header头增加token
    config.headers.Authorization = `${token}`;
    return config;

})

export default defaultAxios;

// 根据默认配置参数以及自定义参数创建axios实例的工厂函数。
const axiosFactory = (config) => {
    axios.create(axiosConfig);
}

export {
    axiosFactory,
};
// 考虑编写一个工具类来实现参数的合并。
