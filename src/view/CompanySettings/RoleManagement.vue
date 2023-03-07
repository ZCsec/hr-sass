<template>
  <div id="app" class="app">
    <!-- 点击新增 -->
    <el-button type="primary" @click="showDialog = true" class="btn33"> + 新增角色</el-button>
    
    <!-- 点击新增结束 -->
    <el-table
    :data="list"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    
    >
    <el-table-column
    type="index"
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="角色名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop=""
      label="操作"
      width="280"
      class="cell"
      >
<!-- 权限，修改，删除等操作 -->
    <template slot-scope="{ row }">
      <div class="cell2">
      <Permissions class="pad" /> 
      <el-button
        type="text"
        @click="editRole(row.id)"
        >修改</el-button
      >
      <el-button type="text" class="pad" @click="deleteRole(row.id)" >删除</el-button>
      </div>
    </template>
<!-- 权限，修改，删除等操作 -->
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @current-change="changpage"
      :current-page.sync="page.page"
      :page-size="page.pagesize"
      layout="total, prev, pager, next"
      :total="page.total">
    </el-pagination>
    </div>
    <el-dialog
      title="编辑角色"
      :visible="showDialog"
      @close="btnCancel"
     >
     <el-form label-width="120px" :rules="rules" ref="roleForm" :model="roleForm">
      <el-form-item label="角色名称"  prop="name">
        <el-input v-model="roleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="roleForm.description"></el-input>
      </el-form-item>
     </el-form>
      <div slot="footer">
        <el-button @click="btnCancel">取 消</el-button>
        <el-button type="primary" @click="btnOK">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import Permissions from '@/view/CompanySettings/Permissions.vue'
import Revise from '@/view/CompanySettings/Revise.vue'
import { getRoleList , getRoletail ,upRoletail ,addRole } from '@/api/employee/setting'
import { delRole } from '@/api/employee/setting'


export default {
  // name: 'HrSassRoleManagement',
  components :{
   Permissions,
   Revise
  },
  data() {
    return {
      showDialog:false,
      roleForm :{
        name:'',
        description:''
      },
      formLabelWidth: '120px',
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
        list:[],
        page:{
          page:1,
          pagesize:10,
          total:0
        },
        rules:{
          name:[{required: true,message: "角色名称不能为空",trigger: "blur"}]
        }
    };
  },

  mounted() {
    
  },

  created() {
    this.getRoleList()
  },

  methods: {
      async getRoleList() {
      const {total,rows} = await getRoleList(this.page)
      this.page.total = total
      this.list = rows
    },
    changpage(newpage) {
      this.page.page = newpage
       this.getRoleList()
    },
    async deleteRole(id) {
     try {
      await this.$confirm('确认删除该角色吗？')
      await delRole(id) 
      this.getRoleList()
      this.$message.success('删除成功')
     } catch(error) {
      console.log(error);
     }
    },
    async editRole(id) {
      this.roleForm = await getRoletail(id)
      this.showDialog = true
    },
    async btnOK() {
      try {
        await this.$refs.roleForm.validate()
        if(this.roleForm.id) {
          await upRoletail(this.roleForm)
        }else {
          await addRole(this.roleForm)
        }
        this.getRoleList()
        this.$message.success('操作成功')
      } catch (error) {
        console.log(error);
      }
    },
    btnCancel() {
      this.roleForm = {
        name:'',
        description:''
      }
      this.$refs.roleForm.resetFields()
       this.showDialog = false
    }
  },
};
</script>

<style lang="less">
.btn33 {
  margin-bottom: 15px;
}
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
/deep/.el-table .el-table__cell{
text-align:center;
}
</style>