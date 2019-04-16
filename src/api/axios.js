/**  time:2019/1/16
 *   作者:农村的师傅
 *   功能:返回axios实例
 */

import axiosConfig from './axios.config';
import axios from 'axios';


export default axios.create(axiosConfig);

// 根据默认配置参数以及自定义参数创建axios实例的工厂函数。
export const axiosFactory = (config) => {
    axios.create(axiosConfig);
}

// 考虑编写一个工具类来实现参数的合并。
