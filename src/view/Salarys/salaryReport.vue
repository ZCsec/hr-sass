<template>
    <div>
        <el-card class="box-card" style="width:1250px;height:600px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <el-tabs v-model="activeName">
            <el-tab-pane label="工资报表" name="first">
              <div>
                <button>导出</button>
              </div>
              <div>
                <el-table border style="width: 100%">
                    <el-table-column prop="date" label="序号" width="150"></el-table-column>
                  <el-table-column prop="date" label="姓名" width="150"></el-table-column>
                  <el-table-column prop="name" label="手机号" width="120"></el-table-column>
                  <el-table-column prop="province" label="工号" width="120"></el-table-column>
                  <el-table-column prop="city" label="部门名称" width="120"></el-table-column>
                  <el-table-column prop="address" label="在职状态" width="300"></el-table-column>
                  <el-table-column prop="zip" label="公积金个人" width="120"></el-table-column>
                  <el-table-column prop="zip" label="社保个人" width="120"></el-table-column>
                  <el-table-column prop="zip" label="社保企业" width="120"></el-table-column>
                  <el-table-column prop="zip" label="公积金企业" width="120"></el-table-column>
                  <el-table-column prop="zip" label="公积金社保企业" width="120"></el-table-column>
                  <el-table-column prop="zip" label="基本工资" width="120"></el-table-column>
                  <el-table-column prop="zip" label="岗位工资" width="120"></el-table-column>
                  <el-table-column prop="zip" label="福利津贴" width="120"></el-table-column>
                  <el-table-column prop="zip" label="考勤扣款" width="120"></el-table-column>
                  <el-table-column prop="zip" label="税前工资合计" width="120"></el-table-column>
                  <el-table-column prop="zip" label="应纳税工资" width="120"></el-table-column>
                  <el-table-column prop="zip" label="应扣税" width="120"></el-table-column>
                  <el-table-column prop="zip" label="实发工资" width="120"></el-table-column>
                </el-table>
              </div>
              <div>
                <input type="button" value="归档03月份报表">
                <input type="button" value="新建报表">
                <input type="button" value="取消">
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  height: 350px;
  .nav {
    width: 90%;
    height: 120px;
    margin: auto;
    .el-tabs__item{
        font-size: 20px !important;
    }
    h2 {
      text-align: center;
    }
    div:nth-of-type(1){
        button{
            border: none;
            color: white;
            background-color: #409EFF;
            float: right;
            width: 5%;
            height: 30px;
            border-radius: 3px;
            margin-bottom: 20px;
        }
    }
    div:nth-of-type(3){
        width: 50%;
        margin: auto;
        input{
            float: left;
            border: none;
            color: white;
            background-color: #409EFF;
            cursor: pointer;
            width: 25%;
            height: 30px;
            margin-left: 40px;
            margin-top: 40px;
            text-align: center;
            border-radius: 3px;
            margin-bottom: 20px;
        }
        input:nth-of-type(3){
            background-color:rgba(128, 128, 128, 0.545);
            color:black
        }
    }
    .el-table--border{
       margin-top: 30px;
    }
  }
}
</style>