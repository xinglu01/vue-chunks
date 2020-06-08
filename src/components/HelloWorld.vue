<template>
  <div class="hello">
    <my-table :dataList='dataList' :columns='columns' :objectSpanMethod='objectSpanMethod'></my-table>
  </div>
</template>

<script>
  import MyTable from './my-table.vue';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components: {
      MyTable
    },
    data() {
      return {
        test: 'hello vue-cli3',
        message: '测试',
        dataList: [{
          usertype: '民用户',
          times: 123344543453,
          username: '张三',
          deptName: '企业部门',
          status: 2,
        }, {
          usertype: '工商户',
          times: '1233445434',
          username: '李四',
          deptName: '技术部门',
          status: 5,
        }, {
          usertype: '总计',
          times: 123344543453,
          username: '王五',
          deptName: '设计部门',
          status: 6,
        }, {
          usertype: '工商户',
          times: 12334454345376566666666666666,
          username: '小明',
          deptName: '研发部门',
          status: 1,
        }],
        columns: [{
          tableProp: 'deptName', //<String>  对应属性名
          tableLabel: '小区名称', //<String>   表头标签
        }, {
          tableProp: 'usertype', //<String>  对应属性名
          tableLabel: '客户类型', //<String>   表头标签
        }, {
          tableProp: 'status', //<String>  对应属性名
          tableLabel: '隐患户数', //<String>   表头标签
          formatter: (row, column) => {
            return row.status == 1 ? '安检册' : row.status == 5 ? '抄表册' : '随笔册'
          }
        }, {
          tableProp: 'times', //<String>  对应属性名
          tableLabel: '隐患占比', //<String>   表头标签
        }, {
          tableProp: 'username', //<String>  对应属性名
          tableLabel: '隐患数量', //<String>   表头标签
        }, {
          tableProp: '', //<String>  对应属性名
          tableLabel: '轻度隐患', //<String>   表头标签
          children: [{
            tableProp: 'deptName', //<String>  对应属性名
            tableLabel: '公司级', //<String>   表头标签
          }, {
            tableProp: 'times', //<String>  对应属性名
            tableLabel: '用户级', //<String>   表头标签
          }]
        }, {
          tableProp: '', //<String>  对应属性名
          tableLabel: '中度隐患', //<String>   表头标签
          children: [{
            tableProp: 'usertype', //<String>  对应属性名
            tableLabel: '公司级', //<String>   表头标签
          }, {
            tableProp: 'times', //<String>  对应属性名
            tableLabel: '用户级', //<String>   表头标签
          }]
        }, {
          tableProp: '', //<String>  对应属性名
          tableLabel: '重度隐患', //<String>   表头标签
          children: [{
            tableProp: 'usertype', //<String>  对应属性名
            tableLabel: '公司级', //<String>   表头标签
          }, {
            tableProp: 'deptName', //<String>  对应属性名
            tableLabel: '用户级', //<String>   表头标签
          }]
        }]
      }
    },
    methods: {
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return [3, 1];
          } else {
            return [0, 0];
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  $bgcolor: lightblue;
  $textcolor: darkblue;

  .hello {
    color: $textcolor;
  }
</style>