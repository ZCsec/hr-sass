<template>
  <div id="app" class="app">
    <!-- 点击新增 -->
    <el-button type="text" @click="dialogFormVisible = true" class="btn"> + 新增角色</el-button>
    <el-dialog title="角色编辑" :visible.sync="dialogFormVisible" class="bianji">
  <el-form :model="form">
    <el-form-item label="角色名称" :label-width="formLabelWidth">
      <el-input v-model="form.data1" autocomplete="off" :style="{width:'70%'}"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form.data2" autocomplete="off" :style="{width:'70%'}"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    <!-- 点击新增结束 -->
    <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="角色名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="描述"
      sortable
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop=""
      label="操作"
      width="280"
      class="cell"
      >
<!-- 权限，修改，删除等操作 -->
<div class="cell2">
  <Permissions class="pad" /> 
  <Revise class="pad" />
   <el-link type="primary" class="pad">主要链接</el-link>
</div>
<!-- 权限，修改，删除等操作 -->
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
</template>

<script>

import Permissions from '@/view/CompanySettings/Permissions.vue'
import Revise from '@/view/CompanySettings/Revise.vue'

export default {
  name: 'HrSassRoleManagement',
  components :{
   Permissions,
   Revise
  },
  data() {
    return {
      tableData: [{
          date: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }],
        pagesize:10,
        currentPage:1,
        // 弹出框
        open:false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    };
  },

  mounted() {
    
  },

  methods: {
     handleSizeChange(val) {
        this.pagesize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
       this.currentPage= val
        console.log(`当前页: ${val}`);
      }
  },
};
</script>

<style lang="scss">
.block {
  float: right;
  margin-top: 10px;
}
.btn66 {
  border: 1px solid #409eff;
  padding: 5px 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 10px;
  color: #fff;
  background-color: #409eff;
  float: left;
}
.cell2 {
  display: flex;
  justify-content: flex-start;
}
.pad {
  margin-right: 15px;
}

</style>