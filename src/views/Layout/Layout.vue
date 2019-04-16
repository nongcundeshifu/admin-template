<template>
    <div class="app-layout">
        
        <div class="left">
            <sidebar></sidebar>
        </div>
        
        <div class="right">
            <navbar></navbar>
            <page-main></page-main>
        </div>
        
        
    </div>
</template>

<script>
    import Navbar from './component/Navbar';
    import PageMain from './component/PageMain';
    import Sidebar from './component/Sidebar/Sidebar';
    
    export default {
        name: 'Layout',
        
        components: {
            Navbar,
            PageMain,
            Sidebar,
        },
    }
</script>

<style scoped lang="scss">

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
        }
        
        .right {
            min-height: 100%;
            padding-left: 210px;
        }
    }
    
</style>
