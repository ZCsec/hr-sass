<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>

    <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>

  </el-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value1:''
        }
    }
};
</script>

<style lang="less" scoped>

</style>