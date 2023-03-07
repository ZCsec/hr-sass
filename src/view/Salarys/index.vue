<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div>
              <i class="el-icon-info" style="color:blue"></i>本月：入职 离职 调薪 未定薪
            </div>
            <div>
              <li @click="salarySet()">设置</li>
              <li @click="report()">202003月报表</li>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content1 bg-purple-dark">
            <div>
              <div>
                <span>聘用形式：</span>
                <el-checkbox>正式</el-checkbox>
                <el-checkbox>非正式</el-checkbox>
              </div>
              <div style="height:60px">
                <span>员工状态：</span>
                <el-checkbox>在职</el-checkbox>
                <el-checkbox>离职</el-checkbox>
              </div>
            </div>
            <div>
              <span>部门：</span>
              <el-checkbox
                v-for="(item,index) in company"
                :key="index"
                v-model="List[index]"
                @change="departFilter(item.name,index)"
              >{{item.name}}</el-checkbox>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="table1">
        <el-table :data="salarysList" style="width: 100%" max-height="750">
          <el-table-column align="center" label="序号" prop="id"></el-table-column>
          <el-table-column align="center" label="姓名" prop="username"></el-table-column>
          <el-table-column align="center" label="手机" prop="mobile"></el-table-column>
          <el-table-column align="center" label="工号" prop="workNumber"></el-table-column>
          <el-table-column align="center" label="聘用形式" prop="formOfEmployment"></el-table-column>
          <el-table-column align="center" label="部门" prop="departmentName"></el-table-column>
          <el-table-column align="center" label="入职时间" :formatter="formatter"></el-table-column>
          <el-table-column align="center" label="工资基数" prop="currentBasicSalary"></el-table-column>
          <el-table-column align="center" label="津贴方案" prop="scheme"></el-table-column>
          <el-table-column align="center" label="操作" class="operate">
            <!-- //使用scope绑定行属性 -->
            <template slot-scope="scope" style>
              <el-button
                size="mini"
                type="primary"
                @click="changeSalary(scope.row.id,scope.row.username,scope.row.departmentName,scope.row.timeOfEntry)"
              >调薪</el-button>
              <el-button type="text" size="mini">
                <router-link :to="{'path':'/layout/details/'+scope.row.id}">查看</router-link>
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- <div class="block page">
          <el-pagination
            @current-change="changePage"
            :current-page="pageSalary.page"
            :page-size="pageSalary.pagesize"
            layout="prev, pager, next"
            :total="pageSalary.total"
          ></el-pagination>
        </div>-->

        <!-- 调薪 -->
        <el-dialog
          class="top"
          title="调薪"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose"
        >
          <div class="salary">
            <div>
              <img src alt />
            </div>
            <div>
              <li>{{username}}</li>
              <li>部门：{{department}}</li>
              <li>入职时间：{{starttime}}</li>
            </div>
          </div>
          <div class="salary1">
            <div>
              <li>调整基本工资</li>
              <li>
                <el-input placeholder="555" :disabled="true" style="width:220px"></el-input>->
                <el-input v-model="BaseSalary" placeholder="请输入调整后基本工资" style="width:220px"></el-input>
              </li>
            </div>
          </div>
          <div class="salary1">
            <div>
              <li>调整岗位工资</li>
              <li>
                <el-input placeholder="555" :disabled="true" style="width:220px"></el-input>->
                <el-input v-model="JobSalary" placeholder="请输入调整后岗位工资" style="width:220px"></el-input>
              </li>
            </div>
          </div>
          <div class="salary1">
            <div>
              <li>工资合计</li>
              <li>
                <el-input placeholder="1110" :disabled="true" style="width:220px"></el-input>->
                <el-input v-model="totalSalary" :disabled="true" style="width:220px"></el-input>
              </li>
            </div>
          </div>
          <div class="salary1">
            <div>
              <li>调整幅度</li>
              <li>
                <el-input placeholder="-1110" :disabled="true" style="width:220px"></el-input>
              </li>
            </div>
          </div>
          <div class="choose">
            <input type="button" value="保存" @click="onCommit(employeeId)" />
            <input type="button" value="关闭" @click="dialogVisible=false" />
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { getDate } from "@/utils/getDate";
import { getSalaryDetailAPI } from "@/api/index";
export default {
  data() {
    return {
      //分页
      pageSalary: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      dialogTableVisible: false,
      formLabelWidth: "80px",
      dialogVisible: false,
      attendList: {},
      company: {}, //部门列表
      //基本工资
      BaseSalary: "",
      //岗位工资
      JobSalary: "",
      //返回工资数值
      salaryTotal: "",
      selectUserId: null,
      currentComponent: "",
      topLabel: "转正",
      //员工id
      employeeId: "",
      username: "", //名字
      department: "", //部门
      starttime: "", //入职时间
      List: [], //空数组
      salarysList: [], //数据列表
      nameList: []
    };
  },
  created() {
    this.getCompany();
    this.getSalarys();
  },
  computed: {
    totalSalary() {
      return (this.salaryTotal =
        Number(this.JobSalary) + Number(this.BaseSalary));
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getCompany() {
      this.$store.dispatch("organ/getHomePage").then(res => {
        this.company = this.$store.getters.depts;
        //设置默认状态全部为false
        this.company.forEach((item, index) => {
          this.List[index] = false;
        });
      });
    },
    //部门筛选
    departFilter(name, index) {
      this.$store.dispatch("salarys/getSalarys").then(() => {
        if (
          this.List.every(item => item === true) ||
          this.List.every(item => item === false) //如果全选或全部选
        ) {
          this.salarysList = this.$store.getters.list; //显示所有数据
        } else {
          this.salarysList = this.$store.getters.list;
          this.nameList = []; //空数组存放部门名称
          this.List.forEach((item, index) => {
            if (item) {
              this.nameList.push(this.company[index].name); //如果List里的状态为选中true，把相同下标的部门名称添加到空数组
            }
          });
          this.salarysList = this.salarysList.filter((item, index) => {
            return this.nameList.indexOf(item.departmentName) != -1; //过滤返回新数组里包含相同名称的部门，重新赋值给数据遍历数组
          });
        }
      });
    },
    // getSalaryDetail(){
    //   this.$store.dispatch('salarys/getSalaryDetail')
    // },
    salarySet() {
      this.$router.push({
        path: "/layout/salaryset"
      });
    },
    // detailsSet() {
    //   this.$router.push({
    //     path: "/layout/details"
    //   });
    // },
    report() {
      this.$router.push({
        path: "/layout/report"
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //薪资列表
    getSalarys() {
      this.$store.dispatch("salarys/getSalarys").then(res => {
        this.salarysList = this.$store.getters.list;
      });
    },
    //时间格式化
    formatter(row) {
      return getDate(row.timeOfEntry);
    },
    //调薪
    // async changeSalary(userId) {
    //   // this.dialogVisible = true;
    //   // // var userId=Number(userId);
    //   // this.salaryDetail =
    //   await getSalaryDetailAPI(userId);
    //   // (
    //   //   {
    //   //   currentBasicSalary: 'this.BaseSalary',
    //   //   currentPostWage: 'this.JobSalary',
    //   //   userId:'userId'
    //   // })//
    //   console.log(userId);
    //   console.log(res);
    // }
    async changeSalary(userId, name, part, time) {
      this.dialogVisible = true;
      await getSalaryDetailAPI({
        userId
      });
      this.employeeId = userId;
      this.username = name;
      this.department = part;
      this.starttime = time.substring(0, 10);
    },
    //修改薪资
    onCommit(userId) {
      if (this.BaseSalary == "" || this.JobSalary == "") {
        this.$message({ message: "请输入要调整的工资", type: "failed" });
        this.$emit("failed");
      } else {
        getSalaryDetailAPI({
          currentBasicSalary: this.BaseSalary,
          currentPostWage: this.JobSalary,
          userId: userId
        }).then(() => {
          this.$message({ message: "保存成功", type: "success" });
          this.$emit("success");
          this.dialogVisible = false;
          this.getSalarys();
        });
      }
    },
    //分页
    changePage(page) {
      this.pageSalary.page = page;
      this.getSalarys();
    }
  }
};
</script>

<style lang="less" scoped>
.salary {
  width: 100%;
  height: 150px;
  // background-color: #38bce1;
  border-bottom: 2px rgba(128, 128, 128, 0.367) solid;
  div {
    float: left;
  }
  div:nth-of-type(1) {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url(../../assets/svg/1.jpeg);
    background-size: 120px;
  }
  div:nth-of-type(2) {
    width: 28%;
    height: 120px;
    margin-left: 20px;
    li {
      list-style: none;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
  }
}
.salary1 {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  div {
    width: 100%;
    height: 50px;
    li {
      width: 580px;
      height: 50px;
      line-height: 50px;
      list-style: none;
      float: left;
    }
    li:nth-of-type(1) {
      width: 120px;
      text-align: right;
      padding-right: 15px;
    }
  }
}
.choose {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  input {
    width: 80px;
    height: 40px;
    margin: auto;
    margin-left: 50px;
    border: none;
    background-color: #409eff;
    color: white;
    border-radius: 5px;
  }
  input:nth-of-type(1) {
    margin-left: 250px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .el-dialog__footer {
    margin-top: -50px;
    margin-left: 50px;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #e6e6e62d;
}
.bg-purple {
  background: #c2c2c2;
}
.bg-purple-light {
  background: #a8a9ac;
}
.grid-content {
  border-radius: 2px;
  background: #ffffff2d;
  min-height: 64px;
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
    color: #666666c4;
    border-radius: 4px;
    border: 1px rgba(0, 0, 255, 0.347) solid;
    background-color: #e6f7ff;
  }
  div:nth-of-type(2) {
    float: right;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #666666;
    li {
      height: 30px;
      line-height: 30px;
      list-style: none;
      float: left;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
.grid-content1 {
  border-radius: 2px;
  min-height: auto;
  background: #ffffff2d;
  box-shadow: 0px 0px 8px 1px rgba(195, 195, 195, 0.573);
  div:nth-of-type(1) {
    width: 100%;
    height: 60px;
    margin-left: 10px;
    div {
      width: 20%;
      line-height: 60px;
      float: left;
      span {
        font-weight: 600;
        color: rgb(91, 91, 91);
      }
    }
  }
  div:nth-of-type(2) {
    width: 97%;
    height: auto;
    margin-left: 20px;
    line-height: 34px;
    text-align: left;
    overflow: hidden;
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
.table1 {
  border: 1px rgba(218, 218, 218, 0.607) solid;
  height: 414px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 1px rgba(195, 195, 195, 0.573);
}
.page {
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  float: right;
  margin-right: 20px;
}
.el-button {
  width: 40px;
  height: 30px;
  line-height: 30ppx;
  border-radius: 2px;
  display: block;
  float: left;
  font-size: 13px;
  color: white;
  text-align: center;
  padding: 0;
}
.el-button:nth-of-type(1) {
  background-color: #38bce1;
  border: 1px solid #9acaf9;
}

.el-button:nth-of-type(2) {
  background-color: none;
  border: 1px solid #d6dee7;
  color: black;
}
</style>