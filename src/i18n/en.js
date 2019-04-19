
import enLocale from 'element-ui/lib/locale/lang/en'

export default {

    menuList: {
        index: {
            text: 'index',
        },
        test: {
            text: 'test',
            children: {
                test1: {
                    text: 'test1',
                },
                test2: {
                    text: 'test2',
                },
                test3: {
                    text: 'test3',
                },
            },
        },
        menu: {
            text: 'menu',
            children: {
                menu1: {
                    text: 'menu1',
                    children: {
                        'menu1-1': {
                            text: 'menu1-1',
                        },
                        'menu1-2': {
                            text: 'menu1-2',
                        },
                    },
                },
                menu2: {
                    text: 'menu2',
                },
            },
        },

    },
    breadcrumb: {
        index: 'index',
        test: 'test',
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
        menu: 'menu',
        menu1: 'menu1',
        menu2: 'menu2',
        'menu1-1': 'menu1-1',
        'menu1-2': 'menu1-2',
    },
    ...enLocale,


}
