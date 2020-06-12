<template>
    <el-table tooltip-effect="dark" style="width: 100%" size="small" ref="refTable" :span-method="objectSpanMethod" :data="dataList">
        <el-table-column 
            v-for="(column, index) in columns" 
            header-align="center"
            :key='index' 
            :prop="column.tableProp" 
            :formatter="column.formatter" 
            :label="column.tableLabel"
            show-overflow-tooltip
        >
            <el-table-column 
                v-if='column.children' 
                header-align="center" 
                v-for="(child, ind) in column.children"
                :key='ind' :prop="child.tableProp" 
                :label="child.tableLabel"
                show-overflow-tooltip
            ></el-table-column>
        </el-table-column>
    </el-table>
</template>

<script>
    module.exports = {
        props: {
            dataList: { // 表格数据源 默认为空数组
                type: Array,
                default: () => []
            },
            columns: { // 表格的字段展示 默认为空数组
                type: Array,
                default: () => []
            },
            objectSpanMethod: { // 表格的字段展示 默认为空数组
                type: Function,
                default: () => []
            }
        },
        data() {
            return {

            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" type="text/css" scoped>

</style>