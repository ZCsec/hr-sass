<template>
  <div>
    <span class="p1">审批类型:</span>
    <div>
      <span class="approvalState p1">审批状态:</span>
      <el-checkbox v-model="checkList[0]">审批中</el-checkbox>
      <el-checkbox v-model="checkList[1]">审批通过</el-checkbox>
      <el-checkbox v-model="checkList[2]">审批驳回</el-checkbox>
      <el-checkbox v-model="checkList[3]">已撤销</el-checkbox>
    </div>
  </div>
</template>

<script>
import $eventBus from '@/utils/eventBus'
export default {
  data() {
    return {
      checkList: [false, false, false, false]
    }
  },
  watch: {
    checkList: {
      immediate: true,
      handler(newVal, oldVal) {
        $eventBus.$emit('updateVal', newVal)
        // console.log(newVal)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.approvalState {
  display: inline-block;
}
.p1 {
  margin: 8px 20px;
  font-size: 14px;
  color: #555;
  font-weight: bold;
}
</style>
