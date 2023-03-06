<template>
  <div>
    <div class="top">
      <div>
        <el-button type="primary" @click="imp">导入</el-button>
        <el-button type="text" @click="dialogFormVisible = true" class="btn3">+ 新增员工</el-button>
      </div>
    </div>
    <el-dialog title="编辑员工" :visible.sync="dialogFormVisible">
        <el-form :model="formData" :rules="rules" ref="addEmployee">
          <el-form-item label="姓名：" :label-width="formLabelWidth" prop="username">
            <el-input ref="name" autocomplete="off" v-model="formData.username" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="手机：" :label-width="formLabelWidth" prop="mobile">
            <el-input ref="phone" autocomplete="off" v-model="formData.mobile" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="入职时间：" :label-width="formLabelWidth" prop="timeOfEntry">
              <el-date-picker ref="time" v-model="formData.timeOfEntry" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="聘用形式：" :label-width="formLabelWidth"  prop="formOfEmployment">
           <el-select v-model="formData.formOfEmployment" placeholder="请选择" :style="{width:'70%'}">
    <el-option
      v-for="item in EmployeeEnum.hireType"
      :key="item.id"
      :label="item.value"
      :value="item.id">
    </el-option>
  </el-select>
          </el-form-item>
          <el-form-item label="工号：" :label-width="formLabelWidth" prop="workNumber">
            <el-input ref="worknumber" autocomplete="off" v-model="formData.workNumber" :style="{width:'70%'}"></el-input>
          </el-form-item>
          <el-form-item label="部门：" :label-width="formLabelWidth" prop="departmentName">
            <el-input ref="department" @focus="getDepartments" autocomplete="off" v-model="formData.departmentName" :style="{width:'70%'}"></el-input>
            
            <el-tree v-loading="loading" v-if="showTree" :data="treeData" :props="{label:'name'}" default-expand-all="true" @node-click="selectNode"></el-tree>
          
          </el-form-item>
          <el-form-item label="转正时间" :label-width="formLabelWidth" prop="correctionTime">
              <el-date-picker ref="time" v-model="formData.correctionTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-form>
        <template v-slot:footer>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <el-button size="small" @click="btnCancel">取消</el-button>
              <el-button type="primary" size="small" @click="btnOK">确认</el-button>
            </el-col>
          </el-row>
        </template>
      </el-dialog>
  </div>
</template>

<script>

import EmployeeEnum from "@/api/constant/employees"; // 引入员工的枚举对象
import { getDepartments } from "@/api/employee/departments";
import { tranListToTreeData } from "@/utils/index";
import { addEmployee } from "@/api/employee/employee";
import bus from '@/view/Employee/eventBus'

export default {
  name: "HrSassMainCom",

  data() { 
    return {
      EmployeeEnum:EmployeeEnum,
      dialogFormVisible: false,
      formLabelWidth: '120',
      formData: {
        username: '',
        mobile: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        timeOfEntry:'',
        correctionTime:'',
      },
      rules:{
        username:[{required:true,message:'用户姓名不能为空',trigger:'blur'},{min:1,max:4,message:'用户姓名1-4位',trigger:'blur'}],
        mobile: [{required:true,message:'手机号不能为空',trigger:'blur'},{pattern:/^1[3-9]\d{9}$/,message:'手机号格式不正确',trigger:'blur'}],
        formOfEmployment: [{required:true,message:'聘用形式不能为空',trigger:'blur'}],
        workNumber: [{required:true,message:'工号不能为空',trigger:'blur'}],
        departmentName: [{required:true,message:'部门不能为空',trigger:'change'}],
        timeOfEntry:[{required:true,message:'入职时间',trigger:'blur'}],
      },
      // 时间
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      treeData:[],
      showTree:false,
      loading:false,
      value1: ""
    };
  },

  mounted() {},

  methods: {
    imp() {
      this.$router.push({
        path: "/layout/imp"
      });
    },

    async getDepartments() {
      this.showTree = true
      this.loading = true
      const { depts } = await getDepartments()
       this.treeData = tranListToTreeData(depts,'')
       this.loading = false
    },
    selectNode(node) {
      this.formData.departmentName = node.name
      this.showTree = false
    },
    async btnOK() {
      console.log(this.$refs);
      try {
        await this.$refs.addEmployee.validate()
        await addEmployee(this.formData);
        bus.$emit('parent','formData')
        // this.$parent.getEmployeeList && this.$parent.getEmployeeList(); //直接调用父组件更新的方法
        this.$message.success("操作成功！");
        this.$parent.showDialog = false;
        location. reload ()
      } catch (error) {
        console.log(error);
      }
    },
    btnCancel() {
      this.dialogFormVisible = false
      this. formData = {
        username: "",
        mobile: "",
        timeOfEntry: "",
        formOfEmployment: "",
        workNumber: "",
        departmentName: "",
        correctionTime: "",
      },
      this.$refs.addEmployee.resetFields()
    }
  } 
};
</script>

<style lang="scss" scoped>
.top {
  background-color: #fff;
  height: 57px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn3 {
  padding: 12px 20px;
  background-color: #409eff;
  color: #fff;
  margin-right: 20px;
}
</style>