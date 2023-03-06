<template>
  <!--考勤-历史归档 -->
  <div class="content">
    <el-card>
      <el-row :span="6" class="content">
        <el-col class="title">
          <span>员工历史归档</span>
        </el-col>
        <el-col :span="6" class="calendar">
          <el-date-picker v-model="value1" type="year" placeholder="2023"></el-date-picker>
        </el-col>
      </el-row>
      <div class="con">
        <span>该年份无归档报表</span>
        <div v-for="( itemes, index) in tableData" :key="index" class="itemes">
          <div class="itemTopLab" :class="{act: itemes.act}">
            <div class="lab" @click="openTable(itemes,index)">></div>
            <div>
              <p
                ref="sheelName"
                class="title"
              >{{ itemes.archiveYear }}-{{ itemes.archiveMonth }}月员工报表</p>
              <p class="labTit" @click="openTable(itemes,index)">考勤统计</p>
            </div>
            <div class="fr">
              <div>
                <p class="itemTit">
                  <span>总人数</span>
                </p>
                <p class="itemNum">{{ itemes.totalPeopleNum }}</p>
              </div>
              <div>
                <p class="itemTit">
                  <span>全勤人数</span>
                </p>
                <p class="itemNum">{{ itemes.fullAttePeopleNum }}</p>
              </div>
            </div>
          </div>
          <div v-show="itemes.act" class="itemDropDown">
            <el-alert
              title="迟到、早退和补签的统计单位为“次”；所有假期类型、外出、旷工的统计单位均为“天”。"
              type="warning"
              :closable="false"
              show-icon
            />
            <div class="topLab">
              <div class="rightLabBox">
                <a
                  class="el-button fr el-button--primary el-button--mini"
                  title="导出"
                  @click="handleExport(index)"
                >导出</a>
              </div>
            </div>
            <el-table
              id="item"
              :data="contentData"
              height="300"
              border
              style="width: 100%;text-align: center"
            >
              <el-table-column prop="name" label="姓名" width="120" />
              <el-table-column prop="workNumber" label="工号" width="100" />
              <el-table-column prop="mobile" label="手机号" width="200" />
              <el-table-column prop="department" label="部门" width="200" />
              <el-table-column prop="leaveDays" label="事假" width="100" />
              <el-table-column prop="dayOffLeaveDays" label="调休" width="100" />
              <el-table-column prop="normalDays" label="正常" width="100" />
              <el-table-column prop="laterTimes" label="迟到次数" width="100" />
              <el-table-column prop="earlyTimes" label="早退次数" width="100" />
              <el-table-column prop="absenceDays" label="旷工天数" width="100" />
              <el-table-column
                prop="isFullAttendanceint"
                :formatter="fStandards"
                label="是否全勤"
                width="100"
              />
              <el-table-column prop="actualAtteOfficialDays" label="实际出勤天数（正式）" width="180" />
              <el-table-column prop="workingDays" label="应出勤工作日" width="120" />
              <el-table-column prop="salaryOfficialDays" label="计薪天数（正式）" width="150" />
            </el-table>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { departmentListAPI, getArchivingListAPI } from "@/api/index";
export default {
  data() {
    return {
      value1: "",
      tableData: [], //历史归档列表
      departmentData: [], //部门信息
      requestParameters: {
        departmentId: "",
        year: ""
      }
    };
  },
  created() {
    this.getDepartments();
    const { preDates, preYear } = this.getMonth();
    this.requestParameters.year = preYear;
  },
  methods: {
    // 获取部门列表
    async getDepartments() {
      const res = await departmentListAPI();
      // console.log(res.data);
      this.departmentData = res.data.depts;
      this.requestParameters.departmentId = res.data.depts[0].id;
      this.getArchivingList(this.requestParameters);
    },
    // 历史归档列表
    async getArchivingList(params) {
      const res = await getArchivingListAPI(params);
      // console.log(111,res);
    },
    getMonth: function() {
      /* 默认显示上个月的日期 */
      var nowdays = new Date();
      var year = nowdays.getFullYear();
      var month = nowdays.getMonth();
      if (month === 0) {
        month = 12;
        year = year - 1;
      }
      if (month < 10) {
        month = "0" + month;
      }
      var preYear = year; // 年
      var preDates = year + "-" + month; // 上个月
      var preMonth = month; // 上个月
      month++;
      return {
        preDates: preDates,
        preYear: preYear,
        preMonth: preMonth
      };
    }
  }
};
</script>

<style lang="less" scoped>
.el-card {
  position: relative;
  margin: 20px;
  height: 500px;
  .content {
    display: flex;
    // justify-content: space-between;

    .title {
      margin-left: 10px;
      span {
        font-size: 18px;
        font-weight: 600;
        color: #107be6;
        border-bottom: 4px solid #8a97f8;
        padding-bottom: 10px;
      }
    }

    .calendar {
      text-align: right;
    }
  }
  .con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>