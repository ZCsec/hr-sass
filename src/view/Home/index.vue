<template>
  <div class="container">
    <!-- 头部提示栏 -->
    <div class="header">
      <img class="userImg" src="@/assets/common/head.jpg" alt="" />
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
              <el-button type="text" @click="dialogFormVisible = true"
                >请假调休</el-button
              >
            </li>
            <li>
              <a href="#">审批列表</a>
            </li>
            <li>
              <a href="#">我的信息</a>
            </li>
          </ul>
          <el-dialog title="申请" :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="申请类型">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="加班" value="加班"></el-option>
                  <el-option label="离职" value="离职"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开始时间">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期时间"
                    v-model="form.startDate1"
                    style="width: 100%"
                  ></el-date-picker
                  ><el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="form.startDate2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期时间"
                    v-model="form.endDate1"
                    style="width: 100%"
                  ></el-date-picker>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="form.endDate2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-col>
              </el-form-item>
              <el-form-item label="补偿方式">
                <p class="tiaoxiu">调休</p>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDate, getTime } from '@/utils/getDate'
import { mapState } from 'vuex'

export default {
  computed: {
    date: {
      get() {
        return this.$store.state.home.date
      },
      set() {}
    },
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
    },
    ...mapState('home', ['username', 'company', 'getStatus'])
  },
  data() {
    return {}
  },
  methods: {
    submitForm() {
      this.$store.dispatch('home/getApplication').then((res) => {
        if (this.getStatus === 200) {
          this.$store.state.home.dialogFormVisible = false
          this.$message({
            message: '操作成功！',
            type: 'success'
          })
        }
      })
    }
  },
  watch: {
    form: {
      deep: true,
      handler(oldVal, newVal) {
        newVal.startDate1 = getDate(newVal.startDate1)
        newVal.startDate2 = getTime(newVal.startDate2)
        newVal.endDate1 = getDate(newVal.endDate1)
        newVal.endDate2 = getTime(newVal.endDate2)
      }
    }
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
