<template>
  <div>
    <div v-if="isSet">
      <salarySet></salarySet>
    </div>
    <div v-else>
      <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div>
            <i class="el-icon-info" style="color:blue"></i>本月：入职 离职 调薪 未定薪
          </div>
          <div>
            <li @click="salarySet()">设置</li>
            <li @click="report()">202003月报表</li>
            {{ salarysList }}
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
            <div>
              <span>员工状态：</span>
              <el-checkbox>在职</el-checkbox>
              <el-checkbox>离职</el-checkbox>
            </div>
          </div>
          <div>
            <span>部门：</span>
            <el-checkbox v-for="(item,index) in company" :key="index">{{item.name}}</el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="table1">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" prop="No"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="手机" prop="phone"></el-table-column>
        <el-table-column label="工号" prop="work_number"></el-table-column>
        <el-table-column label="聘用形式" prop="style"></el-table-column>
        <el-table-column label="部门" prop="department"></el-table-column>
        <el-table-column label="入职时间" prop="date"></el-table-column>
        <el-table-column label="工资基数" prop="salary"></el-table-column>
        <el-table-column label="津贴方案" prop="scheme"></el-table-column>
        <el-table-column label="操作" class="operate">
          <button class="el-button" @click="dialogFormVisible = true">调薪</button>
          <button class="el-button">查看</button>
        </el-table-column>
      </el-table>
      <div class="block page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </div>

      <!-- 调薪 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="当前基本工资" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="当前岗位工资" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="当前工资合计" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="转正基本工资" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="转正岗位工资" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="转正工资合计" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isSet:false,
      tableData: [
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        },
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        },
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        },
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        },
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        },
        {
          No: 1,
          name: "lx",
          phone: "123",
          work_number: 1,
          style: "正式",
          department: "人事部",
          date: "2022-10-1",
          salary: 1452,
          scheme: "通用方案"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth:'80px',
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      attendList:{},
      company:{},
      salarysList:{}
    };
  },
  computed: {
    ...mapGetters(["depts"]),
    ...mapGetters(["list"])
  },
  created() {
    this.getDispatch();
    this.getSalarys();
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
    getDispatch() {
      this.$store.dispatch("organ/getHomePage").then((res)=>{
        this.company=this.$store.getters.depts;
      });
    },
    salarySet(){
      this.$router.push({
        path: "/layout/salaryset"
      });
    },
    report(){
      this.$router.push({
        path:'/layout/report'
      })
    },
    //薪资
    getSalarys(){
      this.$store.dispatch("salarys/getSalarys").then(data=>{
        this.salarysList=this.$store.getters.list
      })
    }
  }
};
</script>

<style lang="less" scoped>
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
  min-height: 140px;
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
    width: 100%;
    height: 60px;
    margin-left: 20px;
    line-height: 60px;
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