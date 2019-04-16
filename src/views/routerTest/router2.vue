<template>
    <div>
        <router-link to="/router1">跳转到router1</router-link>
    </div>
</template>

<script>
    export default {
        name: 'router2',
        beforeRouteEnter(to, from, next) {
            console.log('router2', 'beforeRouteEnter', to);
            next();
        },
    }
</script>

<style scoped lang="scss">

</style>
