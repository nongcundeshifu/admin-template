<template>
    <div class="app-layout">
        
        <div class="left" :class="collapseClass">
            <sidebar :menu-data="permissionData" :collapse="collapse"></sidebar>
        </div>
        
        <div class="right" :class="collapseClass">
            <navbar :collapse.sync="collapse"></navbar>
            <tag-page></tag-page>
            <page-main></page-main>
        </div>
        
        
    </div>
</template>

<script>
    import Navbar from './component/Navbar';
    import PageMain from './component/PageMain';
    import Sidebar from './component/Sidebar/Sidebar';
    import TagPage from './component/TagPage';
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'Layout',
        
        data() {
            return {
                collapse: false,
            }
        },
        
        computed: {
            ...mapGetters(['permissionData']),
            collapseClass() {
                return this.collapse ? 'collapse' : '';
            }
        },

        methods: {
        
        },
        
        components: {
            Navbar,
            PageMain,
            Sidebar,
            TagPage,
        },
    }
</script>

<style lang="scss">

    .app-layout {
        width: 100%;
        height: 100%;
        
        .left {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            background-color: rgb(50, 64, 87);
            width: 210px;
            
            &.collapse {
                width: 64px;
    
                .el-menu .el-menu-item span, .el-menu .el-submenu .el-submenu__title span {
                    height: 0;
                    width: 0;
                    overflow: hidden;
                    visibility: hidden;
                    display: inline-block;
                }
            }
        }
        
        .right {
            min-height: 100%;
            padding-left: 210px;
    
            &.collapse {
                padding-left: 64px;
            }
        }
        
        
    }
    
</style>
