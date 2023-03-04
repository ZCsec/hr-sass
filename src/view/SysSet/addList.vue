<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="编辑权限" :visible.sync="dialogFormVisible">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
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
      list: [{}],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>