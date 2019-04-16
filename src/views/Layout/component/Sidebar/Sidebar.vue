<template>
    <div class="sidebar">
        <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened
                router
                @select="menuSelect"
        >
            <sidebar-item></sidebar-item>
    
        </el-menu>
    </div>
</template>

<script>
    import SidebarItem from './SidebarItem';
    export default {
        name: 'Sidebar',
        methods: {
            menuSelect(index, indexPath) {
                // TODO 应该有一个映射列表，不然文本无法获取，并且menu的选项最好也是通过一个配置文件来遍历决定的
                this.updateBreadcrumbPath( indexPath[indexPath.length - 1]);


            },
        },
        components: {
            SidebarItem,
        },
    }
</script>

<style scoped lang="scss">
    .sidebar {
    
    }
</style>
