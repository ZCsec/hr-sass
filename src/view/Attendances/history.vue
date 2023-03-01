<template>
  <div>
    <el-card class="box-card" style="width:1250px;height:600px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <div class="document">
            <p>员工历史归档</p>
          </div>
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
        <div class="main">
          <p>该年份无归档报表</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ""
    };
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  .nav{
    height: 60px;
    div {
      float: left;
      width: 50%;
      height: 10%;
    }
    .document {
      p {
        width: 18%;
        text-align: left;
        line-height: 20px;
        font-size: 18px;
        font-weight: 800;
        color: #409eff;
        border-bottom: 3px #409eff solid;
      }
    }
    .block {
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        float: right;
        margin-top: 10px;
      }
    }
  }
  .main {
    height: 480px;
    p {
      display: block;
      text-align: center;
      padding: 220px;
      font-size: 16px;
      color: #717171dd;
    }
  }
}
</style>