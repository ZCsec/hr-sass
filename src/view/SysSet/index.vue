<template>
  <div>
    <!-- 整体 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 右上角按钮 -->
          <el-button type="primary" plain class="add">
            <i class="el-icon-edit">
              <el-button type="text" @click="addPermission(1,'0')">新增菜单</el-button>
            </i>
          </el-button>

          <!-- 正式内容 -->
          <el-table :data="powerLists" row-key="id" style="width: 100%">
            <el-table-column prop="name" label="菜单名称" width="250">
              <!-- <i class="el-icon-folder-opened"></i> -->
            </el-table-column>
            <el-table-column
              prop="code"
              label="权限标识"
              width="250"
            ></el-table-column>
            <el-table-column
              prop="description"
              label="描述"
              width="250"
            ></el-table-column>
            <el-table-column label="操作" width="250">
              <template v-slot="{ row }">
                <el-button @click="addPermission(2,row.id)" v-if="row.type === 1" type="text">添加</el-button>
                <el-button @click="editPermission(row.id)" type="text">编辑</el-button>
                <el-button type="text" @click="delPermission(row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 新增编辑弹层 -->
        <el-dialog :visible.sync="showDialog" :title="showText" @close="btnCancel">
          <!-- 表单 -->
          <el-form ref="permForm" :model="formData" :rules="rules" label-width="120px">
            <el-form-item label="名称" prop="name">
              <el-input v-model="formData.name" style="width: 90%" />
            </el-form-item>
            <el-form-item label="标识" prop="code">
              <el-input v-model="formData.code" style="width: 90%" />
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="formData.description" style="width: 90%" />
            </el-form-item>
            <el-form-item label="企业可见">
              <!-- 为0时关闭，为1时开启 -->
              <el-switch
                active-value="1"
                inactive-value="0"
                v-model="formData.enVisible"
                style="width: 90%"
              />
            </el-form-item>
          </el-form>
          <!-- 顶部确定取消 -->
          <el-row type="flex" justify="center" slot="footer">
            <el-col :span="6">
              <el-button type="primary" size="small" @click="enterFn">确定</el-button>
              <el-button size="small" @click="cancelFn">取消</el-button>
            </el-col>
          </el-row>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getPermissionListAPI, delPermissionAPI,addPermissionAPI,updatePermissionAPI,getPermissionDetailAPI } from "@/api/index";
// import { mapGetters } from "vuex";
import { tranListToTreeData } from "@/utils/organ";

export default {
  data() {
    return {
      powerLists: [],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      value: true,
      showDialog: false,  //控制弹窗显示隐藏
      formData: {
        name: "",
        code: "",
        description: "",
        type: "",
        pid: "",
        enVisible: "0",
      },
      rules:{
        name:[{required:true,message:"权限名称不能为空",trigger:"blur"}],
        code:[{required:true,message:"权限标识不能为空",trigger:"blur"}],
      }
    };
  },
  created() {
    this.getPermissionList();
    // this.$store.dispatch("SysSet/getPermissionList");
  },
  methods: {
    // 获取
    async getPermissionList() {
      const res = await getPermissionListAPI();
      console.log(res.data.data);
      //tranListToTreeData内部在查找的时候，参数2，要传递父级id（递归找子对象）
      //为了让pid为0的对象，在数组的第一层
      this.powerLists = tranListToTreeData(res.data.data,"0");
    },
    //dialog关闭事件
    btnCancel(){

    },
    //确定按钮点击事件
    enterFn(){
      this.$refs.permForm.validate().then(()=>{
        if(this.formData.id){
          return updatePermissionAPI(this.formData)
        }
        return addPermissionAPI(this.formData)
      }).then(()=>{
        this.$message.success("操作成功");
        this.getPermissionList()
        this.showDialog = false;
      })
    },
    //取消按钮
    cancelFn(){
      this.formData = {
        name: "",
        code: "",
        description: "",
        type: "",
        pid: "",
        enVisible: "0",
      }
      this.$refs.permForm.resetFields();//移除校验
      this.showDialog = false;
    },
    //删除
    delPermission(id) {
      this.$confirm("您确认要删除该权限点吗").then(()=>{
        return delPermissionAPI(id)
      }).then(()=>{
        this.$message.success("删除成功");
        this.getPermissionList()
      })
    },
    // 新增 
    //type：右上角按钮传1，页面权限点右侧添加传2，（type作为新对象的type使用）
    //pid:右上角按钮传0，页面权限点右侧添加点击，传下来id值（pid也是要给新对象的pid使用）
    addPermission(type,pid){
      this.formData.type = type;
      this.formData.pid = pid;
      this.showDialog = true;   //弹窗出现
    },
    //编辑
    async editPermission(id){
      this.formData = await getPermissionDetailAPI(id)
      this.showDialog = true;
    }
  },
  computed: {
    // ...mapGetters(["powerLists"]),
    showText(){
      return this.formData.id ? "编辑权限" : "新增权限"
    }
  },
};
</script>

<style lang="less" scoped>
a {
  color: blue;
  text-decoration: none;
  margin-left: 5px;
}
.add {
  float: right;
  margin: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 550px;
  box-shadow: 2px 4px 4px 2px rgba(195, 195, 195, 0.692);
}
.operate {
  display: flex;
  justify-content: flex-start;
}
.ope {
  margin-left: 10px;
}
</style>
