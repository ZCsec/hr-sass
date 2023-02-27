<template>
  <div>
    <el-form-item label="期望离职时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期时间"
          v-model="form.leaveDate1"
          style="width: 100%"
        ></el-date-picker
        ><el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.leaveDate2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-col>
    </el-form-item>
    <el-form-item label="离职原因">
      <el-input type="textarea" v-model="form.leaveReason"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="leaveWork">提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  computed: {
    form: {
      get() {
        return this.$store.state.home.form
      },
      set(val) {
        this.$store.state.home.form = val
      }
    }
  },
  methods: {
    leaveWork() {
      this.$store.dispatch('home/leaveWork').then((res) => {
        if (this.$store.state.home.getStatus === 10000) {
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
        this.$store.state.home.form.leaveReason = ''
      })
    },
    cancel() {
      this.$store.state.home.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
