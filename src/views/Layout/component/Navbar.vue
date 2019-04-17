<template>
    <el-row class="app-header-container" type="flex" align="middle" justify="space-between">
        <el-col :span="4">
            <el-button type="primary" @click="switchCollapse" :icon="collapseIcon"></el-button>
        </el-col>
        <el-col :span="16">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >
                
                </el-breadcrumb-item>
            
            </el-breadcrumb>
        
        </el-col>
        <!--<el-col :span="4">-->
            <!---->
            <!--<el-select v-model="$i18n.locale" @change="langSwitch">-->
                <!--<el-option :value="lang.lang" v-for="(lang, index) in langList"-->
                           <!--:key="`lang${index}`" :label="lang.text">-->
                    <!--{{lang.text}}-->
                <!--</el-option>-->
            <!--</el-select>-->
        <!---->
        <!--</el-col>-->
    </el-row>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            collapse: Boolean,
        },
        data() {
            return {
            
            }
        },
        computed: {
            collapseIcon() {
                return this.collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left';
            }
        },
        methods: {
            //
            switchCollapse() {
                this.$emit('update:collapse', !this.collapse);
            },
            // 语言切换
            langSwitch(value) {
                // store.set('locale', value);
            },

        },
    }
</script>

<style scoped lang="scss">
    .app-header-container {
        height: 60px;
    }
</style>
