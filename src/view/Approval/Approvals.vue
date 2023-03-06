<template>
  <div class="container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="first">
        <ApprovalTypeVue></ApprovalTypeVue>
        <TableColumn></TableColumn>
      </el-tab-pane>
      <el-tab-pane label="我发起的" name="second">
        <ApprovalTypeVue></ApprovalTypeVue>
        <TableColumn></TableColumn
      ></el-tab-pane>
      <el-tab-pane label="待审批" name="third">
        <TableColumn></TableColumn
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ApprovalTypeVue from '@/view/Approval/Form/ApprovalType.vue'
import TableColumn from '@/view/Approval/Form/TableColumn.vue'
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    ApprovalTypeVue,
    TableColumn
  }
}
</script>

<style lang="less" scoped>
/deep/.el-tabs__item {
  font-size: 18px;
}
.container {
  background-color: #fff;
  // height: 500px;
}

/deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}
</style>
