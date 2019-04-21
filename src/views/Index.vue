<template>
    <div >
        我是首页
        <div>您的权限是：{{roles}}</div>
        <br/>
        <el-button-group>
            <el-button type="primary" :plain="!roles.includes('admin')" @click="toggleRoles('admin')">admin</el-button>
            <el-button type="primary" :plain="!roles.includes('edit')" @click="toggleRoles('edit')">edit</el-button>
            <!-- 游客 -->
            <el-button type="primary" :plain="!roles.includes('visitor')" @click="toggleRoles('visitor')">visitor</el-button>
        </el-button-group>
        <br/>
        <div :key="`index${key}`">
            <div>您此页面的页面权限为</div>
            <el-button type="primary" v-if="$route.meta.permissionData && $route.meta.permissionData.permission.includes('edit')">编辑</el-button>
            <el-button type="primary" v-permission="'submit'">提交</el-button>
        </div>
        
    </div>
</template>

<script>
    import Layout from './Layout/Layout';
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        name: 'Index',
        metaInfo: {
            title: '我是首页',
            meta: [
                {
                    name: 'keywords',
                    content: '关键字1',
                },
                {
                    name: 'description',
                    content: '我是描述',
                },
            ],
        },
        data() {
            return {
                key: 1,
            }
        },
        components: {
            Layout,
        },
        computed: {
            ...mapGetters(['roles']),
        },
        
        mounted() {
            window.vm = this;
        },
        methods: {
            toggleRoles(rolesType) {
                this.getRolesInfo({ type: rolesType }).then(() => {
                    this.$router.push({
                        path: `/index?${Date.now()}`,
                    })
                    this.key += 1;
                });
            },
            ...mapActions(['getRolesInfo']),
        },
    }
</script>

<style scoped lang="scss">

</style>
