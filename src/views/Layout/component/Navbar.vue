<template>
    <el-row class="app-header-container" type="flex" align="middle" justify="space-between">
        <el-col :span="4">
            <el-button type="primary" @click="switchCollapse" :icon="collapseIcon"></el-button>
        </el-col>
        <el-col :span="16">
            <el-breadcrumb>
                <transition-group name="breadcrumb">
                    <el-breadcrumb-item  v-if="$route.matched && $route.matched[0].name !== 'app'" key="index">
                        <span @click="breadcrumbClick()">{{$t(`breadcrumb.index`)}}</span>
                        
                    </el-breadcrumb-item>
                    <el-breadcrumb-item  v-for="val in $route.matched" v-if="val.meta.title" :key="val.name">
                        <span @click="breadcrumbClick(val)">{{$t(`breadcrumb.${val.meta.title}`)}}</span>
                    </el-breadcrumb-item>
                </transition-group>
            </el-breadcrumb>
        
        </el-col>
        <el-col :span="4">
            
            <el-select v-model="$i18n.locale" @change="langSwitch">
                <el-option :value="lang.lang" v-for="(lang, index) in langList"
                           :key="`lang${index}`" :label="lang.text">
                    {{lang.text}}
                </el-option>
            </el-select>
        
        </el-col>
    </el-row>
</template>

<script>
    import { langList } from "../../../i18n/lang";
    import store from 'store';
    export default {
        name: 'Navbar',
        props: {
            collapse: Boolean,
        },
        data() {
            return {
                langList,
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
                store.set('locale', value);
            },
            
            // 面包屑点击
            breadcrumbClick(matchedVal) {
                if (!matchedVal) {
                    this.$router.push({
                        path: '/index',
                    });
                    return;
                }
                this.$router.push({
                    path: matchedVal.path,
                });
                
                
            },

        },
    }
</script>

<style lang="scss">
    .app-header-container {
        height: 60px;
        
        .el-breadcrumb {
            font-size: 16px;
            position: relative;
            
            .el-breadcrumb__item:last-child .el-breadcrumb__inner{
                color: #999;
            }
            
        }
    }

    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .5s;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }

    .breadcrumb-move {
        transition: all .5s;
    }

    .breadcrumb-leave-active {
        position: absolute;
    }
</style>
