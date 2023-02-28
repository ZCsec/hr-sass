<template>
  <div>
    <el-row class="top">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tag>
            <i class="el-icon-info" style="color: rgb(64, 158, 255)"></i>
            本月：社保在缴 公积金在缴 增员 减员 入职 离职
          </el-tag>
          <div>
            <span class="leftName">部门：</span>
            <el-checkbox>总裁办</el-checkbox>
          </div>
          <div>
            <span class="leftName">社保城市：</span>
            <el-checkbox>北京</el-checkbox>
          </div>
          <div>
            <span class="leftName">公积金城市：</span>
            <el-checkbox>北京</el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="bottom">
      <el-col :span="24">
        <div class="grid-content1 bg-purple-dark">
          <el-table id="item" :data="list" style="width: 100%">
            <el-table-column
              prop="id"
              label="序号"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="username"
              label="姓名"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="mobile"
              label="手机"
              width="120"
            ></el-table-column>
            <el-table-column prop="workNumber" label="工号" width="120">
            </el-table-column>
            <el-table-column
              prop="departmentName"
              label="部门"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="timeOfEntry"
              label="入职时间"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="leaveTime"
              label="离职时间"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="participatingInTheCity"
              label="社保城市"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="providentFundCity"
              label="公积金城市"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="socialSecurityBase"
              label="社保基数"
              width="120"
            ></el-table-column>
            <el-table-column prop="providentFundBase" label="公积金基数" width="120">
            </el-table-column>
          </el-table>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getSocialListAPI,getSettingsAPI} from "@/api/index"
export default {
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
      list: [],
      yearMonth: '',
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      },
    };
  },
  created() {
    // 获取社保列表
    this.getSocialList() // 获取列表数据
    this.getSettings()
 },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getSettings() {
      const { dataMonth } = await getSettingsAPI()
      this.yearMonth = dataMonth
    },
    async  getSocialList() {
      try {
        const { rows, total } = await getSocialListAPI({ ...this.page, ...this.selectParams })
        this.list = rows // 列表数据
        this.page.total = total // 总数
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    pageChange(page) {
      this.page.page = page // 当前
      this.getSocialList() // 获取列表数据
    },
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
}
.block {
  position: absolute;
  left: 550px;
  top: 450px;
}
</style>
