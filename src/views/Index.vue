<template>
    <layout>
        <div>
            我是首页
        </div>
    </layout>
</template>

<script>
    import Layout from './Layout/Layout';
    export default {
        name: 'Index',
        
        components: {
            Layout,
        },
        mounted() {
            window.vm = this;
        },
    }
</script>

<style scoped lang="scss">

</style>
