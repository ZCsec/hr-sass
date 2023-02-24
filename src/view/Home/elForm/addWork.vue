<template>
  <div>
    <el-form-item label="开始时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期时间"
          v-model="form.startDate1"
          style="width: 100%"
        ></el-date-picker
        ><el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.startDate2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-col>
    </el-form-item>
    <el-form-item label="结束时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期时间"
          v-model="form.endDate1"
          style="width: 100%"
        ></el-date-picker>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.endDate2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-col>
    </el-form-item>
    <el-form-item label="补偿方式">
      <p class="tiaoxiu">调休</p>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </div>
</template>

<script>
import { getDate, getTime } from '@/utils/getDate'
import { mapState } from 'vuex'
export default {
  computed: {
    dialogFormVisible: {
      get() {
        return this.$store.state.home.dialogFormVisible
      },
      set(val) {
        this.$store.state.home.dialogFormVisible = val
        console.log(val)
      }
    },
    form: {
      get() {
        return this.$store.state.home.form
      },
      set(val) {
        this.$store.state.home.form = val
      }
    },
    ...mapState('home', ['getStatus'])
  },
  methods: {
    submitForm() {
      this.$store.dispatch('home/getApplication').then((res) => {
        if (this.getStatus === 10000) {
          this.$store.state.home.dialogFormVisible = false
          this.$message({
            message: this.$store.state.home.message,
            type: 'success'
          })
        } else if (this.getStatus === 99999) {
          this.$store.state.home.dialogFormVisible = false
          this.$message({
            message: this.$store.state.home.message,
            type: 'error'
          })
        }
        this.$store.state.home.form.desc = ''
      })
    },
    cancel() {
      this.$store.state.home.dialogFormVisible = false
    }
  },
  watch: {
    form: {
      deep: true,
      handler(oldVal, newVal) {
        newVal.startDate1 = getDate(newVal.startDate1)
        newVal.startDate2 = getTime(newVal.startDate2)
        newVal.endDate1 = getDate(newVal.endDate1)
        newVal.endDate2 = getTime(newVal.endDate2)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
