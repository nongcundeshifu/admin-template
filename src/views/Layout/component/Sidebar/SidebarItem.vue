<template>
    <div>
        <!--<el-menu-item index="1" :route="{path: '/index'}">-->
            <!--<i class="el-icon-location"></i>-->
            <!--<span>首页</span>-->
        <!--</el-menu-item>-->
        <!--<el-submenu index="2">-->
            <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>导航栏一</span>-->
            <!--</template>-->
        <!---->
            <!--<el-menu-item index="2-1" :route="{path: '/test'}">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>测试页面</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="2-2">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>选项二</span>-->
            <!--</el-menu-item>-->
        <!--</el-submenu>-->
        
        <template v-if="menuItemData && menuItemData.type === 'item'">
            <el-menu-item :index="menuItemData.path" :route="{path: menuItemData.path}">
                <i :class="menuItemData.icon"></i>
                <span>{{$t(`menuList.${i18nField}.text`)}}</span>
            </el-menu-item>
        </template>
    
        <template v-if="menuItemData && menuItemData.type === 'subMenu' && menuItemData.children.length > 0">
            <el-submenu :index="menuItemData.index">
                <template slot="title">
                    <i :class="menuItemData.icon"></i>
                    <span>{{$t(`menuList.${i18nField}.text`)}}</span>
                </template>
                <sidebar-item v-for="(value) in menuItemData.children" :key="value.name"
                              :menu-item-data="value" :i18n-field="`${i18nField}.children.${value.name}`"></sidebar-item>
            </el-submenu>
            
        </template>
        
        
    </div>
    
</template>

<script>
    export default {
        name: 'SidebarItem',
        props: {
            menuItemData: {
                type: Object,
            },
            i18nField: {
                type: String,
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
