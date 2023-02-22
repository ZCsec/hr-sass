<template>
  <div>
    <div class="top">
      <el-button type="text" @click="role" class="font" :class="{active:isActive}">角色管理</el-button>
      <el-button type="text" @click="set" class="font font1" :class="{active:!isActive}">公司信息</el-button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassEmployee',

  data() {
    return {
      isActive:true
    };
  },

  mounted() {
     
  },

  methods: {
    role() {
      this.$router.push({
        path:'/layout/companySettings/role',
      })
      this.isActive = true
    },
    set() {
      this.$router.push({
        path:'/layout/companySettings/set'
      })
      this.isActive = false
    }
  },
};
</script>

<style lang="scss" scoped>
.font{
  font-size: 20px;
  margin-left: 20px;
  color: #333;
}
.font1 {
  margin-left: 60px;
}
.top {
  border-bottom: 1px solid #eee;
}
.active {
  border-bottom: 1px solid #409EFF;
  color: #409EFF;
}
</style>