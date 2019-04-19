

import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {

    menuList: {
        index: {
            text: '首页',
        },
        test: {
            text: '测试',
            children: {
                test1: {
                    text: '测试一',
                },
                test2: {
                    text: '测试二',
                },
                test3: {
                    text: '测试三',
                },
            },
        },
        menu: {
            text: '菜单',
            children: {
                menu1: {
                    text: '菜单一',
                    children: {
                        'menu1-1': {
                            text: '菜单1-1',
                        },
                        'menu1-2': {
                            text: '菜单1-1',
                        },
                    },
                },
                menu2: {
                    text: '菜单二',
                },
            },
        },

    },

    breadcrumb: {
        index: '首页',
        test: '测试',
        test1: '测试一',
        test2: '测试二',
        test3: '测试三',
        menu: '菜单',
        menu1: '菜单一',
        menu2: '菜单二',
        'menu1-1': '菜单1-1',
        'menu1-2': '菜单1-2',
    },



    ...zhLocale,

}
