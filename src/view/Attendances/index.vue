<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div>
              <i class="el-icon-info" style="color:blue"></i> 有 0 条考勤审批尚未处理
            </div>
            <div>
              <button class="el-button" @click="import1()">导入</button>
              <button class="el-button" @click="open">提醒</button>
              <button class="el-button" @click="dialogFormVisible = true">设置</button>
              <button class="el-button" @click="history()">历史归档</button>
              <button class="el-button" @click="isMonth()">3月份报表</button>
            </div>
            <div>
              <span>部门：</span>
              <el-checkbox
                ref="text"
                v-model="componyName"
                v-for="(item,index) in company"
                :key="index"
                @click="companyBtn()"
              >{{item.name}}</el-checkbox>
            </div>
            <div>
              <span>考勤状态：</span>
              <el-checkbox>正常</el-checkbox>
              <el-checkbox>旷工</el-checkbox>
              <el-checkbox>事假</el-checkbox>
              <el-checkbox>调休</el-checkbox>
              <el-checkbox>迟到</el-checkbox>
              <el-checkbox>早退</el-checkbox>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="table1">
        <el-table :data="acttendList" type="index" border style="width: 100%">
          <el-table-column prop="id" label="序号" width="150"></el-table-column>
          <el-table-column prop="username" label="姓名" width="120"></el-table-column>
          <el-table-column prop="workNumber" label="工号" width="120"></el-table-column>
          <el-table-column prop="departmentName" label="部门" width="120"></el-table-column>
          <el-table-column prop="mobile" label="手机" width="300"></el-table-column>
        </el-table>
      </div>
      <!-- 设置点击效果 -->
      <el-dialog title="设置" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName">
          <el-tab-pane label="出勤设置" name="first">
            <div class="main1">
              <strong style="color:red">*</strong>部门：
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
              <strong style="color:red">*</strong>出勤时间：
              <el-time-select
                style="width:140px"
                v-model="startTime"
                :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
              ></el-time-select>-
              <el-time-select
                style="width:140px"
                v-model="endTime"
                :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime
            }"
              ></el-time-select>-
              <el-time-select
                style="width:140px"
                v-model="startTime1"
                :picker-options="{
              start: '14:00',
              step: '00:15',
              end: '17:30'
            }"
              ></el-time-select>-
              <el-time-select
                style="width:140px"
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
              <strong style="color:red">*</strong>部门：
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
                <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </li>
              <li>
                事假
                <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </li>
            </div>
          </el-tab-pane>
          <el-tab-pane label="扣款设置" name="third">
            <div class="main1">
              <strong style="color:red">*</strong>部门：
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in company"
                  :key="item.value"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </div>
            <div class="table">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <!-- 迟到扣款 -->
                      <div class="chidao1">
                        迟到扣款
                        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                      </div>
                      <div class="chidao">
                        <p>
                          迟到<=
                          <el-input v-model="input" placeholder style="width:80px"></el-input>分钟
                        </p>
                        <br />
                        <p>
                          迟到<=
                          <el-input v-model="input" placeholder style="width:80px"></el-input>次
                        </p>
                        <p>
                          每次罚款
                          <el-input v-model="input" placeholder style="width:80px"></el-input>元
                        </p>
                        <br />
                        <p>
                          迟到>
                          <el-input v-model="input" placeholder style="width:80px"></el-input>次
                        </p>
                        <p>
                          每次罚款
                          <el-input v-model="input" placeholder style="width:80px"></el-input>元
                        </p>
                        <br />
                        <p>
                          迟到<=
                          <el-input v-model="input" placeholder style="width:80px"></el-input>分钟
                        </p>
                        <br />
                        <p>
                          迟到<=
                          <el-input v-model="input" placeholder style="width:80px"></el-input>次
                        </p>
                        <p>
                          每次罚款
                          <el-input v-model="input" placeholder style="width:80px"></el-input>元
                        </p>
                      </div>
                      <!-- 早退扣款 -->
                      <!-- <div>
                          早退扣款
                          <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                        </div>
                        <div>
                          <p>迟到<= <el-input v-model="input" placeholder="" style="width:80px"></el-input>分钟</p>
                          <p>迟到<= <el-input v-model="input" placeholder="" style="width:80px"></el-input>次</p><p>每次罚款<el-input v-model="input" placeholder="" style="width:80px"></el-input>元</p>
                          <p>迟到><el-input v-model="input" placeholder="" style="width:80px"></el-input>次</p><p>每次罚款<el-input v-model="input" placeholder="" style="width:80px"></el-input>元</p>
                          <p>迟到<= <el-input v-model="input" placeholder="" style="width:80px"></el-input>分钟</p>
                          <p>迟到<= <el-input v-model="input" placeholder="" style="width:80px"></el-input>次</p><p>每次罚款<el-input v-model="input" placeholder="" style="width:80px"></el-input>元</p>
                      </div>-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="加班设置" name="fourth">
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <strong style="color:red">*</strong>部门：
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in company"
                    :key="item.value"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
                <div class="choose">
                  <div>
                    <el-form-item label="加班规则 :" style="width:620px">
                      <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch> 休息日可申请加班
                    </el-form-item>
                  </div>
                  <div>
                    <el-form-item label="" style="width:620px">
                      <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch> 法定节假日可申请加班
                    </el-form-item>
                  </div>
                  <div>
                    <el-form-item label="" style="width:620px">
                      <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch> 工作日可申请加班
                    </el-form-item>
                  </div>
                  <div class="overtime">
                    <el-checkbox>调休假</el-checkbox>&nbsp;
                    <el-time-select
                      placeholder="起始时间"
                      v-model="startTime"
                      :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }"
                    ></el-time-select>
                    <el-time-select
                      placeholder="结束时间"
                      v-model="endTime"
                      :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                      minTime: startTime
                    }"
                    ></el-time-select>
                  </div>
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
          <el-button type="primary" @click="dialogFormVisible = false">保存更新</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //监听部门变量
      componyName: "",
      //时间集合
      dateList: [],
      //设置按钮状态
      dialogFormVisible: true,

      //设置选项卡片
      activeName: "fourth",
      value: "",
      startTime: "",
      endTime: "",
      startTime1: "",
      endTime1: "",
      value1: true,
      value2: false,
      value3: "",
      input: "",
      //部门集合
      company: {},
      //考勤集合
      acttendList: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  computed: {
    ...mapGetters(["depts"]),
    ...mapGetters(["data"])
  },
  created() {
    this.getDispatch();
    this.getAttend();
  },
  methods: {
    //提醒
    open() {
      this.$confirm(
        "系统将通过邮件与短信的形式，对全体员工中存在旷工的考勤进行提醒，该提醒每月仅可发送 1 次。",
        "提醒",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "提醒成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提醒"
          });
        });
    },
    getDispatch() {
      this.$store.dispatch("organ/getHomePage").then(res => {
        this.company = this.$store.getters.depts;
      });
    },
    getAttend() {
      this.$store.dispatch("attendances/getAttendance").then(res => {
        this.acttendList = this.$store.getters.data;
      });
    },
    import1() {
      this.$router.push({
        path: "/layout/imports"
      });
      // this.$router.replace('/layout/attendances/imdocument');
    },
    history() {
      this.$router.push({
        path: "/layout/historys"
      });
    },
    isMonth() {
      this.$router.push({
        path: "/layout/isMonths"
      });
    }
  },
  watch: {
    componyName: function(val) {
      console.log(val);
      var text = this.$refs.text;
      console.log(text);
      // if(text=='总裁办'){
      //   this.acttendList=this.acttendList.filter(item=>{
      //     this.acttendList.departmentName=val
      //   })
      // }
    }
  }
};
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
  min-height: 190px;
  box-shadow: 0px 0px 8px 1px rgba(195, 195, 195, 0.573);

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
    width: 100%;
    height: auto;
    margin: 0;
    margin-top: 10px;
    margin-left: 20px;
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
.choose{
  div{
    height: 40px;
  }
}
.overtime{
  width:100%;
  height: 40px;
}
</style>