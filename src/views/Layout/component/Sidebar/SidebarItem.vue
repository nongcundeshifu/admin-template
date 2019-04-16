<template>
    <div>
        <el-menu-item index="1" :route="{path: '/index'}">
            <i class="el-icon-location"></i>
            <span>首页</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航栏一</span>
            </template>
        
            <el-menu-item index="2-1" :route="{path: '/test'}">
                <i class="el-icon-location"></i>
                <span>测试页面</span>
            </el-menu-item>
            <el-menu-item index="2-2">
                <i class="el-icon-location"></i>
                <span>选项二</span>
            </el-menu-item>
    
        </el-submenu>
    </div>
    
</template>

<script>
    export default {
        name: 'SidebarItem',
    }
</script>

<style scoped lang="scss">

</style>
