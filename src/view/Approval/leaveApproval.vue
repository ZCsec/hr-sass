<template>
  <div>
    <div class="left">
      <h2>申请{{ processName }}</h2>
      <div class="msg">
        <h1>{{ procCurrNodeUserName }}</h1>
        <p>部门:{{ departmentName }}</p>
        <p>入职时间:{{ timeOfEntry }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { getDate } from '@/utils/getDate'
import { getProcessDetailAPI } from '@/api'
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
      timeOfEntry: ''
    }
  },
  methods: {
    // 获取查询审批单的详情数据
    async getProcessDetail(id) {
      const res = await getProcessDetailAPI({
        id: id
      })
      console.log(res.data.data)
      this.processName = res.data.data.processName
      this.procCurrNodeUserName = res.data.data.procCurrNodeUserName
      this.departmentName = res.data.data.departmentName
      this.procData_start_time = JSON.parse(res.data.data.procData).start_time
      this.procData_end_time = JSON.parse(res.data.data.procData).end_time
      this.procData_reason = JSON.parse(res.data.data.procData).reason
      this.timeOfEntry = getDate(res.data.data.timeOfEntry)
      console.log(this.processName)
      console.log(this.procCurrNodeUserName)
      console.log(this.departmentName)
      console.log(this.procData_start_time)
      console.log(this.procData_end_time)
      console.log(this.procData_reason)
    }
  },
  created() {
    this.getProcessDetail(this.id)
  }
}
</script>

<style lang="scss" scoped>
.left {
  width: 70%;
  height: 600px;
  border: 1px solid red;
}
</style>
