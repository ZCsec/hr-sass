<template>
  <div>
    <div class="app">
       <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="list.id"
      type="index"
      label="序号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="username"
      sortable
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="mobile"
       sortable
      label="手机号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="workNumber"
      sortable
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="formOfEmployment"
       sortable
      label="聘用形式"
      width="300">
    </el-table-column>
    <el-table-column
      prop="departmentName"
       sortable
      label="部门"
      width="300">
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
       sortable
      label="入职时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="inServiceStatus"
       sortable
      label="是否在职"
      width="300">
    </el-table-column>
    <el-table-column
      prop="enableState"
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
        <el-button type="text" size="small" @click="tall()">转正</el-button>
        <el-button type="text" size="small">调岗</el-button>
        <el-button type="text" size="small">离职</el-button>
        <el-button type="text" size="small">角色</el-button>
        <el-button type="text" size="small" @click="open">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change=""
      @current-change=""
      :current-page.sync="page.page"
      :page-size="page.size"
      layout="total, prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>
    </div>
  </div>
</template>

<script>
import { getEmployeeListAPI } from '@/api/index'
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
        }],
        list:[],
        page:{
          page:1,
          size:10,
          total:'',
        }
    };
  },


  // async created () {
  //   const res = await getEmployeeListAPI({
      // limit: 6
  //   })
  //   console.log(res.data)
  // },

async mounted (){
   // 获取社保下方界面
   const res = await getEmployeeListAPI({});
   this.list = res.data.data.rows
   console.log(this.list);
   this.page.total = this.list.length
},

  methods: {
    golook() {
      this.$router.push({
        path:'/layout/golook'
      })
    },
  tall(index) {
    console.log(index);
   }
  },
 open() {
  this.$alert('这是一段内容', '标题名称', {
    confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${ action }`
        });
      }
    });
  }
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