/**  time:2019/1/16
 *   作者:农村的师傅
 *   功能:axios配置
 */

import Qs from 'qs';





export default {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

    },
    data: {

    },

    transformRequest: [

    ],

    transformResponse: [
        (data) => {
            // 不知道为什么data是字符串。
            data = JSON.parse(data);
            return data;
        },
    ],

    // 数据转换
    transformRequest: [
        (data) => {

            // 对 data 进行任意转换处理
            return Qs.stringify(data)

        }
    ],


}









