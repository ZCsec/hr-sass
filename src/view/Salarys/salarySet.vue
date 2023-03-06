<template>
  <!-- 工资---设置 -->
  <div class="setUpBox">
    <el-main class="setUp_top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="计薪设置" name="first">
          <el-row class="payroll">
            <div style="margin: 20px"></div>
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              ref="getform"
            >
              <el-form-item label="社保自然月" label-width="130px">
                <el-select v-model="seList.socialSecurityType" ref="month">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :value="item.value"
                    :label="item.label"
                  ></el-option>
                </el-select>
                <i class="el-icon-question"></i>
              </el-form-item>
              <el-form-item label="社保数据来源" label-width="130px">
                <el-input disabled="disabled"></el-input>
                <i class="el-icon-question"></i>
              </el-form-item>
              <el-form-item label="考勤数据来源" label-width="130px">
                <el-input disabled="disabled"></el-input>
                <i class="el-icon-question"></i>
              </el-form-item>
            </el-form>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="津贴设置" name="second">
          <el-row class="payroll" :data="seList">
            <div style="margin: 20px"></div>
            <el-form
              :label-position="labelPosition2"
              label-width="80px"
              ref="getform"
            >
              <el-form-item label="通用方案" label-width="130px">
                <el-input
                  class="inputBox"
                  :value="seList.subsidyName"
                  ref="scheme"
                  v-model="seList.subsidyName"
                ></el-input>
              </el-form-item>
              <el-form-item label="备注" label-width="130px">
                <el-input
                  class="inputBox"
                  :value="seList.subsidyRemark"
                  ref="remarks"
                  v-model="seList.subsidyRemark"
                ></el-input>
              </el-form-item>
              <el-form-item label="津贴名称" label-width="130px" class="subsidy"
                ><el-input value="交通补贴" disabled="disabled"></el-input>
                <el-select
                  placeholder="每月固定"
                  class="areaBox"
                  ref="value1"
                  v-model="seList.transportationSubsidyScheme"
                >
                  <el-option
                    v-for="item in options2"
                    :label="item.label"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <i class="el-icon-question"></i>
                <el-input
                  :value="seList.transportationSubsidyAmount"
                  v-model="seList.transportationSubsidyAmount"
                  ref="money1"
                ></el-input>
              </el-form-item>
              <el-form-item label="" label-width="130px" class="subsidy"
                ><el-input value="通讯补贴" disabled="disabled"></el-input>
                <el-select
                  placeholder="每月固定"
                  class="areaBox"
                  ref="value2"
                  v-model="seList.communicationSubsidyScheme"
                >
                  <el-option
                    v-for="item in options2"
                    :label="item.label"
                    :key="item.value"
                    :value="item.value"
                  ></el-option> </el-select
                ><i class="el-icon-question"></i>
                <el-input
                  v-model="seList.communicationSubsidyAmount"
                  :value="seList.communicationSubsidyAmount"
                  ref="money2"
                ></el-input>
              </el-form-item>
              <el-form-item label="" label-width="130px" class="subsidy"
                ><el-input value="午餐补贴" disabled="disabled"></el-input>
                <el-select
                  placeholder="每月固定"
                  class="areaBox"
                  ref="value3"
                  v-model="seList.lunchAllowanceScheme"
                >
                  <el-option
                    v-for="item in options2"
                    :label="item.label"
                    :key="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <i class="el-icon-question"></i>
                <el-input
                  v-model="seList.lunchAllowanceAmount"
                  :value="seList.lunchAllowanceAmount"
                  ref="money3"
                ></el-input>
              </el-form-item>
              <el-form-item label="" label-width="130px" class="subsidy"
                ><el-input value="住房补贴" disabled="disabled"></el-input>
                <el-select
                  class="areaBox"
                  ref="value4"
                  :value="seList.housingSubsidyScheme"
                  v-model="seList.housingSubsidyScheme"
                  label="123"
                >
                  <el-option
                    v-for="item in options2"
                    :label="item.label"
                    :key="item.value"
                    :value="item.value"
                  ></el-option> </el-select
                ><i class="el-icon-question"></i>
                <el-input
                  v-model="seList.housingSubsidyAmount"
                  :value="seList.housingSubsidyAmount"
                  ref="money4"
                ></el-input>
              </el-form-item>
              <el-form-item label="适用计税方式" label-width="130px">
                <el-radio-group v-model="seList.taxCalculationType">
                  <el-radio
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    ref="type"
                    >{{ item.value }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-button @click="submitFn">提交</el-button>
      <el-button @click="changeFn">重置</el-button>
    </el-main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { settingsAPI, submitSettingsAPI } from "@/api/index";
export default {
  data() {
    return {
      options: [
        {
          value: 1,
          label: "当月",
        },
        {
          value: 2,
          label: "次月",
        },
      ],
      options2: [
        {
          value: 1,
          label: "每日出勤",
        },
        {
          value: 3,
          label: "每月固定",
        },
      ],
      options3: [
        {
          value: "税前",
          label: 1,
        },
        {
          value: "税后",
          label: 2,
        },
      ],
      seList: "",
      activeName: "first",
      labelPosition: "left",
      labelPosition2: "right",
    };
  },
  methods: {
    // 切换计薪设置和津贴设置
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 点击提交按钮提交计薪/津贴设置
    async submitFn() {
      this.seList.transportationSubsidyAmount = Number(
        this.seList.transportationSubsidyAmount
      );
      this.seList.communicationSubsidyAmount = Number(
        this.seList.communicationSubsidyAmount
      );
      this.seList.lunchAllowanceAmount = Number(
        this.seList.lunchAllowanceAmount
      );
      this.seList.housingSubsidyAmount = Number(
        this.seList.housingSubsidyAmount
      );
      const res = await submitSettingsAPI({
        socialSecurityType: this.seList.taxCalculationType,
        subsidyName: this.$refs.scheme.value,
        subsidyRemark: this.$refs.remarks.value,
        transportationSubsidyScheme: this.seList.transportationSubsidyScheme,
        communicationSubsidyScheme: this.seList.communicationSubsidyScheme,
        lunchAllowanceScheme: this.seList.lunchAllowanceScheme,
        housingSubsidyScheme: this.seList.housingSubsidyScheme,
        transportationSubsidyAmount: this.seList.transportationSubsidyAmount,
        communicationSubsidyAmount: this.seList.communicationSubsidyAmount,
        lunchAllowanceAmount: this.seList.lunchAllowanceAmount,
        housingSubsidyAmount: this.seList.housingSubsidyAmount,
        taxCalculationType: this.seList.taxCalculationType,
        companyId: "1",
      });
      // 修改成功提示弹框
      if ((res.code = 10000 && (res.message = "操作成功！"))) {
        this.$message({
          message: "保存成功",
          type: "success",
        });
      }
    },
    // 获取计薪和津贴数据
    async getSettingsFn(){
      const res = await settingsAPI({});
      this.seList = res.data;
    },
    // 点击重置
    changeFn(){
      this.getSettingsFn();
    }
  },
  mounted() {
    // 调用计薪和津贴数据方法
    this.getSettingsFn();
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .el-main{
    background-color: rgba(255, 255, 255, 0.629) !important;
  }
  .setUpBox {
    width: 97%;
    margin: 0 auto;
    .setUp_top {
      width: 99%;
      margin: 20px auto;
      padding-left: 15px;
      padding-bottom: 15px;
      box-shadow: 0px 0px 10px rgb(213, 213, 213);
      .payroll {
        width: 99%;
        margin: 0 auto;
        .el-form-item {
          height: 60px;
          line-height: 60px;
          .el-select {
            width: 280px;
            .el-option {
              height: 20px;
              line-height: 20px;
            }
          }
          .areaBox {
            margin-left: 10px;
          }
          .el-input {
            height: 36px;
            width: 280px;
          }
          .el-icon-question {
            font-size: 20px;
            margin: 0 10px;
            color: #ccc;
          }
          .el-radio:last-of-type {
            margin-left: 25px;
          }
          .inputBox {
            width: 400px;
          }
        }
        .subsidy {
          .el-input {
            width: 200px;
          }
          .el-select {
            width: 200px;
          }
        }
      }
      .el-button {
        width: 80px;
        height: 38px;
        line-height: 16px;
        font-size: 14px;
        color: #fff;
      }
      .el-button:first-of-type {
        margin-left: 50px;
        background: rgb(56,179,255);
      }
      .el-button:last-of-type {
        color: #606266;
      }
    }
  }
}
</style>