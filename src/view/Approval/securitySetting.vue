<template>
  <div class="container">
    <ul class="check-box">
      <li>
        <span>请假</span>
        <el-switch
          v-model="value"
          @change="getSuspend('process_leave', value)"
          active-color="#13ce66"
          inactive-color="#CCCCCC"
        >
        </el-switch>
      </li>
      <li>
        <span>加班</span>
        <el-switch
          v-model="value2"
          @change="getSuspend('process_overtime', value2)"
          active-color="#13ce66"
          inactive-color="#CCCCCC"
        >
        </el-switch>
      </li>
      <li>
        <span>离职</span>
        <el-switch
          v-model="value3"
          @change="getSuspend('process_dimission', value3)"
          active-color="#13ce66"
          inactive-color="#CCCCCC"
        >
        </el-switch>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDefinitionAPI, getSuspendAPI } from '@/api/index'

export default {
  data() {
    return {
      value: false,
      value2: false,
      value3: false
    }
  },
  wathch: {
    // 请假按钮
    // value(newVal, oldVal) {
    //   console.log(newVal)
    //   if (newVal) {
    //     // 发送请求 参数为true
    //     this.getSuspend('process_leave', !newVal)
    //   } else {
    //     // 发送请求 参数为false
    //     this.getSuspend('process_leave', !newVal)
    //   }
    // }
  },
  methods: {
    getDefinition() {
      getDefinitionAPI().then((res) => {
        this.value = !res.data.data[1].suspended
        this.value2 = !res.data.data[2].suspended
        this.value3 = !res.data.data[0].suspended
      })
    },
    async getSuspend(processKey, enable) {
      // getSuspend(processKey, enable) {
      const res = await getSuspendAPI({
        processKey: processKey,
        enable: !enable
      })
      if (res.data.success === true) {
        this.$message({
          type: 'success',
          message: res.data.message
        })
      } else {
        this.$message({
          type: 'error',
          message: res.data.message
        })
      }
      this.getDefinition()
    }
  },
  created() {
    this.getDefinition()
  }
}
</script>

<style lang="scss" scoped>
.container {
  // width: 100%;
  background-color: #fff;
  .check-box {
    width: 100%;
    line-height: 70px;
    padding: 20px 0;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    li {
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 3px;
      line-height: 25px;
      padding: 15px 30px 15px 20px;
      margin-right: 20px;
      span {
        border-right: 1px solid #ccc;
        padding-right: 15px;
        margin-right: 15px;
      }
      &:nth-of-type(1) {
        margin-left: 20px;
      }
    }
  }
}
</style>
