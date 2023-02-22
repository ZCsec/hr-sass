<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content1 bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
  background: #aeaeae2d;
}
.bg-purple {
  background: #c2c2c2;
}
.bg-purple-light {
  background: #a8a9ac;
}
.grid-content {
  border-radius: 5px;
  min-height: 84px;
  box-shadow: 0 4px 4px 0 rgba(195, 195, 195, 0.692);
}
.grid-content1 {
  border-radius: 5px;
  min-height: 140px;
  box-shadow: 0 4px 4px 0 rgba(195, 195, 195, 0.692);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>