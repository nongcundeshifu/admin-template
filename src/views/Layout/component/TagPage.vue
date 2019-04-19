<template>
    <!-- 打开的标签页 -->
    <div class="tag-page">
        <!--<el-tag disable-transitions size="small">-->
            <!--{{$t(`breadcrumb.index`)}}-->
        <!--</el-tag>-->
        <el-tag
                @click="clickTag(tag)"
                @close="closeTag(tag)"
                v-for="tag in tagPageList"
                :key="tag.title"
                :closable="!tag.notClosable"
                disable-transitions
                :type="tag.target ? 'danger' : 'success'"
                size="small">
            {{$t(`breadcrumb.${tag.name}`)}}
        </el-tag>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: 'TagPage',
        data() {
            return {
            
            }
        },
        computed: {
            ...mapGetters(['tagPageList', 'tarageTagPage']),
        },
        methods: {
            clickTag(tag) {
                this.$router.push(tag.path);
            },
            closeTag(tag) {
                this.delTagPage(tag);
                this.$router.push(this.tarageTagPage.path);
                
            },
            ...mapMutations(['delTagPage']),
        },
    }
</script>

<style scoped lang="scss">
    .tag-page {
        padding: 3px 10px;
        border-top: 1px solid #409EFF;
        border-bottom: 1px solid #409EFF;
    }
</style>
