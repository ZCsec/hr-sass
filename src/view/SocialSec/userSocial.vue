<template>
  <div>
    <!-- 个人简单信息 -->
    <el-row class="top">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="img">
            <img src="@/assets/common/img.jpeg" width="100" height="100" alt />
          </div>
          <div class="info">
            <b>{{usList.username}}</b>
            <!-- <span :class="dutyStatus?'job-txt-green':'job-txt-red'">离职</span> -->
            <span :class="usList.inServiceStatus?'job-txt-green':'job-txt-red'">{{usList.inServiceStatus == 0 ? "离职" : "在职"}}</span>
            <p>
              <span>最新工资基数</span>
              &emsp;&emsp;
              <span>入职时间 {{ usList.timeOfEntry.substring(0,10) }}</span>
              &emsp;&emsp;
              <span>联系电话 {{ usList.mobile }}</span>
            </p>
            <p>
              本月不缴纳社保<el-switch
                v-model="usList.enterprisesPaySocialSecurityThisMonth"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />&emsp;&emsp; 
              本月不缴纳公积金<el-switch
                v-model="usList.enterprisesPayTheProvidentFundThisMonth"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </p>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 具体内容 -->
    <el-row class="main">
      <el-col :span="24">
        <div class="grid-content1 bg-purple-dark">
          <!-- 正式开始 -->
          <el-form>
            <el-form-item label="参保城市" prop="participatingInTheCity">
              <el-select
                v-model="cityList[0]"
                value-key="id"
                placeholder="请选择参保城市"
              >
                <el-option
                  v-for="item in cityList"
                  :key="item.id"
                  :label="item.name"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="社保类型" prop="socialSecurityType">
              <el-select
                v-model="type"
                placeholder="请选择社保类型"
              >
                <el-option label="首次开户" :value="1" />
                <el-option label="非首次开户" :value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="户籍类型" prop="householdRegistrationType">
              <el-select
                v-model="type2"
                placeholder="请选择户籍类型"
              >
                <el-option label="本市城镇" :value="1" />
                <el-option label="本市农村" :value="2" />
                <el-option label="外阜城镇" :value="3" />
                <el-option label="外阜农村" :value="4" />
              </el-select>
            </el-form-item>
            <el-form-item label="社保基数" prop="socialSecurityBase">
              <el-input
                v-model="sizeForm.userSocialSecurity.socialSecurityBase"
                type="number"
                style="width: 38%"
              />（基数范围是3387 ~ 25401）
            </el-form-item>
            <el-form-item label="工伤比例" prop="industrialInjuryRatio">
              <el-input
                v-model="sizeForm.userSocialSecurity.industrialInjuryRatio"
                style="width: 38%"
                type="number"
              />（比例范围是0.2％ ~ 3％，推荐0.2％）
            </el-form-item>
            <el-form-item label="社保缴纳">
              <el-form-item label="个人" label-width="74px" style="display: inline-block">
                <el-input v-model="personalPayment" style="width: 100%" placeholder="个人" inline="true"
                  :disabled="true"/>
              </el-form-item>
              <el-form-item label="公司" label-width="74px" style="display: inline-block">
                <el-input v-model="companyPayment" style="width: 100%" placeholder="企业" size="small"
                  inline="true" :disabled="true" />
              </el-form-item>
              <el-table :data="cityItemList">
                <el-table-column label="缴费项目" prop="name" />
                <el-table-column label="企业基数">
                  {{10000}}
                </el-table-column>
                <el-table-column label="企业比例">
                  <template slot-scope="paymentItem">
                    <span v-show="paymentItem.row.switchCompany"
                      >{{ paymentItem.row.scaleCompany }}%</span
                    >
                  </template>
                </el-table-column>
                <el-table-column label="企业缴纳">
                  <template slot-scope="scope">
                    <el-input
                      :disabled="true"
                      :value="(10000*scope.row.scaleCompany)/100 +'.00' "
                    />
                  </template>
                </el-table-column>
                <el-table-column label="个人基数">
                  <template slot-scope="paymentItem">
                    <span v-show="paymentItem.row.switchPersonal">{{
                      sizeForm.socialSecurityBase
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="个人比例">
                  <template slot-scope="paymentItem">
                    <span v-show="paymentItem.row.switchPersonal"
                      >{{ paymentItem.row.scalePersonal }}%</span
                    >
                  </template>
                </el-table-column>
                <el-table-column label="个人缴纳">
                  <template slot-scope="scope">
                    <el-input
                      :disabled="true"
                      :value="(10000*scope.row.scalePersonal)/100 +'.00' "
                    />
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="社保备注">
              <el-input
                v-model="sizeForm.userSocialSecurity.socialSecurityNotes"
                type="textarea"
                :rows="2"
                placeholder="1-300字符"
                maxlength="300"
                style="width: 38%"
                show-word-limit
              />
            </el-form-item>

            <el-form-item label="公积金城市" prop="providentFundCity">
              <el-select
                v-model="cityList[0]"
                placeholder="请选择公积金城市"
                value-key="id"
              >
                <el-option
                  v-for="item in cityList"
                  :key="item.id"
                  :label="item.name"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="公积金基数" prop="providentFundBase">
              <el-input
                v-model="inp1"
                style="width: 38%"
                placeholder="5000"
                type="number"
              />（基数范围是2273 ~ 25401）
            </el-form-item>
            <el-form-item label="企业比例" prop="enterpriseProportion">
              <el-input
                v-model="inp2"
                style="width: 38%"
                placeholder="12"
                type="number"
              />（比例范围是5％ ~ 12％，推荐12％ ）
            </el-form-item>
            <el-form-item label="个人比例" prop="personalProportion">
              <el-input
                v-model="inp2"
                style="width: 38%"
                placeholder="12"
                type="number"
              />（比例范围是5％ ~ 12％，推荐12％ ）
            </el-form-item>
            <el-form-item label="公积金缴纳">
              <el-form-item
                label="个人"
                label-width="50px"
                style="display: inline-block"
                prop="personalProvidentFundPayment"
              >
                <el-input
                  v-model="inp3"
                  style="width: 100%"
                  placeholder="600"
                  inline="true"
                  type="number"
                />
              </el-form-item>
              <el-form-item
                label="公司"
                label-width="50px"
                style="display: inline-block"
                prop="enterpriseProvidentFundPayment"
              >
                <el-input
                  v-model="inp3"
                  style="width: 100%"
                  placeholder="600"
                  inline="true"
                  type="number"
                />
              </el-form-item>
              <el-form-item style="display: inline-block">
                <span>（为自动测算结果，可手动调整）</span>
              </el-form-item>
            </el-form-item>
            <el-form-item label="公积金备注">
              <el-input
                v-model="sizeForm.userSocialSecurity.providentFundNotes"
                type="textarea"
                :rows="2"
                placeholder="1-300字符"
                style="width: 38%"
                maxlength="300"
                show-word-limit
              />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="update">保存更新</el-button>
              <el-button @click="$router.back()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from "moment"
import { userAPI,citysItemAPI } from "@/api/index";
export default {
  data() {
    return {
      sizeForm: {
        user: {},
        userSocialSecurity: {
          socialSecurityBase: 3387,
          industrialInjuryRatio: 0.2,
        },
      },
      usList:[],
      cityItemList: [],
      isPaySocialInMonth: false,
      isPayProvidentInMonth: false,
      personalPayment: 0.0,
      companyPayment: 0.0,
      paymentItemList: [],
      cityList:["北京","上海","江西"],
      inp1:5000,
      inp2:12,
      inp3:600,
      type:"首次开户",
      type2:"本市城镇"
    };
  },
  async mounted(){
    const res = await userAPI({
      id:this.$route.query.id
    })
    this.usList = res.data.data.user;
    this.usList2 = res.data.data.userSocialSecurity;
    // console.log(res.data);

    const res2 = await citysItemAPI({
      id:this.usList2.participatingInTheCityId,
    })
    this.cityItemList = res2.data.data;
    console.log(res2.data.data);
  },
  methods:{
    dateFormat(row,column){
      let date = row[column.property]
      return moment(date).format('YYYY-MM-DD')
    },
    update() {
      this.$confirm(`您确定保存吗`).then(async() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        }),
        this.$router.push({
          path: "/layout/SocialSec"
        });
      })
    },
  },
  
  
};
</script>

<style lang="less" scoped>
/deep/.el-table .el-table__cell{
text-align:center;
}
.el-row {
  margin-bottom: 20px;
  color: rgb(88, 88, 88);
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
  border-radius: 4px;
  min-height: 150px;
  display: flex;
}
.img {
  padding: 22px;
  width: 150px;
}
.img img {
  border-radius: 50%;
  margin-right: 40px;
  box-shadow: 1px 2px 4px #b7b7b7;
}
.info {
  margin-top: 20px;
}
.job-txt-green,
.job-txt-red {
  display: inline-block;
  padding: 3px;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
}
.job-txt-green {
  background: #67c23a;
}
.job-txt-red {
  background: #f56c6c;
}

//具体内容
.grid-content1 {
  border-radius: 4px;
  min-height: 1000px;
  padding-left: 50px;
  padding-top: 30px;
}
</style>