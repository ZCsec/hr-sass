<template>
  <div>
    <el-row class="top">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tag>
            <i class="el-icon-info" style="color: rgb(64, 158, 255)"></i>
            本月：社保在缴 公积金在缴 增员 减员 入职 离职
          </el-tag>
          <template>
            <el-button class="btn" @click="monthlyReport()">2020.01月报表</el-button>
            <el-button class="btn" @click="socialHistorical()">历史归档</el-button>
          </template>

          <el-row>
            <span class="leftName">部门：</span>
            <el-checkbox>总裁办</el-checkbox>
          </el-row>
          <el-row>
            <span class="leftName">社保城市：</span>
            <el-checkbox>北京</el-checkbox>
          </el-row>
          <el-row>
            <span class="leftName">公积金城市：</span>
            <el-checkbox>北京</el-checkbox>
          </el-row>
          
        </div>
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :span="24">
        <div class="grid-content1 bg-purple-dark">
          <el-table id="item" :data="SocialLists" style="width: 100%">
            <el-table-column type="index" label="序号" width="120"></el-table-column>
            <el-table-column prop="username" label="姓名" width="120"></el-table-column>
            <el-table-column prop="mobile" label="手机" width="120"></el-table-column>
            <el-table-column prop="workNumber" label="工号" width="120"></el-table-column>
            <el-table-column prop="departmentName" label="部门" width="120"></el-table-column>
            <el-table-column prop="timeOfEntry" label="入职时间" width="120"></el-table-column>
            <el-table-column prop="leaveTime" label="离职时间" width="120"></el-table-column>
            <el-table-column prop="participatingInTheCity" label="社保城市" width="120"></el-table-column>
            <el-table-column prop="providentFundCity" label="公积金城市" width="120"></el-table-column>
            <el-table-column prop="socialSecurityBase" label="社保基数" width="120"></el-table-column>
            <el-table-column prop="providentFundBase" label="公积金基数" width="120"></el-table-column>
            <el-table-column label="操作">
              <el-button class="btn" @click="userSocial()">查看</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getSocialListAPI, getSettingsAPI } from "@/api/index";
import elForm from '../Home/elForm/elForm.vue';
// import { mapGetters } from "vuex";

export default {
  components: { elForm },
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          id: "1",
          name: "dw",
          phone: "15770768928",
          card: "11",
          class: "人事部",
          entry_time: "2023-2-22",
          leavedate: "----",
          social_insurance: "江西",
          public_reserve_funds: "江西",
          radix: "1000",
          base: "1000",
        },
      ],
      SocialLists: [],
      city:[],
      yearMonth: "",
      page: {
        page: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  // created() {
  //   this.getSocialList();
  // },
  async mounted() {
    // 获取社保下方界面
    const res = await getSocialListAPI({});
    this.SocialLists = res.data.data.rows;
    console.log(res.data.data.rows);
    //获取社保上方部门 城市
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    socialHistorical(){
      this.$router.push({
        path: "/layout/socialHistorical"
      });
    },
    monthlyReport(){
      this.$router.push({
        path: "/layout/monthlyReport"
      });
    },
    userSocial(){
      this.$router.push({
        path: "/layout/userSocial"
      });
    },
  },
  computed: {
    // ...mapGetters(["SocialLists"]),
  },
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
  background: #ffffff;
}
.grid-content {
  border-radius: 5px;
  min-height: 200px;
  box-shadow: 2px 4px 4px 2px rgba(195, 195, 195, 0.692);
}
.grid-content .btn{
  float: right;
  margin: 10px;
}
.grid-content1 {
  border-radius: 5px;
  min-height: 500px;
  box-shadow: 2px 4px 4px 2px rgba(195, 195, 195, 0.692);
}
.el-tag {
  margin: 10px;
  color: black;
}
.leftName {
  display: inline-block;
  width: 100px;
  margin-left: 20px;
  margin-bottom: 8px;
  font-size: 16px;
}
.block {
  float: right;
}
.history {
  float: right;
  margin: 15px;
}
</style>
