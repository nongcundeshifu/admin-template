<template>
    <div class="login-page">
        <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名">
                <el-input type="text" v-model="user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
    
    import { userLogin } from "../api/userLogin";
    import { mapGetters, mapMutations } from 'vuex';
    import Cookie from 'js-cookie';
    const TOKEN_KEY = 'token_key';
    // cookie过期时间
    const EXPIRES_TIME = 1;

    export default {
        name: 'Login',
        data() {
            return {
                user: '',
                pass: '',
            }
        },
        computed: {
            ...mapGetters(['roles', 'token']),
        },
        mounted() {
            if (this.token) {
                this.$router.replace({
                    path: '/index',
                })
            }
        },
        methods: {
            async submit() {
                const user = this.user;
                const pass = this.pass;
                
                const res = await userLogin({});
                
                // 用户登陆成功后，设置新的cookie中的token，并设置vuex。
                if (res.data.token) {
                    this.setToken(res.data.token);
                    Cookie.set(TOKEN_KEY, res.data.token, {
                        expires: EXPIRES_TIME,
                    });
                    this.$router.replace({
                        path: '/index',
                    });
                }
                else {
                    this.$message.error('出错了');
                }
                
                
            },
            ...mapMutations(['setToken']),
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/utils/utils";
    
    .login-page {
        width: 100%;
        height: 100%;
        
        .demo-ruleForm {
            width: 400px;
            position: absolute;
            @include position-middle();
        }
    }
</style>
