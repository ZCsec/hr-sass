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
          <el-menu-item index="/layout/employee"> 员工 </el-menu-item>
          <el-menu-item index="/layout/companySettings">
            公司设置
          </el-menu-item>
          <el-menu-item index="/layout/sysSet"> 权限设置 </el-menu-item>
          <el-menu-item index="/layout/socialSec"> 社保 </el-menu-item>
          <el-menu-item index="/layout/attendances"> 考勤 </el-menu-item>
          <el-menu-item index="/layout/salarys"> 工资 </el-menu-item>
          <el-menu-item index="/layout/home"> 审批 </el-menu-item>
        </el-menu>
        <div class="left-bottom-bg"></div>
      </el-aside>

      <el-container>
        <el-header>
          <span style="text-align: left; color: #fff"
            >南昌中兴软件技术有限公司</span
          >

          <ul class="el-h-right">
            <li class="search">
              <i class="el-icon-search" @click="showInp" title="站内搜索"></i>
              <transition name="fade">
                <el-autocomplete
                  v-model="state"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容"
                  @select="handleSelect"
                  @blur="searchShow = false"
                  ref="input"
                  v-if="searchShow"
                ></el-autocomplete>
              </transition>
            </li>
            <li class="el-icon-rank" title="全屏" @click="isScreenFull"></li>
            <li class="admin">
              <img
                class="admin_img"
                src="@/assets/common/bigUserHeader.png"
                alt=""
              />
              <span>管理员</span>
              <i class="el-icon-arrow-down"></i>
              <div class="userOperate">
                <a href="http://localhost:8080/layout/home">首页</a>
                <a href="#" @click.prevent="leaveLogin">退出登录</a>
              </div>
            </li>
          </ul>
          <!-- 站内搜索 -->
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken, removeTokenTime } from '@/utils/cookie'
import screenfull from 'screenfull'
export default {
  data() {
    return {
      restaurants: [],
      state: '',
      timeout: null,
      // 控制搜索框显示隐藏的布尔值
      searchShow: false
    }
  },
  methods: {
    loadAll() {
      return []
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleSelect(item) {
      console.log(item)
    },
    showInp() {
      this.searchShow = true
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    isScreenFull() {
      if (!screenfull.isEnabled) {
        // 如果不支持进入全屏，发出不支持提示
        this.$message({
          message: '您的浏览器版本过低不支持全屏显示！',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    leaveLogin() {
      removeToken()
      removeTokenTime()
      this.$router.push('/login')
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(75, 124, 251);
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .el-h-right {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 0;
    li {
      list-style: none;
      margin: 0 5px;
    }
    .search {
      display: inline-block;
      padding: 0 10px;
      .el-icon-search {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 5px;
      }
    }
    .el-icon-rank {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    .admin {
      // width: 100px;
      height: 100%;
      // border: 1px solid red;
      position: relative;
      img {
        width: 30px;
        position: relative;
        top: 8px;
      }
      span {
        margin: 0 5px;
      }
      .el-icon-arrow-down {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
      .userOperate {
        background-color: #fff;
        width: 100px;
        height: 0;
        position: absolute;
        display: none;
        right: 0;
        top: 60px;
        border-radius: 5px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
        transition: height 1s;
        z-index: 999;
        // padding: 10px 0;
        a {
          height: 49%;
          display: block;
          text-align: center;
          text-decoration: none;
          color: #333;
          &:nth-of-type(1) {
            border-bottom: 1px solid #ccc;
          }

          &:hover {
            color: rgb(75, 124, 251);
            // background-color:rgb(192, 197, 211);
          }
        }
      }

      &:hover .userOperate {
        display: block;
        height: 100px;
      }
    }
  }
}

.el-aside {
  position: relative !important;
  box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.6) !important;

  .el-menu {
    border-right: 0;
  }

  .el-menu-item:hover {
    color: #43a7fe !important;
  }

  .el-menu-item:focus {
    color: #43a7fe !important;
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

/deep/.el-main {
  background-color: #f0f2f5 !important;
}
// .el-menu-item.is-active {
// background-color: #fff;
// color: rgb(75, 124, 251) !important;
// color: #fff !important;
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
