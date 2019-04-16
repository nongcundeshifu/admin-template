<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    // 全局样式
    @import "./assets/css/reest.css";
    @import "./assets/css/font/iconfont.css";
    @import "./assets/css/svg/svg.css";
    @import "./assets/css/layout/flex.css";
    @import "./assets/css/public.scss";
    #app, html {
        height: 100%;
        width: 100%;
        position: relative;
    }
    
</style>
