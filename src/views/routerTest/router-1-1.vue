<template>
    <div>
        我是router-1-1
        <router-link to="/router1/router1-1/router1-1-1">跳转到router1-1-1</router-link>
    </div>
</template>

<script>
    export default {
        name: 'router-1-1',
        beforeRouteEnter(to, from, next) {
            console.log('router1-1', 'beforeRouteEnter', to);
            next((vm) => {
                window.router11 = vm;
            });
            next();
            
            
        },
        watch: {
            '$route'(to, from) {
                console.log('router-1-1:watch', to, from);
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
