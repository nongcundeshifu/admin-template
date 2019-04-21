/**  time:2019/3/26
 *   作者:农村的师傅
 *   功能:
 */

import apiTypes from './apiTypes';
import { Random } from 'mockjs';

const login = {
    token: 'fejogg58e454fss574f5ef',
}

const adminRolesInfo = {
    roles: ['admin'],
    // 权限列表: 具体权限还是根据权限列表来的。
    permission: [
        {
            // 权限名
            name: 'index',
            // 此权限的类型 item表示一个el-menu-item
            // subMenu表示一个el-submenu，目前不支持el-menu-item-group
            type: 'item',
            path: '/index',
            icon: 'el-icon-share',
            text: '首页',
            // 页面中的权限
            permission: ['edit', 'submit'],
        },
        {
            // 权限名
            name: 'test',
            // 此权限的类型
            type: 'subMenu',
            path: '/test',
            icon: 'el-icon-share',
            text: '测试组',
            children: [
                {
                    // 权限名
                    name: 'test1',
                    // 此权限的类型
                    type: 'item',
                    path: '/test/test1',
                    icon: 'el-icon-share',
                    text: '测试一',
                },
                {
                    // 权限名
                    name: 'test2',
                    // 此权限的类型
                    type: 'item',
                    path: '/test/test2',
                    icon: 'el-icon-share',
                    text: '测试二',
                },
                {
                    // 权限名
                    name: 'test3',
                    // 此权限的类型
                    type: 'item',
                    path: '/test/test3',
                    icon: 'el-icon-share',
                    text: '测试三',
                },
            ],
        },
        {
            // 权限名
            name: 'menu',
            // 此权限的类型
            type: 'subMenu',
            path: '/test',
            icon: 'el-icon-share',
            text: 'menu',
            children: [
                {
                    // 权限名
                    name: 'menu1',
                    // 此权限的类型
                    type: 'subMenu',
                    path: '/menu/menu1',
                    icon: 'el-icon-share',
                    text: 'menu1',
                    children: [
                        {
                            name: 'menu1-1',
                            type: 'item',
                            path: '/menu/menu1/menu1-1',
                            icon: 'el-icon-share',
                            text: 'menu1-1',
                        },
                        {
                            name: 'menu1-2',
                            type: 'item',
                            path: '/menu/menu1/menu1-2',
                            icon: 'el-icon-share',
                            text: 'menu1-2',
                        },
                    ],
                },
                {
                    // 权限名
                    name: 'menu2',
                    // 此权限的类型
                    type: 'item',
                    path: '/menu/menu2',
                    icon: 'el-icon-share',
                    text: 'menu2',
                },
            ],
        },
    ],
};

const editRolesInfo = {
    roles: ['edit'],
    // 权限列表: 具体权限还是根据权限列表来的。
    permission: [
        {
            // 权限名
            name: 'index',
            // 此权限的类型 item表示一个el-menu-item
            // subMenu表示一个el-submenu，目前不支持el-menu-item-group
            type: 'item',
            path: '/index',
            icon: 'el-icon-share',
            text: '首页',
            permission: ['edit'],
        },
        {
            // 权限名
            name: 'test',
            // 此权限的类型
            type: 'subMenu',
            path: '/test',
            icon: 'el-icon-share',
            text: '测试组',
            children: [
                {
                    // 权限名
                    name: 'test1',
                    // 此权限的类型
                    type: 'item',
                    path: '/test/test1',
                    icon: 'el-icon-share',
                    text: '测试一',
                },
                {
                    // 权限名
                    name: 'test2',
                    // 此权限的类型
                    type: 'item',
                    path: '/test/test2',
                    icon: 'el-icon-share',
                    text: '测试二',
                },
            ],
        },
        {
            // 权限名
            name: 'menu',
            // 此权限的类型
            type: 'subMenu',
            path: '/test',
            icon: 'el-icon-share',
            text: 'menu',
            children: [
                {
                    // 权限名
                    name: 'menu1',
                    // 此权限的类型
                    type: 'subMenu',
                    path: '/menu/menu1',
                    icon: 'el-icon-share',
                    text: 'menu1',
                    children: [
                        {
                            name: 'menu1-1',
                            type: 'item',
                            path: '/menu/menu1/menu1-1',
                            icon: 'el-icon-share',
                            text: 'menu1-1',
                        },
                    ],
                },
                {
                    // 权限名
                    name: 'menu2',
                    // 此权限的类型
                    type: 'item',
                    path: '/menu/menu2',
                    icon: 'el-icon-share',
                    text: 'menu2',
                },
            ],
        },
    ],
};

const visitorRolesInfo = {
    roles: ['visitor'],
    // 权限列表: 具体权限还是根据权限列表来的。
    permission: [
        {
            // 权限名
            name: 'index',
            // 此权限的类型 item表示一个el-menu-item
            // subMenu表示一个el-submenu，目前不支持el-menu-item-group
            type: 'item',
            path: '/index',
            icon: 'el-icon-share',
            text: '首页',
        },
    ],
}


// 用户信息以及全新列表
const userInfo1 = {
    info: {
        userName: '农村的',
        headImage: 'http://img4q.duitang.com/uploads/item/201408/25/20140825140239_ynucM.png',
    },
    // 该角色的权限列表 admin edit
    rolesInfo: adminRolesInfo,
}
const userInfo2 = {
    info: {
        userName: '农村的',
        headImage: 'http://img4q.duitang.com/uploads/item/201408/25/20140825140239_ynucM.png',
    },
    // 该角色的权限列表 admin edit
    rolesInfo: editRolesInfo,
}
const userInfo3 = {
    info: {
        userName: '农村的',
        headImage: 'http://img4q.duitang.com/uploads/item/201408/25/20140825140239_ynucM.png',
    },
    // 该角色的权限列表 admin edit
    rolesInfo: visitorRolesInfo,
}





export default {

    [apiTypes.USER_LOGIN]: login,
    [apiTypes.GET_USER_INFO_ADMIN]: userInfo1,
    [apiTypes.GET_USER_INFO_EDIT]: userInfo2,
    [apiTypes.GET_USER_INFO_VISITOR]: userInfo3,

}



