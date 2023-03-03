<template>
  <div>
    <el-card class="box-card" style="width:1250px;height:1000px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <h2>月人事报表</h2>
          <el-tabs v-model="activeName">
            <el-tab-pane label="考勤统计" name="first">
              <div>
                <button>导出</button>
              </div>
              <div class="main">
              <el-table :data="List" style="width: 100%" max-height="750">
                  <el-table-column prop="name" label="姓名" width="150"></el-table-column>
                  <el-table-column prop="workNumber" label="工号" width="120"></el-table-column>
                  <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
                  <el-table-column prop="department" label="部门" width="120"></el-table-column>
                  <el-table-column prop="dayOffLeaveDays" label="事假" width="300"></el-table-column>
                  <el-table-column prop="leaveDays" label="调休" width="120"></el-table-column>
                  <el-table-column prop="normalDays" label="正常" width="120"></el-table-column>
                  <el-table-column prop="laterTimers" label="迟到次数" width="300"></el-table-column>
                  <el-table-column prop="earlyTimes" label="早退次数" width="120"></el-table-column>
                  <el-table-column prop="actualAtteOfficialDays" label="日均时长" width="120"></el-table-column>
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
      activeName: "first",
      List: [],
      day:0
    };
  },
  created() {
     this.getYearList();
  },
  methods: {
    getYearList() {
      this.$store.dispatch("attendances/getyearList").then(res => {
        this.List = this.$store.getters.yearList;
      });
    }
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
    div:nth-of-type(1) {
      button {
        border: none;
        color: white;
        background-color: #409eff;
        float: right;
        width: 5%;
        height: 30px;
        border-radius: 3px;
        margin-bottom: 20px;
      }
    }
    .el-table--border {
      margin-top: 30px;
    }
  }
  .main {
    width: 100%;
    height: auto;
  }
}
</style>