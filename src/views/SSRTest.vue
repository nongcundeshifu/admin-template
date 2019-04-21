<template>
    <div>
        <div>ssr测试</div>
        <el-button>我是测试</el-button>
        <el-time-picker
                v-model="value2"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
                arrow-control
                v-model="value3"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
        </el-time-picker>
    </div>
    
</template>

<script>
    export default {
        name: 'SSRTest',
        // meta头信息
        metaInfo: {
            title: '我是ssrTest页面',
            meta: [
                {
                    name: 'keywords',
                    content: '关键字1,关键字2,关键字3',
                },
                {
                    name: 'description',
                    content: '我是描述性内容',
                },
            ],
        },
        data() {
            return {
                value2: new Date(2016, 9, 10, 18, 40),
                value3: new Date(2016, 9, 10, 18, 40)
            };
        }
    }
</script>

<style scoped lang="scss">

</style>
