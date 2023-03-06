<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div>
              <i class="el-icon-info" style="color: blue"></i> 有 0
              条考勤审批尚未处理
            </div>
            <div>
              <button class="el-button" @click="import1()">导入</button>
              <button class="el-button" @click="open">提醒</button>
              <button class="el-button" @click="dialogFormVisible = true">
                设置
              </button>
              <button class="el-button" @click="history()">历史归档</button>
              <button class="el-button" @click="isMonth()">3月份报表</button>
            </div>
            <div>
              <span>部门：</span>
              <el-checkbox
                v-for="(item, index) in company"
                :key="index"
                v-model="checkList[index]"
                @change="departFilter(item.name, index)"
                >{{ item.name }}</el-checkbox
              >
            </div>
            <div>
              <span>考勤状态：</span>
              <el-radio v-model="radio" label="1">正常</el-radio>
              <el-radio v-model="radio" label="2">事假</el-radio>
              <el-radio v-model="radio" label="3">调休</el-radio>
              <el-radio v-model="radio" label="4">迟到</el-radio>
              <el-radio v-model="radio" label="5">旷工</el-radio>
              <el-radio v-model="radio" label="6">早退</el-radio>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="table1">
        <el-table
          :data="acttendList"
          type="index"
          border
          style="width: 100%"
          max-height="750"
        >
          <el-table-column prop="id" label="序号" width="150"></el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="workNumber"
            label="工号"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="departmentName"
            label="部门"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="mobile"
            label="手机"
            width="300"
          ></el-table-column>
        </el-table>
      </div>
      <!-- 设置点击效果 -->
      <el-dialog title="设置" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName">
          <el-tab-pane label="出勤设置" name="first">
            <div class="main1">
              <strong style="color: red">*</strong>部门：
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in company"
                  :key="item.value"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </div>
            <div class="main2">
              <strong style="color: red">*</strong>出勤时间：
              <el-time-select
                style="width: 140px"
                v-model="startTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }"
              ></el-time-select
              >-
              <el-time-select
                style="width: 140px"
                v-model="endTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: startTime
                }"
              ></el-time-select
              >-
              <el-time-select
                style="width: 140px"
                v-model="startTime1"
                :picker-options="{
                  start: '14:00',
                  step: '00:15',
                  end: '17:30'
                }"
              ></el-time-select
              >-
              <el-time-select
                style="width: 140px"
                v-model="endTime1"
                :picker-options="{
                  start: '18:30',
                  step: '00:15',
                  end: '21:30',
                  minTime: startTime
                }"
              ></el-time-select>
            </div>
          </el-tab-pane>
          <el-tab-pane label="请假设置" name="second">
            <div class="main1">
              <strong style="color: red">*</strong>部门：
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in company"
                  :key="item.value"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </div>
            <div class="type">
              <p>假期类型</p>
              <b>类型</b>
              <b>是否可用</b>
            </div>
            <div class="main3">
              <li>
                事假
                <el-switch
                  v-model="value1"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </li>
              <li>
                事假
                <el-switch
                  v-model="value1"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </li>
            </div>
          </el-tab-pane>
          <el-tab-pane label="扣款设置" name="third">
            <div class="main1">
              <div>
                <strong style="color: red">*</strong>部门：
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in company"
                    :key="item.value"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </div>
              <div>
                <div class="monny">
                  迟到扣款
                  <el-switch
                    v-model="value3"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  ></el-switch>
                </div>
                <div class="attentInfo">
                  <p>
                    迟到≤
                    <el-input
                      class="inputInfo"
                      value="30"
                      style="width: 50px"
                    />分钟
                  </p>
                  <div class="deductionInfo">
                    <p>
                      迟到≤
                      <el-input
                        v-model="text"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />次，每次扣款
                      <el-input
                        v-model="text1"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />元
                    </p>
                    <p>
                      迟到>
                      <el-input
                        class="inputInfo"
                        disabled
                        @input.native="handleInput($event)"
                      />次，每次扣款
                      <el-input
                        v-model="text2"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />元
                    </p>
                  </div>
                  <p>
                    迟到>
                    <el-input class="inputInfo" disabled />分钟
                  </p>
                  <div class="deductionInfo">
                    <p>
                      迟到>
                      <el-input class="inputInfo" disabled />次，每次矿工
                      <el-input
                        v-model="text3"
                        class="inputInfo"
                        @input.native="handleInputPoint($event)"
                      />天
                    </p>
                  </div>
                </div>
                <div>
                  早退扣款
                  <el-switch
                    v-model="value3"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  ></el-switch>
                </div>
                <div class="attentInfo">
                  <p>
                    早退≤
                    <el-input
                      v-model="text4"
                      class="inputInfo"
                      value="30"
                      @input.native="handleInput($event)"
                    />分钟
                  </p>
                  <div class="deductionInfo">
                    <p>
                      早退≤
                      <el-input
                        v-model="text9"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />次，每次扣款
                      <el-input
                        v-model="text5"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />元
                    </p>
                    <p>
                      早退>
                      <el-input class="inputInfo" disabled />次，每次扣款
                      <el-input
                        v-model="text6"
                        class="inputInfo"
                        @input.native="handleInput($event)"
                      />元
                    </p>
                  </div>
                  <p>
                    早退>
                    <el-input class="inputInfo" disabled />分钟
                  </p>
                  <div>
                    <p>
                      早退>
                      <el-input class="inputInfo" disabled />次，每次矿工
                      <el-input
                        v-model="text7"
                        class="inputInfo"
                        @input.native="handleInputPoint($event)"
                      />天
                    </p>
                  </div>
                </div>
                <div>
                  旷工扣款
                  <el-switch
                    v-model="value3"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  ></el-switch>
                </div>
                <div class="attentInfo">
                  <p>
                    矿工按
                    <el-input
                      v-model="text8"
                      class="inputInfo"
                      @input.native="handleInput($event)"
                    />倍工资处罚
                  </p>
                </div>
                <!-- <table>
                  <tr>
                    <td>
                      <div>
                        迟到扣款
                        <div>
                          <el-switch
                            v-model="value"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                          ></el-switch>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </table>-->
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="加班设置" name="fourth">
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <strong style="color: red">*</strong>部门：
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in company"
                    :key="item.value"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
                <div class="rule">
                  <el-form-item label="加班规则">
                    <div class="ruleInfo">
                      <el-row>
                        <el-col :span="8">
                          <div class>
                            <el-switch
                              v-model="value5"
                              active-color="#13ce66"
                              inactive-color="#ff4949"
                            ></el-switch
                            >&nbsp;&nbsp; 工作日可申请加班
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div class>
                            <span class="pad">
                              <el-checkbox>调休假</el-checkbox>&nbsp;
                            </span>
                            <template>
                              <el-time-select
                                v-model="furlough"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />&nbsp;
                              <el-time-select
                                v-model="furlough1"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />
                            </template>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="ruleInfo">
                      <el-row>
                        <el-col :span="8">
                          <div class>
                            <el-switch
                              v-model="value6"
                              active-color="#13ce66"
                              inactive-color="#ff4949"
                            ></el-switch
                            >&nbsp;&nbsp; 休息日可申请加班
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div class>
                            <span class="pad">
                              <el-checkbox>调休假</el-checkbox>&nbsp;
                            </span>
                            <template>
                              <el-time-select
                                v-model="furlough2"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />&nbsp;
                              <el-time-select
                                v-model="furlough3"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />
                            </template>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="ruleInfo">
                      <el-row>
                        <el-col :span="8">
                          <div class>
                            <el-switch
                              v-model="value7"
                              active-color="#13ce66"
                              inactive-color="#ff4949"
                            ></el-switch
                            >&nbsp;&nbsp; 法定节假日可申请加班
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div class>
                            <span class="pad">
                              <el-checkbox>调休假</el-checkbox>&nbsp;
                            </span>
                            <template>
                              <el-time-select
                                v-model="furlough4"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />&nbsp;
                              <el-time-select
                                v-model="furlough5"
                                :picker-options="{
                                  start: '01:00',
                                  step: '00:15',
                                  end: '23:59'
                                }"
                                style="width: 100px"
                              />
                            </template>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-form-item>
                  <el-form-item label="打卡验证:" prop="isClock">
                    <el-switch
                      v-model="value4"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                    ></el-switch
                    >&nbsp;&nbsp;加班需要有打卡记录
                  </el-form-item>
                  <el-form-item label="开启补偿:" prop="isCompensationint">
                    <el-switch
                      v-model="value8"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                    ></el-switch>
                  </el-form-item>
                  <el-form-item label="调休设置:" prop="latestEffectDate">
                    <div class="ruleInfo">
                      最晚有效期： 次年
                      <el-date-picker
                        type="date"
                        v-model="time"
                        placeholder="选择日期"
                        style="width: 150px"
                      />
                    </div>
                  </el-form-item>
                  <el-form-item label prop="unit">
                    <div class="ruleInfo">
                      <p>
                        请假最小单位
                        <el-input style="width: 50px" />天
                      </p>
                    </div>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- {{ token }} -->
        <div>
          <router-view></router-view>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >保存更新</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //考勤状态
      radio: 1,
      //监听部门变量
      componyName: '',
      //时间集合
      dateList: [],
      //设置按钮状态
      dialogFormVisible: false,
      List: [],

      //设置选项卡片
      activeName: 'first',
      value: '',
      time: '',
      startTime: '',
      endTime: '',
      startTime1: '',
      endTime1: '',
      value1: true,
      value2: false,
      value3: false,
      value4: false,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
      input: '',
      //扣款
      text: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      //调休
      furlough: '',
      furlough1: '',
      furlough2: '',
      furlough3: '',
      furlough4: '',
      furlough5: '',
      //部门集合
      company: {},
      //考勤集合
      acttendList: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      checkList: [],
      nameList: []
    }
  },
  created() {
    this.getDispatch()
    this.getAttend()
  },
  methods: {
    //部门筛选
    departFilter(name, index) {
      this.$store.dispatch('attendances/getAttendance').then(() => {
        // 如果所有复选按钮被选中或都不被选中
        if (
          this.checkList.every((item) => item === true) ||
          this.checkList.every((item) => item === false)
        ) {
          this.acttendList = this.$store.getters.data
        } else {
          // 如果有单个或多个复选按钮被选中
          this.acttendList = this.$store.getters.data
          this.nameList = []
          this.checkList.forEach((item, index) => {
            if (item) {
              this.nameList.push(this.company[index].name)
            }
          })

          this.acttendList = this.acttendList.filter((item, index) => {
            return this.nameList.indexOf(item.departmentName) != -1
          })
        }
      })
    },
    //提醒
    open() {
      this.$confirm(
        '系统将通过邮件与短信的形式，对全体员工中存在旷工的考勤进行提醒，该提醒每月仅可发送 1 次。',
        '提醒',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          this.$message({
            type: 'success',
            message: '提醒成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提醒'
          })
        })
    },
    getDispatch() {
      this.$store.dispatch('organ/getHomePage').then((res) => {
        this.company = this.$store.getters.depts
        // console.log(this.company)
        this.company.forEach((item, index) => {
          this.checkList[index] = false
        })
        // console.log(this.checkList)
      })
    },
    getAttend() {
      this.$store.dispatch('attendances/getAttendance').then((res) => {
        this.acttendList = this.$store.getters.data
      })
    },
    import1() {
      this.$router.push({
        path: '/layout/imports'
      })
      // this.$router.replace('/layout/attendances/imdocument');
    },
    history() {
      this.$router.push({
        path: '/layout/historys'
      })
    },
    //跳转月份表格
    isMonth() {
      this.$router.push({
        path: '/layout/isMonths'
      })
    }
  },
  watch: {
    componyName: function (val) {
      console.log(val)
      var text = this.$refs.text
      console.log(text)
      // if(text=='总裁办'){
      //   this.acttendList=this.acttendList.filter(item=>{
      //     this.acttendList.departmentName=val
      //   })
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.chidao1 {
  margin-top: 20px;
}
.chidao {
  margin-left: 22px;
  p {
    float: left;
    margin-left: 20px;
  }
}
//设置模块
.type {
  margin: 10px;
  b {
    list-style: none;
    width: 65px;
    height: 30px;
    margin-left: 10px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
  }
  b:nth-of-type(1) {
    margin-left: 10px;
  }
}
.el-dialog__header {
  padding: 0;
  margin: 20px;
}
.main1 {
  margin-top: 20px;
  margin-left: 28px;
}
.main2 {
  margin-top: 20px;
}
.main3 {
  margin-top: 20px;
  margin-left: 43px;
  li {
    list-style: none;
    margin-top: 10px;
    .el-switch {
      margin-left: 32px;
    }
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff2d;
}
.bg-purple {
  background: #c2c2c2;
}
.bg-purple-light {
  background: #a8a9ac;
}
.grid-content {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  min-height: 232px;
  box-shadow: 0px 0px 8px 1px rgba(195, 195, 195, 0.573);
  overflow: hidden;
  div {
    width: 220px;
    float: left;
    margin: 20px;
  }
  div:nth-of-type(1) {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #666666db;
    border-radius: 4px;
    border: 1px rgba(0, 0, 255, 0.347) solid;
    background-color: #e6f7ff;
  }
  div:nth-of-type(2) {
    width: 450px;
    float: right;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #666666;
    button {
      width: 65px;
      height: 30px;
      text-align: center;
      line-height: 8px;
      list-style: none;
      border: none;
      float: left;
      background-color: #409eff;
      border-radius: 3px;
      color: white;
      margin-left: 10px;
      cursor: pointer;
    }
    button:nth-of-type(4) {
      width: 100px;
    }
    button:nth-of-type(5) {
      width: 100px;
    }
  }
  div:nth-of-type(3) {
    width: 97%;
    height: auto;
    margin: 0;
    margin-top: 10px;
    margin-left: 20px;
    line-height: 34px;
    span {
      font-weight: 600;
      color: rgb(91, 91, 91);
    }
  }
  div:nth-of-type(4) {
    width: 100%;
    height: auto;
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    span {
      font-weight: 600;
      color: rgb(91, 91, 91);
    }
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

//设置
.el-dialog__header {
  background-color: lightblue;
}
.department {
  margin: 20px;
}
.dialog-footer {
  .el-button:nth-of-type(1) {
    margin-right: 30px;
  }
  .el-button:nth-of-type(2) {
    margin-right: 260px;
  }
}
.el-dialog__header {
  background-color: #409eff;
}
.overtime {
  width: 100%;
  height: 40px;
}
.attentInfo {
  p {
    padding: 3px 0;
  }
  .el-input--medium {
    .el-input__inner {
      height: 24px;
      line-height: 24px;
    }
  }
}
.rule {
  width: 100%;
  margin-top: 20px;
}
.attentInfo {
  padding: 5px 15px 15px 62px;
}
.inputInfo {
  width: 50px;
  margin-left: 10px;
  margin-right: 10px;
}
.monny {
  margin-top: 20px;
}
.ruleInfo {
  .el-input--medium .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
}
.el-form-item__content {
  margin-left: 0px !important;
}
</style>
