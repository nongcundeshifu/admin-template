<template>
    <div>
        <router-link to="/router1/router1-1">跳转到router1-1</router-link>
        <router-link to="/router2">跳转到router2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    var a = 1;
    export default {
        name: 'router',
        beforeRouteEnter(to, from, next) {
            console.log('router1', 'beforeRouteEnter', to);
            next((vm) => {
                window.test = vm
            });
            
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
            // 或者说父路由跳转到子路由时
            console.log('router1', 'beforeRouteUpdate', to, from);
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log('router1', 'beforeRouteLeave');
            next();
        },
        watch: {
            '$route'(to, from) {
                console.log('router1:watch', to, from);
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
