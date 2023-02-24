<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div>
            <i class="el-icon-info" style="color:blue"></i> 有 0 条考勤审批尚未处理
          </div>
          <div>
            <button class="el-button">导入</button>
            <button class="el-button" @click="open">提醒</button>
            <button class="el-button" @click="dialogFormVisible = true">设置</button>
            <button class="el-button">历史归档</button>
            <button class="el-button">3月份报表</button>
          </div>
          <div>
            <span>部门：</span>
            <el-checkbox>总裁办</el-checkbox>
            <el-checkbox>人事部</el-checkbox>
            <el-checkbox>行政部</el-checkbox>
            <el-checkbox>技术部</el-checkbox>
            <el-checkbox>运营部</el-checkbox>
            <el-checkbox>市场部</el-checkbox>
            <el-checkbox>薪资管理部</el-checkbox>
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
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="No" label="序号" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="work_number" label="工号" width="120"></el-table-column>
        <el-table-column prop="department" label="部门" width="120"></el-table-column>
        <el-table-column prop="phone" label="手机" width="300"></el-table-column>

        <el-table-column prop="No" label="序号" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="work_number" label="工号" width="120"></el-table-column>
        <el-table-column prop="department" label="部门" width="120"></el-table-column>
        <el-table-column prop="phone" label="手机" width="300"></el-table-column>
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
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
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
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="type">
            <p>假期类型</p>
            <b>类型</b>
            <b>是否可用</b>
          </div>
          <div class="main3">
            <li>事假<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch></li>
            <li>事假<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch></li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扣款设置" name="third">
          <div class="main1">
            <strong style="color:red">*</strong>部门：
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            <li>迟到退款<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch></li>
            <el-input  placeholder="请输入内容"></el-input>
          </div>
        </el-tab-pane>
        <el-tab-pane label="加班设置" name="fourth">定时任务补偿</el-tab-pane>
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
    <!-- {{ $store.state.depts}} -->
    {{ depts}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tableData: [
        {
          No: 1,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 2,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 3,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 4,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 5,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 6,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 7,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 8,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        },
        {
          No: 9,
          name: "lx",
          phone: "12345678910",
          work_number: 1,
          department: "人事部"
        }
      ],
      //时间集合
      dateList: [],
      //设置按钮状态
      dialogFormVisible: false,

      //设置选项卡片
      activeName: "first",
      options: [
        {
          value: "选项1",
          label: "总裁办"
        },
        {
          value: "选项2",
          label: "人事部"
        },
        {
          value: "选项3",
          label: "技术部"
        },
        {
          value: "选项4",
          label: "运营部"
        },
        {
          value: "选项5",
          label: "生产部"
        }
      ],
      value: "",
      startTime: "",
      endTime: "",
      startTime1: "",
      endTime1: "",
      value1: true
    };
  },
  computed: {
    ...mapGetters(["depts"]),
    // depts(){
      // var obj={};
      // this.$store.state.depts;
      // for (var i of data) {
      //   for (var k in i) {
      //     console.log('键：' + k)
      //     console.log('值：' + i[k])
      //   }
      // }
      // return this.$store.state.depts;
      // return depts1.map(function (e, item) {
      //   obj[e.num] = e.name;
      // }
    },
  // },
    created() {
      this.getDispatch();
    },
  methods: {
    list(){
      console.log(this.$store.state.depts);
    },
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
    getDispatch(){
         this.$store.dispatch("attendances/getDepartment");
    }
  }
};

</script>

<style lang="less" scoped>
//设置模块
.type{
  margin: 10px;
  b{
    list-style: none;
    width: 65px;
    height: 30px;
    margin-left: 10px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
  }
  b:nth-of-type(1){
    margin-left: 10px;
  }
}
.el-dialog__header {
  padding: 0;
  margin: 20px;
}
.main1{
  margin-top: 20px;
  margin-left: 28px;
}
.main2 {
  margin-top: 20px;
}
.main3{
  margin-top: 20px;
  margin-left: 43px;
  li{
    list-style: none;
    margin-top: 10px;
    .el-switch{
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
    margin-top: 30px;
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
</style>