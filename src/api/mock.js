/**  time:2019/3/26
 *   作者:农村的师傅
 *   功能:
 */


import Mock from 'mockjs';
// mock模板数据
import mockTemp from "./mockTemplate";
import apiType from './apiTypes';


const { Random } = Mock;



// mock需要监听的api列表
const rurlList = [
    apiType.USER_LOGIN,
    apiType.GET_USER_INFO,
];

// 监听接口
rurlList.forEach((rurl) => {
    Mock.mock(rurl, mockTemp[rurl] || {});
})

Mock.setup({
    timeout: '400-600'
})




