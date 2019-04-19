/**  time:2019/3/26
 *   作者:农村的师傅
 *   功能:接口名称列表
 */

let baseUrl;
if (process.env.NODE_ENV === 'development') {
    // 这是代理接口的地址
    baseUrl = '/api/';

}
else {
    // 这是线上接口地址
    baseUrl = 'https://game.flyh5.cn/game/wx31dd8e9bcce66497/';
}

// api列表，不包含公共接口前缀地址
export default {

    USER_LOGIN: 'login',
    GET_USER_INFO_ADMIN: 'userInfo11',
    GET_USER_INFO_EDIT: 'userInfo22',
    GET_USER_INFO_VISITOR: 'userInfo33',

}



