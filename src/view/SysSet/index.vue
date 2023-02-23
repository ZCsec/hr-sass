<template>
  <div>
    <!-- 整体 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 右上角按钮 -->
          <el-button type="primary" plain class="add">
            <i class="el-icon-edit">
              <el-button type="text" @click="dialogFormVisible = true" >新增菜单</el-button >
              <el-dialog title="编辑权限" :visible="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="权限名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限标识" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限描述" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-switch
                    style="display: block"
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="不可见"
                    inactive-text="可见"
                  >
                  </el-switch>
                </el-form>
                <div class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false"
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </i>
          </el-button>

          <!-- 正式内容 -->
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="name" label="菜单名称" width="250">
              <i class="el-icon-folder-opened"></i>
            </el-table-column>
            <el-table-column prop="code" label="权限标识" width="250" ></el-table-column>
            <el-table-column prop="description" label="描述" width="250" ></el-table-column>
            <el-table-column label="操作" width="250">
            <el-button type="text" @click="dialogFormVisible = true" >新增</el-button>
              <el-dialog title="编辑权限" :visible="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="权限名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限标识" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限描述" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  
                  <el-switch style="display: block" v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-text="不可见" inactive-text="可见" >
                  </el-switch>
                </el-form>
                <div class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            <el-button type="text" @click="dialogFormVisible = true" >修改</el-button>
              <el-dialog title="编辑权限" :visible="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="权限名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限标识" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="权限描述" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  
                  <el-switch style="display: block" v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-text="不可见" inactive-text="可见" >
                  </el-switch>
                </el-form>
                <div class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            <el-button type="text">删除</el-button>
            </el-table-column>
            
          </el-table>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getPermissionListAPI } from "@/api/index";
export default {
  data() {
    return {
      tableData: [{}],
      dialogFormVisible: false,
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
      list:[{}]
    };
  },
  // created(){
  //   this.getPermissionListAPI()
  // },
  methods:{
    async getPermissionListAPI(){
      this.list = await getPermissionListAPI();
    }
  }
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
</style>
