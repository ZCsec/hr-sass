<template>
  <div>
    <el-dialog title="申请" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="申请类型">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="加班" value="加班"></el-option>
            <el-option label="离职" value="离职"></el-option>
          </el-select>
        </el-form-item>
        <add-work v-if="addWorkShow"></add-work>
        <leave-work v-else></leave-work>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import addWork from '@/view/Home/elForm/addWork.vue'
import leaveWork from '@/view/Home/elForm/leaveWork'
import LeaveWork from './leaveWork.vue'
export default {
  data() {
    return {
      addWorkShow: true
    }
  },
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
    }
  },
  components: {
    addWork,
    leaveWork,
    LeaveWork
  },
  watch: {
    form: {
      deep: true,
      handler(oldVal, newVal) {
        if (newVal.region === '离职') {
          this.addWorkShow = false
        } else if (newVal.region === '加班') {
          this.addWorkShow = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
