<template>
  <div class="historicalArcBox">
    <div class="historicalArcTop">
      <div class="title">
        <span>社保报表</span>
      </div>
    </div>
    <!-- 社保报表 -->
    <div class="historicalTable">
      <div class="itemes" >
        <!-- 部门分级 导出 -->
        <div class="itemDropDown">
          <div class="topLab">
            <div><span style="background-color: #cfeffe" />已离职</div>
            <div><span style="background-color: #a8f8bb" />再入职</div>
            <div><span style="background-color: #fedbd7" />公司合计</div>
            <div><span style="background-color: #ffe8c9" />一级部门</div>
            <div><span style="background-color: #fdfcd5" />二级部门</div>
            <div class="rightLabBox"><el-button type="primary" icon="el-icon-printer" @click="exportExcel">导出</el-button></div>
          </div>
          <!-- 报表详情 -->
          <el-table v-loading="loading" :data="yearsMonth" id="item" border style="width: 100%;text-align: center">
            <el-table-column type="index" label="序号" center width="50" />
            <el-table-column prop="username" label="姓名" width="150px" />
            <el-table-column prop="timeOfEntry" :formatter="dateFormat" label="入职时间" width="150px" />
            <el-table-column prop="mobile" label="手机号" width="150px" />
            <el-table-column prop="idNumber" label="身份证号码" width="150px" />
            <el-table-column prop="theHighestDegreeOfEducation" label="学历" width="150px" />
            <el-table-column prop="bankCardNumber" label="开户行" width="150px" />
            <el-table-column prop="firstLevelDepartment" label="一级部门" width="150px" />
            <el-table-column prop="twoLevelDepartment" label="二级部门" width="150px" />
            <el-table-column prop="workingCity" label="工作城市" width="150px" />
            <el-table-column prop="socialSecurityComputerNumber" label="社保电脑号" width="150px" />
            <el-table-column prop="providentFundAccount" label="公积金账号" width="150px" />
            <el-table-column prop="leaveDate" label="离职时间" width="150px" />
            <el-table-column prop="householdRegistrationType" label="户籍类型" width="150px" />
            <el-table-column prop="participatingInTheCity" label="参保城市" width="150px" />
            <el-table-column prop="socialSecurityMonth" label="社保月份" width="150px" />
            <el-table-column prop="socialSecurityBase" label="社保基数" width="150px" />
            <el-table-column prop="socialSecurity" label="社保合计" width="150px" />
            <el-table-column prop="socialSecurityEnterprise" label="社保企业" width="150px" />
            <el-table-column prop="socialSecurityIndividual" label="社保个人" width="150px" />
            <el-table-column prop="providentFundCity" label="公积金城市" width="150px" />
            <el-table-column prop="providentFundMonth" label="公积金月份" width="150px" />
            <el-table-column prop="providentFundBase" label="公积金基数" width="150px" />
            <el-table-column prop="accumulationFundEnterpriseBase" label="公积金企业基数" width="150px" />
            <el-table-column prop="proportionOfProvidentFundEnterprises" label="公积金企业比例" width="150px"/>
            <el-table-column prop="individualBaseOfProvidentFund" label="公积金个人基数" width="150px" />
            <el-table-column prop="personalRatioOfProvidentFund" label="公积金个人比例" width="150px" />
            <el-table-column prop="totalProvidentFund" label="公积金合计" width="150px" />
            <el-table-column prop="providentFundEnterprises" label="公积金企业" width="150px" />
            <el-table-column prop="providentFundIndividual" label="公积金个人" width="150px" />
            <el-table-column prop="pensionEnterpriseBase" label="养老企业基数" width="150px" />
            <el-table-column prop="proportionOfPensionEnterprises" label="养老企业比例" width="150px" />
            <el-table-column prop="pensionEnterprise" label="养老企业" width="150px" />
            <el-table-column prop="personalPensionBase" label="养老个人基数" width="150px" />
            <el-table-column prop="personalPensionRatio" label="养老个人比例" width="150px" />
            <el-table-column prop="oldAgeIndividual" label="养老个人" width="150px" />
            <el-table-column prop="unemploymentEnterpriseBase" label="失业企业基数" width="150px" />
            <el-table-column prop="proportionOfUnemployedEnterprises" label="失业企业比例" width="150px" />
            <el-table-column prop="unemployedEnterprise" label="失业企业" width="150px" />
            <el-table-column prop="theNumberOfUnemployedIndividuals" label="失业个人基数" width="150px" />
            <el-table-column prop="percentageOfUnemployedIndividuals" label="失业个人比例" width="150px" />
            <el-table-column prop="unemployedIndividual" label="失业个人" width="150px" />
            <el-table-column prop="medicalEnterpriseBase" label="医疗企业基数" width="150px" />
            <el-table-column prop="proportionOfMedicalEnterprises" label="医疗企业比例" width="150px" />
            <el-table-column prop="medicalEnterprise" label="医疗企业" width="150px" />
            <el-table-column prop="medicalPersonalBase" label="医疗个人基数" width="150px" />
            <el-table-column prop="medicalPersonalRatio" label="医疗个人比例" width="150px" />
            <el-table-column prop="medicalIndividual" label="医疗个人" width="150px" />
            <el-table-column prop="baseOfIndustrialInjuryEnterprises" label="工伤企业基数" width="150px" />
            <el-table-column prop="proportionOfIndustrialInjuryEnterprises" label="工伤企业比例"
              width="150px"/>
            <el-table-column prop="industrialInjuryEnterprise" label="工伤企业" width="150px" />
            <el-table-column prop="fertilityEnterpriseBase" label="生育企业基数" width="150px" />
            <el-table-column prop="proportionOfFertilityEnterprises" label="生育企业比例" width="150px" />
            <el-table-column prop="childbearingEnterprise" label="生育企业" width="150px" />
            <el-table-column prop="baseOfSeriousIllness" label="大病企业基数" width="150px" />
            <el-table-column prop="proportionOfSeriouslyIllEnterprises" label="大病企业比例"
              width="150px" />
            <el-table-column prop="bigDiseaseEnterprise" label="大病企业" width="150px" />
            <el-table-column prop="personalBaseOfSeriousIllness" label="大病个人基数" width="150px" />
            <el-table-column prop="personalProportionOfSeriousIllness" label="大病个人比例" width="150px" />
            <el-table-column prop="aPersonOfGreatDisease" label="大病个人" width="150px" />
            <el-table-column prop="providentFundNotes" label="公积金备注" width="150px" />
            <el-table-column prop="socialSecurityNotes" label="社保备注" width="150px" />
          </el-table>
        </div>

      </div>
      <!-- 归档-新建报表，取消按钮 -->
      <el-row type="flex" justify="center" align="middle" style="height:60px">
      <el-col :span="12">
        <el-button size="small" type="primary" @click="archive">归档{{ yearVal ? yearVal.substr(4) : '' }}报表</el-button>
        <el-button size="small" @click="$router.back()">取消</el-button>
      </el-col>
    </el-row>
    </div>

  </div>
</template>

<script>
import moment from "moment"
import { getArchivingContAPI,getArchivingArchiveAPI } from "@/api/index";
import * as XLSX from 'xlsx'
import FileSaver from "file-saver";

export default {
  name: "HistoricalArchiving",
  data() {
    return {
      yearsMonth:[],
      yearVal: this.$route.query.yearMonth,
      loading: false
    }
  },
  async mounted() {
    // this.getArchivingCont();
    this.loading = true
    const res = await getArchivingContAPI({ month: this.yearVal, opType: 1 })
    this.yearsMonth = res.data.data;
    this.loading = false
    console.log(res);
  },
  methods:{
    archive() {
      this.$confirm(`您确定要归档报表？报表归档将覆盖上一次归档记录，无法恢复。`).then(async() => {
        await getArchivingArchiveAPI({ yearMonth: this.yearVal })
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
      })
    },
    exportExcel() {
            var xlsxParam = { raw: true };
            let fix = document.querySelector('.el-table__fixed');
            let wb;
            if (fix) { //判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去
                wb = XLSX.utils.table_to_book(document.querySelector('#item').removeChild(fix), xlsxParam);
                document.querySelector('#item').appendChild(fix);
            } else {
                wb = XLSX.utils.table_to_book(document.querySelector('#item'));
            }
            let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
            try {
                FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `报表.xlsx`)
            } catch (e) {
                if (typeof console !== 'undefined') console.log(e, wbout)
            }
            this.$message({ message: '表格导出成功！（有延迟请稍等)', type: 'success' })
            return wbout
    },
    dateFormat(row,column){
        let date = row[column.property]
        return moment(date).format('YYYY-MM-DD')
    },
  }
};
</script>

<style lang="less" scoped>
//全公司
.historicalArcBox {
  padding: 20px;
}
.historicalArcBox .historicalArcTop {
  position: relative;
  background: #fff;
  padding: 10px 15px 0 15px;
  border-bottom: solid 1px rgb(234, 234, 234);
}
.historicalArcBox .historicalArcTop .title {
  color: rgb(28, 161, 255);
  line-height: 40px;
  border-bottom: solid 2px rgb(65, 166, 255);
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding: 0 25px;
}
//日期
.historicalArcBox .historicalArcTop .title .yearChange {
  position: absolute;
  top: 5px;
  right: 10px;
}
//社保报表
.historicalTable {
  background: #fff;
}
//部门分级  导出
.historicalTable .itemes .itemDropDown {
  background: #fff;
//   border-top: solid 2px gray;
}
.historicalTable .itemes .itemDropDown .topLab {
  position: relative;
  padding: 15px;
}
.historicalTable .itemes .itemDropDown .topLab div {
  display: inline-block;
  margin: 0 10px;
}
.historicalTable .itemes .itemDropDown .topLab div span {
  display: inline-block;
  position: relative;
  top: 2px;
  margin-right: 5px;
  width: 15px;
  height: 15px;
}
.historicalTable .itemes .itemDropDown .topLab .rightLabBox {
  position: absolute;
  right: -10px;
  top: 10px;
}
.historicalTable .itemes .itemDropDown .topLab .rightLabBox div {
  // border: solid 1px blue;
  background-color: rgb(0, 98, 255);
  color: white;
  border-radius: 3px;
  padding: 4px 10px;
  font-size: 14px;
}
</style>
