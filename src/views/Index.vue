<template>
    <div>
        我是首页
        <div>您的权限是：{{roles}}</div>
        <br/>
        <el-button-group>
            <el-button type="primary" :plain="!roles.includes('admin')" @click="toggleRoles('admin')">admin</el-button>
            <el-button type="primary" :plain="!roles.includes('edit')" @click="toggleRoles('edit')">edit</el-button>
            <!-- 游客 -->
            <el-button type="primary" :plain="!roles.includes('visitor')" @click="toggleRoles('visitor')">visitor</el-button>
        </el-button-group>
    </div>
</template>

<script>
    import Layout from './Layout/Layout';
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        name: 'Index',
        data() {
            return {
            
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
                this.getRolesInfo({ type: rolesType });
            },
            ...mapActions(['getRolesInfo']),
        },
    }
</script>

<style scoped lang="scss">

</style>
