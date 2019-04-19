<template>
    <div>
        您暂无权限访问此页面
        <router-link tag="div" to="/index">
            <el-button @click="">返回首页</el-button>
        </router-link>
        
    </div>
</template>

<script>
    export default {
        name: 'NotPermission',
    }
</script>

<style scoped lang="scss">

</style>
