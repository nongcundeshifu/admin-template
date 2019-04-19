<template>
    <div class="sidebar">
        <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="collapse"
                
                router
                @select="menuSelect"
                :default-active="activeRoute"
        >
            <!-- 看你是想在这里进行循环还是在item内部进行循环了，都可以 -->
            <template v-if="menuData">
                <sidebar-item v-for="(value) in menuData" :key="value.name"
                              :menu-item-data="value" :i18n-field="value.name"></sidebar-item>
            </template>
            
    
        </el-menu>
    </div>
</template>

<script>
    import SidebarItem from './SidebarItem';
    export default {
        name: 'Sidebar',
        props: {
            menuData: {
                type: Array,
            },
            collapse: {
                type: Boolean,
            },
        },
        methods: {
            menuSelect(index, indexPath) {
                // TODO 应该有一个映射列表，不然文本无法获取，并且menu的选项最好也是通过一个配置文件来遍历决定的
                console.log(index, indexPath);
            },
        },
        
        computed: {
            // 根据当前路由，让其一开始就展开
            activeRoute() {
                return this.$route.path;
            },
        },
        components: {
            SidebarItem,
        },
    }
</script>

<style lang="scss" scoped>
    .sidebar {
    
    }

    
</style>
