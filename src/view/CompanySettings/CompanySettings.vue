<template>
  <div>
    <div class="top">
      <el-tabs v-model="activeName" @tab-click="" class="left">
      <el-tab-pane label="角色管理" name="first" class="role"><RoleManagement /></el-tab-pane>
      <el-tab-pane label="公司信息" name="second" class="comp"><CompanyInformation /></el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>

<script>
import CompanyInformation from '@/view/CompanySettings/CompanyInformation.vue'
import RoleManagement from '@/view/CompanySettings/RoleManagement.vue'
export default {
  name: 'HrSassEmployee',

components :{
  CompanyInformation,
  RoleManagement
},

  data() {
    return {
      activeName: 'first'
    };
  },

  mounted() {
     
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.top {
  border-bottom: 1px solid #eee;
}
</style>