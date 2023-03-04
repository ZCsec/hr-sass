<template>
  <div class="container">
    <div class="left">
      <div class="left-top">
        <h2>申请{{ processName }}</h2>
        <div class="msg">
          <h1>{{ procCurrNodeUserName }}</h1>
          <p>部门:{{ departmentName }}</p>
          <p>入职时间:{{ timeOfEntry }}</p>
        </div>
      </div>
      <hr />
      <ul v-if="processName == '请假'" class="left-main">
        <li>
          申请类型: <span>{{ processName }}</span>
        </li>
        <li>
          请假类型: <span>{{ holidayType == '1' ? '事假' : '待定' }}</span>
          <!-- 请假类型: <span>{{ getProcessState }}</span> -->
        </li>
        <li>申请单位: <span>天</span></li>
        <li>
          开始时间: <span>{{ procData_start_time }}</span>
        </li>
        <li>
          结束时间: <span>{{ procData_end_time }}</span>
        </li>
        <li>
          请假时长: <span>{{ duration }}</span>
        </li>
        <li>
          申请事由: <span>{{ procData_reason }}</span>
        </li>
      </ul>
      <ul v-else-if="processName == '加班'" class="left-main">
        <li>补偿方式: <span>调休</span></li>
        <li>
          加班开始时间: <span>{{ procData_start_time }}</span>
        </li>
        <li>
          加班结束时间: <span>{{ procData_end_time }}</span>
        </li>
        <li>
          申请原因: <span>{{ procData_reason }}</span>
        </li>
      </ul>
      <ul v-else-if="processName == '离职'" class="left-main">
        <li>
          申请类型: <span>{{ processName }}</span>
        </li>
        <li>
          期望离职时间: <span>{{ procApplyTime }}</span>
        </li>
        <li>
          离职原因: <span>{{ procData_reason }}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <h3>审批记录</h3>
      <hr />
      <div class="block">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(obj, index) in processList"
            :key="index"
            :timestamp="obj.handleTime | timeSet"
            >{{ obj.handleUserName }}
            {{ obj.handleOpinion }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { getDate } from '@/utils/getDate'
import { getProcessDetailAPI, getProcessRateAPI, getUserMsgAPI } from '@/api'
export default {
  props: ['id'],
  data() {
    return {
      processName: '',
      procCurrNodeUserName: '',
      departmentName: '',
      processName: '',
      procData_start_time: '',
      procData_end_time: '',
      procData_reason: '',
      timeOfEntry: '',
      processState: '',
      duration: '',
      procApplyTime: '',
      holidayType: '',
      reverse: false,
      processList: [],
      pUserImg: ''
    }
  },
  methods: {
    // 获取查询审批单的详情数据
    async getProcessDetail(id) {
      const res = await getProcessDetailAPI({
        id: id
      })
      // console.log(res.data.data)
      this.processName = res.data.data.processName
      this.procCurrNodeUserName = res.data.data.procCurrNodeUserName
      this.departmentName = res.data.data.departmentName

      this.procData_reason = JSON.parse(res.data.data.procData).reason
      this.timeOfEntry = getDate(res.data.data.timeOfEntry)
      this.processState = res.data.data.processState
      this.duration = JSON.parse(res.data.data.procData).duration
      this.wash(res)
    },
    wash(res) {
      if (this.processName == '请假') {
        this.procData_start_time = JSON.parse(
          res.data.data.procData
        ).startTime.substring(0, 10)
        this.procData_end_time = JSON.parse(
          res.data.data.procData
        ).endTime.substring(0, 10)
        this.holidayType = JSON.parse(res.data.data.procData).holidayType
      } else if (this.processName == '加班') {
        this.procData_start_time = JSON.parse(
          res.data.data.procData
        ).start_time.substring(0, 10)
        this.procData_end_time = JSON.parse(
          res.data.data.procData
        ).end_time.substring(0, 10)
        // console.log(this.procData_end_time)
      } else if (this.processName == '离职') {
        this.procApplyTime = getDate(res.data.data.procApplyTime)
      }
    },
    async getProcessRate(id) {
      const res = await getProcessRateAPI({
        id: id
      })
      console.log(res.data.data)
      this.processList = res.data.data
      // console.log(typeof this.processList)
    },
    async getUserMsg(id) {
      const res = await getUserMsgAPI(id)
      console.log('获取请求者的详情数据')
      console.log(res)
    }
  },
  created() {
    this.getProcessDetail(this.id)
    this.getProcessRate(this.id)
    // this.getUserMsg(this.id)
  },
  computed: {
    getProcessState() {
      return this.holidayType == '1' ? '事假' : '待定'
      // return '666666666666666'
    }
  },
  filters: {
    timeSet(value) {
      return getDate(value)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}

.left {
  width: 70%;
  height: 600px;
  .left-top {
    margin-left: 20px;
    padding: 20px 0 10px 0;
  }
  .left-main {
    // border: 1px solid red;
    // height: 200px;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    color: #999;
    li {
      margin: 15px 0;
    }
    span {
      margin-left: 10px;
      color: #000;
    }
  }
}

.right {
  width: 25%;
  // border: 1px solid red;
}

/deep/.el-timeline {
  margin-top: 50px;
}

/deep/.el-timeline-item__node {
  border: 2px solid #44b549;
  // :color="'#44b549'" ;
  background-color: #fff;
}
</style>
