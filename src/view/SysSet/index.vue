<template>
  <div>
    <el-button type="primary" plain class="add">添加菜单</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="menu" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="power" label="权限标识" width="180"></el-table-column>
      <el-table-column prop="describe" label="描述" width="180"></el-table-column>
      <el-table-column label="操作">
        添加权限点 查看api权限 查看 删除
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          menu: "SAAS企业管理",
          power: "saas-clients",
          describe: "",
        },
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.add{
  float: right;
}
</style>
