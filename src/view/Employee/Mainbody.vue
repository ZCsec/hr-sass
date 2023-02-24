<template>
  <div>
    <div class="app">
       <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      sortable
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phone"
       sortable
      label="手机号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="worknumber"
      sortable
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="manner"
       sortable
      label="聘用形式"
      width="300">
    </el-table-column>
    <el-table-column
      prop="department"
       sortable
      label="部门"
      width="300">
    </el-table-column>
    <el-table-column
      prop="time"
       sortable
      label="入职时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="incumbency"
       sortable
      label="是否在职"
      width="300">
    </el-table-column>
    <el-table-column
      prop="state"
       sortable
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="230">
      <template slot-scope="scope">
        <el-button @click="golook" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">转正</el-button>
        <el-button type="text" size="small">调岗</el-button>
        <el-button type="text" size="small">离职</el-button>
        <el-button type="text" size="small">角色</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="[10]"
      layout="total, prev, pager, next"
      :total="tableData.length">
    </el-pagination>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassMainTop',

  data() {
    return {
      tableData: [{
          id: 1,
          name: '王小虎',
          phone: '19897630403',
          worknumber: '9000',
          manner: '面试通过',
          department: '安检',
          time:'2001-04-17',
          incumbency:'是',
          state:'可用'
        }]
    };
  },

  mounted() {
    
  },

  methods: {
    golook() {
      this.$router.push({
        path:'/layout/golook'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.app {
  margin-top: 15px;
}
.block {
  float: right;
  margin-top: 10px;
}
</style>