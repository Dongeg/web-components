<template>
<div id="main">
 <h1>{{msg}}</h1>
  <el-table
    highlight-current-row
    @current-change="handleCurrentChange"
    :data="tableData"
    border
    style="width:600px;margin: 0 auto">
    <!--勾选框-->
    <el-table-column
      header-align="center"
      type="selection"
      width="55">
    </el-table-column>
    <!--数据索引-->
    <el-table-column
      header-align="center"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      sortable
      prop="name"
      header-align="center"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      header-align="center"
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="comment"
      header-align="center"
      show-overflow-tooltip
      label="留言">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataNum">
    </el-pagination>
    <!--要想调换位置直接换layout属性中的组件名的位置-->
  </div>
  <p>
    你当前单选选中行的数据：{{currentRow}}
  </p>
</div>
</template>
<script>
export default {
  name:"helloword",
  data () {
    return {
      msg:"welcome come to your vue-table",
      tableData: [], //表格数据
      currentPage:1, //当前页
      dataNum:null,   //每页显示数据条数（本示例中其实没有用到）
      currentRow:null,
    }
  },
  mounted :function (){
    this.$nextTick(function () {
      this.getData()
    })
  },
  methods: {
    //切换每页显示条数后触发
    handleSizeChange(val) {
      //这里可以向后端发送一个异步请求，发送对应参数，返回指定数据
      console.log(`每页 ${val} 条`);
    },
    // 点击页码后触发
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      //这里的"curr":val 参数并没有被实际用到
      this.axios.get("http://mockdata/data",{"curr":val}).then((response) => {
        this.tableData = response.data.data
        this.dataNum = response.data.dataNum
      })
    },
    // 页面加载时获取数据
    getData () {
      this.axios.get("http://mockdata/data").then((response) => {
        this.tableData = response.data.data
        this.dataNum = response.data.dataNum
      })
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  },
}
</script>
<style scoped>
  /**
    引入覆盖element-ui 分页组件的自定义样式
  */
  @import '../assets/css/pagination.css';
</style>
