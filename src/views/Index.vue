<template>
    <layout></layout>
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
