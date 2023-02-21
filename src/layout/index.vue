<template>
  <div class="em">
    <el-container style="height: 690px; border: 1px solid #eee">
      <el-aside
        width="200px"
        style="background-color: rgb(75, 124, 251); height: 100%"
      >
        <el-menu
          router
          text-color="#fff"
          style="background-color: rgb(75, 124, 251)"
        >
          <div class="logo"><img src="@/assets/common/logo.png" alt="" /></div>
          <el-menu-item index="/layout/home"> 首页 </el-menu-item>
          <el-menu-item index="/layout/home"> 组织架构 </el-menu-item>
          <el-menu-item index="/layout/home"> 员工 </el-menu-item>
          <el-menu-item index="/layout/home"> 公司设置 </el-menu-item>
          <el-menu-item index="/layout/home"> 权限设置 </el-menu-item>
          <el-menu-item index="/layout/home"> 社保 </el-menu-item>
          <el-menu-item index="/layout/home"> 考勤 </el-menu-item>
          <el-menu-item index="/layout/home"> 工资 </el-menu-item>
          <el-menu-item index="/layout/home"> 审批 </el-menu-item>
        </el-menu>
        <div class="left-bottom-bg"></div>
      </el-aside>

      <el-container>
        <el-header>
          <span style="text-align: left; color: #fff"
            >南昌中兴软件技术有限公司</span
          >
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: rgb(75, 124, 251);
  color: #333;
  line-height: 60px;
}

.el-aside {
  position: relative !important;
  box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.6) !important;

  .el-menu {
    border-right: 0;
  }

  .el-menu-item:hover {
    color: rgb(75, 124, 251) !important;
  }

  .logo {
    margin: 10px 0 10px 20px;
    img {
      display: inline-block;
    }
  }

  .left-bottom-bg {
    // border: 1px solid red;
    position: absolute;
    height: 100px;
    width: 100%;
    background-image: url('@/assets/common/leftnavBg.png');
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 0;
  }
}

.el-menu-item.is-active {
  // background-color: #fff;
  // color: rgb(75, 124, 251) !important;
  // color: #fff !important;
}
</style>
