<template>
  <div>
    <el-card class="box-card" style="width:1250px;height:600px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <h2>月人事报表</h2>
          <el-tabs v-model="activeName">
            <el-tab-pane label="考勤统计" name="first">
              <div>
                <button>导出</button>
              </div>
              <div>
                <el-table border style="width: 100%">
                  <el-table-column prop="date" label="姓名" width="150"></el-table-column>
                  <el-table-column prop="name" label="工号" width="120"></el-table-column>
                  <el-table-column prop="province" label="手机号" width="120"></el-table-column>
                  <el-table-column prop="city" label="部门" width="120"></el-table-column>
                  <el-table-column prop="address" label="事假" width="300"></el-table-column>
                  <el-table-column prop="zip" label="调休" width="120"></el-table-column>
                  <el-table-column prop="zip" label="正常" width="120"></el-table-column>
                  <el-table-column prop="zip" label="迟到次数" width="120"></el-table-column>
                  <el-table-column prop="zip" label="早退次数" width="120"></el-table-column>
                  <el-table-column prop="zip" label="日均时长" width="120"></el-table-column>
                  <el-table-column prop="zip" label="旷工天数" width="120"></el-table-column>
                  <el-table-column prop="zip" label="是否全勤" width="120"></el-table-column>
                  <el-table-column prop="zip" label="实际出勤天数" width="120"></el-table-column>
                  <el-table-column prop="zip" label="计薪标准" width="120"></el-table-column>
                  <el-table-column prop="zip" label="计薪天数" width="120"></el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  .nav {
    width: 90%;
    height: 120px;
    margin: auto;
    h2 {
      text-align: center;
    }
    div:nth-of-type(1){
        button{
            border: none;
            color: white;
            background-color: #409EFF;
            float: right;
            width: 5%;
            height: 30px;
            border-radius: 3px;
            margin-bottom: 20px;
        }
    }
    .el-table--border{
       margin-top: 30px;
    }
  }
}
</style>