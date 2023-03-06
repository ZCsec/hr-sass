<template>
  <div class="historicalArcBox">
    <div class="historicalArcTop">
      <div class="title">
        <span>全公司</span>
        <div class="yearChange">
          <el-date-picker
            v-model="yearVal"
            value-format="yyyy"
            type="year"
            size="mini"
            width="130px"
            placeholder="选择年"
            @change="changeYear"
          />
        </div>
      </div>
    </div>
    <!-- 社保报表 -->
    <div v-loading="loading" class="historicalTable">
      <div class="itemes" v-for="( itemes, index) in tableData" :key="index">
        <div class="itemTopLab" :class="{act: itemes.act}">
          <div class="lab" @click="openTable(itemes,index)">></div>
          <div>
            <p class="title">{{itemes.yearsMonth}}社保报表 <span>{{ itemes.creationTime }}</span></p>
            <p class="labTit" @click="openTable(itemes,index)">社保报表</p>
          </div>
          <div>
            <p class="itemTit"><span>企业缴纳</span></p>
            <p class="itemNum">{{ itemes.enterprisePayment }}</p>
          </div>
          <div>
            <p class="itemTit"><span>个人缴纳</span></p>
            <p class="itemNum">{{ itemes.personalPayment }}</p>
          </div>
          <div>
            <p class="itemTit"><span>合计</span></p>
            <p class="itemNum">{{ itemes.total }}</p>
          </div>
        </div>

        <!-- 部门分级 导出 -->
        <div v-show="itemes.act"  class="itemDropDown">
          <div class="topLab">
            <div><span style="background-color: #cfeffe" />已离职</div>
            <div><span style="background-color: #a8f8bb" />再入职</div>
            <div><span style="background-color: #fedbd7" />公司合计</div>
            <div><span style="background-color: #ffe8c9" />一级部门</div>
            <div><span style="background-color: #fdfcd5" />二级部门</div>
            <div class="rightLabBox">
                <el-button type="primary" icon="el-icon-printer" @click="exportExcel">导出</el-button>
            </div>
          </div>
          <!-- 报表详情 -->
          <el-table :data="itemes.contentData" id="item" height="300" border style="width: 100%;text-align: center">
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
    </div>


  </div>
</template>

<script>
import moment from "moment"
import { getArchivingListAPI, getArchivingContAPI } from "@/api/index";
import * as XLSX from 'xlsx'
import FileSaver from "file-saver";
export default {
  name: "HistoricalArchiving",
  data() {
    return {
      loading:false,
      num:0,
      tableData: [],
      contentData:[],
      yearVal: '2020',
    };
  },
  mounted() {
    this.getArchivingList();
  },
  methods:{
    async getArchivingList() {
      this.loading = true;
      const res = await getArchivingListAPI({ year: this.yearVal })
      this.tableData = res.data.data;
      this.loading = false;
      // console.log(this.tableData);
    },
    async openTable(obj, index) {
      if (!obj.act) {
        const data = await getArchivingContAPI({ month: obj.yearsMonth, year: this.yearVal, opType: 2 })
        console.log(data);
        // this.contentData = data.data.data;
        this.$set(this.tableData[index], 'contentData', data.data.data)
        this.loading = false
        this.$set(this.tableData[index], 'act', true)
      } else {
        this.$set(this.tableData[index], 'act', false)
      }
    },
    changeYear() {
      this.getArchivingList()
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
  },
  
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
// .historicalTable .itemes .act{
//   border-bottom:solid 3px greenyellow;
// }
// .historicalTable .itemes .act .lab{
//   border-bottom:solid 3px greenyellow;
// }
// .historicalTable .itemes .act .lab .labTit{
//   border-bottom:solid 3px greenyellow;
// }
.historicalTable .itemes .itemTopLab {
  border-top: solid 1px #f0f0f0;
  border-bottom: solid 2px rgb(65, 166, 255);
  padding: 15px;
}
.historicalTable .itemes .itemTopLab div {
  display: inline-block;
  padding: 0 50px;
  border-right: solid 1px #ccc;
}
.historicalTable .itemes .itemTopLab div:last-child,
div:first-child {
  border: none;
}
.historicalTable .itemes .itemTopLab .lab {
  border: none;
  position: relative;
  top: -15px;
  padding-right: 0;
  padding-left: 15px;
}
.historicalTable .itemes .itemTopLab .labTit {
  cursor: pointer;
  color: rgb(0, 140, 255);
}
.historicalTable .itemes .itemTopLab .title {
  font-size: 16px;
  margin: 10px 0;
}
.historicalTable .itemes .itemTopLab .title span {
  position: relative;
  bottom: -2px;
  font-size: 13px;
  color: #999;
  margin-left: 5px;
}
.historicalTable .itemes .itemTopLab .itemTit {
  color: #999;
  margin: 8px 0;
  font-size: 13px;
}
.historicalTable .itemes .itemTopLab .itemNum {
  font-size: 20px;
  margin: 0;
}

//部门分级  导出
.historicalTable .itemes .itemDropDown {
  background: #fff;
  border-top: solid 2px rgb(65, 166, 255);
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
