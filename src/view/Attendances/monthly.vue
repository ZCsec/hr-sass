<template>
  <div>
    <el-card class="box-card" style="width:1250px;height:1000px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <h2 style="color: #107be6;">月人事报表</h2>
          <el-tabs v-model="activeName">
            <el-tab-pane label="考勤统计" name="first">
              <div class="report">
                <button @click="downloadFn">导出</button>
              </div>
              <div class="main">
                <el-table :data="List" style="width: 100%" max-height="750">
                  <el-table-column prop="name" label="姓名" width="120" />
                  <el-table-column prop="workNumber" label="工号" width="80" />
                  <el-table-column prop="mobile" label="手机号" width="150" />
                  <el-table-column prop="department" label="部门" width="90" />
                  <el-table-column prop="leaveDays" label="事假" width="100" />
                  <el-table-column prop="dayOffLeaveDays" label="调休" width="100" />
                  <el-table-column prop="normalDays" label="正常" width="100" />
                  <el-table-column prop="laterTimes" label="迟到次数" width="100" />
                  <el-table-column prop="earlyTimes" label="早退次数" width="100" />
                  <el-table-column prop="averageDailyNaturalDays" label="日均时长" width="90" />
                  <el-table-column prop="absenceDays" label="旷工天数" width="100" />
                  <el-table-column prop="whetherItIsFullOfWork" label="是否全勤" width="100" />
                  <el-table-column
                    prop="actualAttendanceDaysAreOfficial"
                    label="实际出勤天数"
                    width="120"
                  />
                  <el-table-column prop="attendanceDay" label="应出勤工作日" width="120" />
                  <el-table-column prop="salaryStandard" label="计薪标准" width="100" />
                  <el-table-column prop="officialSalaryDays" label="计薪天数" width="120" />
                </el-table>
                <!-- 数据表格  -->
                <div class="butList">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="将当前报表存放至归档，归档可以多次，但只保留最后一次"
                    placement="top-start"
                  >
                    <el-button type="primary" size="small" @click="fileFn">归档{{month}}月份报表</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="开始做下月考勤" placement="top-start">
                    <el-button type="primary" size="small" @click="newBulidFn">新建报表</el-button>
                  </el-tooltip>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getReportsAPI, fileAPI, newReportsAPI } from "@/api/index";
export default {
  data() {
    return {
      activeName: "first",
      List: [],
      day: 0,
      requestParameters: {
        atteDate: ""
      },
      month: this.$route.params.month
    };
  },
  created() {
    this.getYearList();
    this.getFormList();
    this.requestParameters.atteDate = this.yearMonth;
  },
  methods: {
    getYearList() {
      this.$store.dispatch("attendances/getyearList").then(res => {
        this.List = this.$store.getters.yearList;
      });
    },
    async getFormList() {
      const res = await getReportsAPI(this.month);
      this.tableList = res.data;
    },
    // 归档
    fileFn() {
      var departmentId = this.requestParameters.departmentId;
      var atteDate = {
        departmentId,
        atteDate: this.month
      };
      this.$confirm(
        "该月报表已归档过，重新归档将覆盖上一份报表，您确认要再次归档吗？",
        "归档" + this.month + "报表"
      ).then(async () => {
        await fileAPI(atteDate);
        this.$message.success("归档成功！");
      });
    },
    // 新建报表
    newBulidFn() {
      this.$confirm(
        "新建报表会使得" +
          this.month +
          "月报表不能修改，且您上一次归档之后的修改将不会被保存。您确定现在就开始做下月考勤吗？",
        "新建" + parseInt(Number(this.month) + Number(1)) + "报表"
      ).then(async () => {
        var atteTime =
          this.month.substring(0, 4) + "-" + this.month.substring(4);
        atteTime = this.getNextMonth(atteTime).datas.replace("-", "");
        this.requestParameters.yearMonth = atteTime;
        await newReportsAPI(this.requestParameters);
        this.$message.success("新建报表成功！");
        this.$router.push("/attendances");
      });
    },
    // 获取下一个月
    getNextMonth: function(date) {
      var arr = date.split("-");
      var year = arr[0]; // 获取当前日期的年份
      var month = arr[1]; // 获取当前日期的月份
      var year2 = year;
      var month2 = parseInt(month) + 1;
      if (month2 === 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }

      if (month2 < 10) {
        month2 = "0" + month2;
      }
      var datas = year2 + "-" + month2;
      var months = month2;
      return {
        datas: datas,
        months: months
      };
    },
    // 导出下载
    downloadFn() {
      try {
        import("@/vendor/Export2Excel").then(excel => {
          const tHeader = [
            "姓名",
            "工号",
            "手机号",
            "部门",
            "事假",
            "调休",
            "正常",
            "迟到次数",
            "早退次数",
            "日均时长",
            "旷工天数",
            "是否全勤",
            "实际出勤天数",
            "应出勤工作日",
            "计薪标准",
            "计薪天数"
          ];
          const filterVal = [
            "name",
            "workNumber",
            "mobile",
            "department",
            "leaveDays",
            "dayOffLeaveDays",
            "normalDays",
            "laterTimes",
            "earlyTimes",
            "averageDailyNaturalDays",
            "absenceDays",
            "whetherItIsFullOfWork",
            "actualAttendanceDaysAreOfficial",
            "attendanceDay",
            "salaryStandard",
            "officialSalaryDays"
          ];
          const data = this.formatJson(filterVal, this.List);
          excel.export_json_to_excel({
            header: tHeader,
            data: data,
            filename: "人事报表",
            autoWidth: true,
            bookType: "xlsx"
          });
          this.$message.success("导出成功");
        });
      } catch (error) {
        this.$message.error(error);
      }
    },
    formatJson(filterVal, jsonData) {
      let Data = Array.from(jsonData);
      return Data.map(v =>
        filterVal.map(j => {
          return v[j];
        })
      );
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
    .el-tabs__item.is-active{
      font-size: 20px !important;
    }
    .main:nth-of-type(1) {
      button {
        border: none;
        color: white;
        background-color: #409eff;
        margin: auto;
        width: 20%;
        height: 30px;
        border-radius: 3px;
        margin-bottom: 20px;
      }
    }
    .el-table--border {
      margin-top: 30px;
    }
    .main {
      width: 100%;
      height: auto;

      .butList {
        margin: auto;
        margin-top: 15px;
        text-align: center;
        width: 50%;
        height: 60px;
        background: #fff;
      }
    }
    .report {
      width: 10%;
      height: 30px;
      float: right;
      button {
        border: none;
        color: white;
        background-color: #409eff;
        width: 100%;
        height: 30px;
        border-radius: 3px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>