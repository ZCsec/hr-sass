<template>
  <div class="container">
    <!-- 头部提示栏 -->
    <div class="header">
      <!-- <img class="userImg" :src="userImg" alt="" /> -->
      <div class="block">
        <el-avatar class="userImg" :size="100" :src="userImg"></el-avatar>
      </div>
      <div class="hint">
        <p class="userName">早安，{{ username }}，祝你开心每一天！</p>
        <p>{{ username }}|{{ company }}</p>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <!-- 日历 -->
        <el-calendar class="date"> </el-calendar>
        <!-- 公告栏 -->
        <div class="announcement">
          <div class="ac-title">公告</div>
          <ul class="ac-content">
            <li>
              <img src="@/assets/common/img.jpeg" alt="" />
              <div class="li-con">
                <p class="li-con-text">
                  <span class="author">刘刘刘</span>发布了
                  第3期“中兴大讲堂”互动讨论获奖名单公布
                </p>
                <p class="li-con-time">2023-2-22 20:00:00</p>
              </div>
            </li>
            <li>
              <img src="@/assets/common/img.jpeg" alt="" />
              <div class="li-con">
                <p class="li-con-text">
                  <span class="author">刘刘刘</span>发布了
                  第3期“中兴大讲堂”互动讨论获奖名单公布
                </p>
                <p class="li-con-time">2023-2-22 20:00:00</p>
              </div>
            </li>
            <li>
              <img src="@/assets/common/img.jpeg" alt="" />
              <div class="li-con">
                <p class="li-con-text">
                  <span class="author">刘刘刘</span>发布了
                  第3期“中兴大讲堂”互动讨论获奖名单公布
                </p>
                <p class="li-con-time">2023-2-22 20:00:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-right">
        <div class="application">
          <span class="ap-title">流程申请</span>
          <ul class="ap-content">
            <li>
              <el-button type="text" @click="dialogFormVisible = true"
                >加班离职</el-button
              >
            </li>
            <li>
              <el-button type="text" @click="dialogFormVisible2 = true"
                >请假调休</el-button
              >
            </li>
            <li>
              <router-link to="/layout/Approval/Approvals"
                >审批列表</router-link
              >
            </li>
            <li>
              <router-link to="/layout/Approval/myInfo">我的信息</router-link>
              <!-- <a href="#">我的信息</a> -->
            </li>
          </ul>
          <div>
            <!-- 加班离职的双模块 -->
            <elForm> </elForm>
            <holiday></holiday>
          </div>
        </div>
        <!-- <div class="application">
          <span class="ap-title">快速开始/便捷导航</span>
          <ul class="ap-content">
            <li>
              <a href="#">人事月报</a>
            </li>
            <li>
              <a href="#">考勤查询</a>
            </li>
            <li>
              <a href="#">考勤统计</a>
            </li>
            <li>
              <a href="#">员工审核</a>
            </li>
            <li>
              <a href="#">组织架构</a>
            </li>
          </ul> -->
        <!-- <div> -->
        <!-- 加班离职的双模块 -->
        <!-- <elForm> </elForm>
            <holiday></holiday> -->
        <!-- </div> -->
        <!-- </div> -->
        <div class="help">
          <span class="ap-title">帮助链接</span>
          <ul class="ap-content">
            <li>
              <a href="#">
                <div class="bg-icon"></div>
                <span>入门指南</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="bg-icon"></div>
                <span>入门指南</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="bg-icon"></div>
                <span>入门指南</span>
              </a>
            </li>
          </ul>
          <div>
            <!-- 加班离职的双模块 -->
            <elForm> </elForm>
            <holiday></holiday>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elForm from '@/view/Home/elForm/elForm.vue'
import holiday from '@/view/Home/holiday/holiday.vue'
import { mapState } from 'vuex'
export default {
  computed: {
    dialogFormVisible: {
      get() {
        return this.$store.state.home.dialogFormVisible
      },
      set(val) {
        this.$store.state.home.dialogFormVisible = val
        // console.log(val)
      }
    },
    dialogFormVisible2: {
      get() {
        return this.$store.state.home.dialogFormVisible2
      },
      set(val) {
        this.$store.state.home.dialogFormVisible2 = val
        // console.log(val)
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
    form2: {
      get() {
        return this.$store.state.home.form2
      },
      set(val) {
        this.$store.state.home.form2 = val
      }
    },
    ...mapState('home', ['username', 'company', 'userImg'])
  },
  components: {
    elForm,
    holiday
  }
}
</script>

<style lang="less" scoped>
.container {
  .header {
    background-color: #fff;
    height: 105px;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    .userImg {
      margin: 0 20px 0 10px;
      // width: 100px;
    }
    .hint {
      // border: 1px solid red;
      p {
        padding-bottom: 15px;
        margin: 0;
        &:nth-of-type(1) {
          margin-top: 15px;
          font-size: 24px;
        }

        &:nth-of-type(2) {
          font-size: 20px;
          color: #7f8c8d;
        }
      }
    }
  }

  .main {
    // width: 100%;
    margin-top: 20px;
    display: flex;
    .main-left {
      width: 55%;
      .date {
        border-radius: 5px;
        width: 100%;
      }

      .announcement {
        width: 100%;
        background-color: #fff;
        border-radius: 5px;
        margin-top: 20px;
        padding-bottom: 60px;
        .ac-title {
          width: 92%;
          margin: 0 auto;
          line-height: 50px;
          font-size: 16px;
          padding: 15px;
          font-weight: 700;
          border-bottom: 1px solid #ccc;
        }
        .ac-content {
          width: 88%;
          margin: 0 auto;
          // border: 1px solid red;
          // height: 250px;
          margin: 20px auto 0 auto;
          li {
            list-style: none;
            display: flex;
            border-bottom: 1px solid #ccc;
            img {
              width: 80px;
            }
            p {
              margin: 8px 0;
              .author {
                color: #8a97f8;
              }
            }
          }
        }
      }
    }
    .main-right {
      margin-left: 20px;
      width: 40%;
      .application {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        height: 230px;
        padding: 20px;
        margin: 0 0 20px 0;
        .ap-title {
          color: #2c3e50;
          font-size: 24px;
          border-bottom: 4px solid #8a97f8;
          padding-bottom: 10px;
        }
        .ap-content {
          margin-top: 40px;
          list-style: none;
          padding-left: 0;
          li {
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 137px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            margin: 0 15px 10px 0;
            font-size: 16px;
            float: left;
            a {
              display: inline-block;
              text-decoration: none;
              width: 100%;
              height: 100%;
              color: #777;
            }
          }
        }
      }
      .help {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        height: 230px;
        padding: 20px;
        margin: 0 0 20px 0;
        .ap-title {
          color: #2c3e50;
          font-size: 24px;
          border-bottom: 4px solid #8a97f8;
          padding-bottom: 10px;
        }
        .ap-content {
          margin-top: 40px;
          list-style: none;
          padding-left: 0;
          display: flex;
          justify-content: space-around;
          li {
            width: 80px;
            height: 100px;
            text-align: center;
            margin: 0 15px 10px 0;
            font-size: 16px;
            a {
              width: 100%;
              height: 100%;
              display: inline-block;
              text-decoration: none;
              color: #777;
              div {
                width: 100%;
                height: 76px;
                background-image: url('@/assets/common/icon.png');
                background-position: 7px 0;
                margin-bottom: 10px;
              }
              span {
                color: #333;
              }
            }
            &:nth-of-type(2) {
              div {
                background-position: -216px 0;
              }
            }
            &:nth-of-type(3) {
              div {
                background-position: -460px 0;
              }
            }
          }
        }
      }
    }
  }
}

/deep/.el-calendar-table .el-calendar-day {
  height: 50px;
  // line-height: 50px;
  text-align: center;
}

.tiaoxiu {
  margin: 0;
  // margin-top: 10px;
}

/deep/.el-textarea__inner {
  width: 50%;
}

/deep/.el-textarea__inner {
  width: 50%;
}

/deep/.el-button--text {
  color: #777;
}
</style>
