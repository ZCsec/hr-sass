<template>
  <div>
    <el-dialog title="请假" :visible.sync="dialogFormVisible222">
      <el-form ref="form2" :model="form2" label-width="80px">
        <el-form-item label="假期类型">
          <el-select v-model="form2.region2" placeholder="请选择活动区域">
            <el-option label="请假" value="请假"></el-option>
            <el-option label="调休" value="调休"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请单位">
          <p class="tiaoxiu">按天</p>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="5">
            <el-date-picker
              type="date"
              placeholder="选择日期时间"
              v-model="form2.holidayDate1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col :span="5">
            <el-time-picker
              placeholder="选择时间"
              v-model="form2.holidayTime1"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="5">
            <el-date-picker
              type="date"
              placeholder="选择日期时间"
              v-model="form2.holidayDate2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col :span="5">
            <el-time-picker
              placeholder="选择时间"
              v-model="form2.holidayTime2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item
          :label="form2.region2 == '调休' ? '申请天数' : '请假时长'"
        >
          <el-input type="textarea" v-model="form2.Day2"></el-input>
        </el-form-item>
        <el-form-item label="申请理由">
          <el-input type="textarea" v-model="form2.holidayReason"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm2">提交</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getDate, getTime } from '@/utils/getDate'
import { mapState } from 'vuex'
export default {
  computed: {
    dialogFormVisible222: {
      get() {
        return this.$store.state.home.dialogFormVisible2
      },
      set(val) {
        this.$store.state.home.dialogFormVisible2 = val
        console.log(val)
      }
    },
    form2: {
      get() {
        return this.$store.state.home.form2
      },
      set(val) {
        this.$store.state.home.form2 = val
      }
    },
    ...mapState('home', ['getStatus', 'message'])
  },
  methods: {
    submitForm2() {
      this.$store.dispatch('home/getHoliday').then((res) => {
        if (this.getStatus === 10000) {
          // console.log(666)
          this.$store.state.home.dialogFormVisible2 = false
          this.$message({
            message: this.message,
            type: 'success'
          })
        } else if (this.getStatus === 99999) {
          this.$store.state.home.dialogFormVisible2 = false
          this.$message({
            message: this.message,
            type: 'error'
          })
        }
        this.$store.state.home.form2.Day2 = ''
        this.$store.state.home.form2.holidayReason = ''
        this.$store.commit('home/cleanAppStatus')
      })
    },
    cancel() {
      this.$store.state.home.dialogFormVisible2 = false
    }
  },
  watch: {
    form2: {
      deep: true,
      handler(oldVal, newVal) {
        newVal.holidayDate1 = getDate(newVal.holidayDate1)
        newVal.holidayTime1 = getTime(newVal.holidayTime1)
        newVal.holidayDate2 = getDate(newVal.holidayDate2)
        newVal.holidayTime2 = getTime(newVal.holidayTime2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tiaoxiu {
  position: relative;
  top: -14px;
}
</style>
