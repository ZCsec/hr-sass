<template>
  <div>
    <div class="app">
       <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop=""
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
      prop="enableState"
       sortable
      label="是否在职"
      width="300">
    </el-table-column>
    <el-table-column
      prop="inServiceStatus"
       sortable
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="230">
      <template slot-scope=" { row } ">
        <el-button @click="detail(row.id)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="tall()" >转正</el-button>
        <el-button type="text" size="small" @click="Transfers" >调岗</el-button>
        <el-button type="text" size="small">离职</el-button>
        <el-button type="text" size="small" >角色</el-button>
        <el-button type="text" size="small" @click="delEmployee(row.id)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @current-change="changepage"
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


import { getEmployeeList } from '@/api/employee/employee'
import { delEmployee } from '@/api/employee/employee'
import bus from '@/view/Employee/eventBus'

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
          total:0,
        }
    };
  },


  // async created () {
  //   const res = await getEmployeeListAPI({
      // limit: 6
  //   })
  //   console.log(res.data)
  // },


// async getEmployeeList(){
//    // 获取社保下方界面
//    const res = await getEmployeeList(this.page);
//   //  this.list = res.data.data.rows
   
//    this.page.total = res.data.data.total
//    this.list = res.data.data.rows
//    console.log(this.list);
// },
  // computed:{
  //  list() {
  //   // this.list = this.$store.state.employee.list
  //   console.log('1');
  //  }
  // },
mounted() {

  },
  watch:{
     
  },

  methods: {
    detail(id) {
      console.log(bus);
      bus.$emit("userID", id);
      this.$router.push({
        path:`/layout/detail/${id}`
      })
    },
  tall() {
    this.$message({
            type: 'success',
            message: '以为正式工无需转正'
          })
   },


async getEmployeeList() {
      const { total,rows } = await getEmployeeList(this.page);
      this.page.total = total;
      this.list = rows;
      console.log(this.list);
  },

      async delEmployee(id) {
        try {
          await this.$confirm('确定删除该员工？')
          await delEmployee(id)
          this.$message.success('删除员工成功')
          this.getEmployeeList()
        }catch (error) {
          console.log(error);
        }
      },

    Transfers() {
        this.$message({
            type: 'info',
            message: '暂无可调岗位'
          });  
      },

      changepage(newpage) {
        this.page.page = newpage
        this.getEmployeeList()
      },
  },
  created() {
    bus.$on('parent',function(msg) {
    getEmployeeList()
  })
this.getEmployeeList()
},

};
</script>

<style lang="less" scoped>
.app {
  margin-top: 15px;
}
.block {
  float: right;
  margin-top: 10px;
}
/deep/.el-table .el-table__cell{
text-align:center;
}
</style>