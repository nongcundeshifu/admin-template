/**  time:2019/3/26
 *   作者:农村的师傅
 *   功能:
 */

import apiTypes from './apiTypes';
import { Random } from 'mockjs';

const login = {
    token: 'fejogg58e454fss574f5ef',
}

// 用户信息以及全新列表
const userInfo = {
    info: {
        userName: '农村的',
        headImage: 'http://img4q.duitang.com/uploads/item/201408/25/20140825140239_ynucM.png',
    },
    // 该角色的权限列表 admin edit
    rolesInfo: {
        roles: ['admin'],
        // 权限列表: 具体权限还是根据权限列表来的。
        permission: [
            {
                // 权限名
                name: 'index',
                // 此权限的类型 item表示一个el-menu-item
                // subMenu表示一个el-submenu，目前不支持el-menu-item-group
                type: 'item',
                index: 'test1',
            },
            {
                // 权限名
                name: 'test2',
                // 此权限的类型
                type: 'subMenu',
                index: 'test2',
                children: [
                    {
                        // 权限名
                        name: 'test2-1',
                        // 此权限的类型
                        type: 'item',
                        index: 'test2-1',
                    },
                    {
                        // 权限名
                        name: 'test2-2',
                        // 此权限的类型
                        type: 'item',
                        index: 'test2-2',
                    },
                ],
            },
        ],
    },
}





export default {

    [apiTypes.USER_LOGIN]: login,
    [apiTypes.GET_USER_INFO]: userInfo,

}



