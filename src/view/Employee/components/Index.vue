<template>
  <div>
    <div class="app">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录账户设置" name="first"><individual /></el-tab-pane>
    <el-tab-pane label="个人详情" name="second"><login /></el-tab-pane>
    <el-tab-pane label="岗位信息" name="third"><Information /></el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>

<script>
import individual from '@/view/Employee/components/individual.vue'
import login from '@/view/Employee/components/login.vue'
import Information from '@/view/Employee/components/Information.vue'
export default {
  name: 'HrSassIndex',
components:{
individual,
login,
Information
},
  data() {
    return {
      activeName: 'first'
    };
  },

  mounted() {
    
  },

  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #fff;
  padding: 20px;
}
</style>