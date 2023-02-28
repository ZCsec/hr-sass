<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="计薪设置" name="first">
        <div class="main">
          <div class="main_1">
            <div>对应社保自然月</div>
            <div>
              <el-select v-model="value" placeholder="次月" style="width:320px;margin-left:40px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="main_2">
            <div>社保数据来源</div>
            <div>
              <el-select
                v-model="value"
                disabled
                placeholder="次月"
                style="width:320px;margin-left:40px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="main_3">
            <div>考勤数据来源</div>
            <div>
              <el-select
                v-model="value"
                disabled
                placeholder="次月"
                style="width:320px;margin-left:40px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="main_4">
            <div>
              <input type="button" value="提交" />
            </div>
            <div>
              <input type="button" value="重置" />
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="津贴设置" name="second">
        <div class="main">
          <div class="main_5">
            <div>通用方案</div>
            <div>
                <el-input v-model="input" style="width:320px"></el-input>
            </div>
          </div>
          <div class="main_6">
            <div>备注</div>
            <div>
                <el-input v-model="input2" style="width:320px"></el-input>
            </div>
          </div>
          <div class="main_7">
            <div>津贴名称</div>
            <div>
              <el-select
                v-model="value"
                disabled
                placeholder="交通补贴"
                style="width:160px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="value1"
                placeholder="出勤"
                style="width:160px"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="input1" style="width:160px;margin:10px"></el-input>
            </div>
          </div>
          <div class="main_8">
            <div></div>
            <div>
              <el-select
                v-model="value"
                disabled
                placeholder="通讯补贴"
                style="width:160px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="value8"
                placeholder="出勤"
                style="width:160px"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="input8" style="width:160px;margin:10px"></el-input>
            </div>
          </div>
          <div class="main_9">
            <div></div>
            <div>
              <el-select
                v-model="value"
                disabled
                placeholder="午餐补贴"
                style="width:160px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="value9"
                placeholder="出勤"
                style="width:160px"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="input9" style="width:160px;margin:10px"></el-input>
            </div>
          </div>
          <div class="main_10">
            <div class="main_1">
            <div>适用计税方式</div>
            <div>
                <el-radio v-model="radio" label="1">税前</el-radio>
                <el-radio v-model="radio" label="2">税后</el-radio>
            </div>
          </div>
          </div>
          <div class="main_11">
            <div>
              <input type="button" value="提交" />
            </div>
            <div>
              <input type="button" value="重置" />
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      options: [
        {
          value: "选项1",
          label: "当月"
        },
        {
          value: "选项2",
          label: "次月"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "每出勤日"
        },
        {
          value: "选项2",
          label: "每月固定"
        }
      ],
      value: "",
      value1:'',
      value8:'',
      value9:'',
      input:'',
      input1:'',
      input2:'',
      input8:'',
      input9:'',
      radio: '1'
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 550px;
  background-color: rgb(249, 249, 249);
  border-radius: 4px;
  box-shadow: 0px 0px 8px 8px rgba(195, 195, 195, 0.573);
  div {
    width: 100%;
    height: 80px;
  }
  .main_1 {
    div {
      float: left;
      width: 80%;
      height: 60px;
    }
    div:nth-of-type(1) {
      width: 10%;
      text-align: center;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
      width: 60%;
      .el-radio{
        margin-top: 33px;
      }
    }
  }
  .main_2 {
    div {
      float: left;
      width: 80%;
      height: 60px;
    }
    div:nth-of-type(1) {
      width: 10%;
      text-align: center;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
      width: 60%;
    }
  }
  .main_3 {
    div {
      float: left;
      width: 80%;
      height: 60px;
    }
    div:nth-of-type(1) {
      width: 10%;
      text-align: center;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
      width: 60%;
    }
  }
  .main_4 {
    div {
      float: left;
      width: 80%;
      height: 60px;
      margin: auto;
      width: 10%;
      text-align: center;
      line-height: 60px;
      input {
        width: 60px;
        height: 30px;
        border: none;
        color: white;
        border-radius: 5px;
        background-color: #5aa8fb;
        cursor: pointer;
      }
      input:hover {
        background-color: #76b6f9e1;
      }
    }
    div:nth-of-type(1) {
      margin-left: 154px;
    }
    div:nth-of-type(2) {
    }
  }

  .main_5 {
    div {
      float: left;
      width: 80%;
      height: 60px;
    }
    div:nth-of-type(1) {
      width: 10%;
      text-align: right;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
      width: 60%;
    }
  }
  .main_6 {
    div {
      float: left;
      width: 80%;
      height: 60px;
    }
    div:nth-of-type(1) {
      width: 10%;
      text-align: right;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
      width: 60%;
    }
  }
  .main_7,.main_8,.main_9{
    height: 80px;
    div{
        float: left;
      width: 80%;
      height: 60px;
      width: 10%;
      text-align: right;
      line-height: 60px;
      margin: 10px;
    }
    div:nth-of-type(2) {
        margin: 0;
        height: 60px;
      width: 70%;
      .el-select:nth-of-type(2){
        margin: 10px;
      }
    }
  }
  .main_11 {
    div {
      float: left;
      width: 80%;
      height: 60px;
      margin: auto;
      width: 10%;
      text-align: center;
      line-height: 60px;
      input {
        width: 60px;
        height: 30px;
        border: none;
        color: white;
        border-radius: 5px;
        background-color: #5aa8fb;
        cursor: pointer;
      }
      input:hover {
        background-color: #76b6f9e1;
      }
    }
    div:nth-of-type(1) {
      margin-left: 154px;
    }
    div:nth-of-type(2) {
    }
  }
}
</style>