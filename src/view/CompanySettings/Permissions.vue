<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">分配权限</el-button>
    <el-dialog
  title="为【人事经理】分配权限"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <!-- 选项 -->
  <el-tree
  :data="data"
  show-checkbox
  node-key="id"
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"
  :props="defaultProps">
</el-tree>
<el-checkbox v-model="checked1" class="check">组织架构</el-checkbox>
<el-checkbox v-model="checked2" class="check">公司设置</el-checkbox>
<el-checkbox v-model="checked3" class="check">权限管理</el-checkbox>
<el-checkbox v-model="checked4" class="check">社保</el-checkbox>
<el-checkbox v-model="checked5" class="check">考勤</el-checkbox>
<el-checkbox v-model="checked6" class="check">工资</el-checkbox>
<el-checkbox v-model="checked7" class="check">员工自助</el-checkbox>
<el-checkbox v-model="checked8" class="check">审批</el-checkbox>
  <!-- 选项 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HrSassPermissions',

  data() {
    return {
      checked1:true,
      checked2:true,
      checked3:true,
      checked4:true,
      checked5:true,
      checked6:true,
      checked7:true,
      checked8:true,
      dialogVisible: false,
       data: [{
          id: 3,
          label: '员工管理',
          children: [{
            id: 7,
            label: '用户删除按钮'
          },{
            id: 8,
            label: '用户添加按钮'
          },{
            id: 9,
            label: '用户修改按钮'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },

  mounted() {
    
  },

  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>

<style lang="scss" scoped>
.check {
  width: 60%;
}
</style>