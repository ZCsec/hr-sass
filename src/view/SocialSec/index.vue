<template>
  <div>
    <el-row class="top">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tag>
            <i class="el-icon-info" style="color:rgb(64,158,255)"></i>
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
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="序号" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120" ></el-table-column>
            <el-table-column prop="phone" label="手机" width="120" ></el-table-column>
            <el-table-column prop="card" label="工号" width="120"> </el-table-column>
            <el-table-column prop="class" label="部门" width="120"></el-table-column>
            <el-table-column prop="entry_time" label="入职时间" width="120" ></el-table-column>
            <el-table-column prop="leavedate" label="离职时间" width="120" ></el-table-column>
            <el-table-column prop="social_insurance" label="社保城市" width="120"> </el-table-column>
            <el-table-column prop="public_reserve_funds" label="公积金城市" width="120" ></el-table-column>
            <el-table-column prop="radix" label="社保基数" width="120" ></el-table-column>
            <el-table-column prop="base" label="公积金基数" width="120"> </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
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
</style>
