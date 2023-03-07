<template>
  <div>
    <el-card class="box-card" style="width:955px;height:640px;border-radius:5px;float:left">
      <div class="text item">
        <div class="salary">
          <div>
            <img src alt />
          </div>
          <div>
            <li>管理员</li>
            <li>部门：总裁办</li>
            <li>入职时间：2018-10-12</li>
          </div>
        </div>
        <div class="allowance">
          <div class="title">津贴</div>
          <div class="bg">
            <div>
              <li>津贴类型</li>
              <li>补贴金额</li>
              <li>津贴类型</li>
              <li>补贴金额</li>
            </div>
            <div>
              <li>交通补助</li>
              <li>0</li>
              <li>通讯补助</li>
              <li>0</li>
            </div>
            <div>
              <li>午餐补助</li>
              <li>0</li>
              <li>住房补助</li>
              <li>0</li>
            </div>
          </div>
        </div>
        <div class="allowance">
          <div class="title">
            社保公积金
            <span>企业0</span>
            <span>个人0</span>
          </div>
          <div class="bg">
            <div>
              <li>缴费项目</li>
              <li>基数</li>
              <li>企业缴纳</li>
              <li>个人缴纳</li>
            </div>
            <div>
              <li>社保</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
            </div>
            <div>
              <li>公积金</li>
              <li>0</li>
              <li>0</li>
              <li>0</li>
            </div>
          </div>
        </div>
        <div class="foot">
          <span>实际出勤天数（正式）:</span>
          <el-input style="width:320px" placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
        </div>
        <div class="footer">
          <span>计数天数（正式）：</span>
          <el-input style="width:320px" placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
        </div>
      </div>
    </el-card>
    <el-card
      class="box-card"
      style="width:270px;height:640px;border-radius:5px;float:left;
      margin-left:10px"
    >
      <div class="text item">
        <div class="recruit">招聘日程</div>
        <div class="recruit_main">
          <div>
            <li>
              <p>HR专员</p>
              <p>2018-12-3-3:30</p>
            </li>
            <li>
              <p>HR专员</p>
              <p>2018-12-3-3:30</p>
            </li>
          </div>
          <div style="height: 200px;margin-left:40px">
            <el-steps direction="vertical" :active="1">
              <el-step title></el-step>
              <el-step title></el-step>
              <el-step title></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
  
  <script>
import { getSalarysListAPI } from "@/api/index";
export default {
  data() {
    return {
      input: "",
      input1: "",
      idList:[]
    };
  },
  created() {
    this.getEmpliyeet();
  },
  methods: {
    // clickLoad() {
    //   this.$refs.refFile.dispatchEvent(new MouseEvent("click"));
    // },
    async getEmpliyeet() {
      var url = window.location.href;
      var index = url.lastIndexOf("\/");
      url = url.substring(index + 1, url.length);
      console.log(url);
      const res=await getSalarysListAPI(
        {"total":0,"page":1,"pageSize":60,"approvalsTypeChecks":[],"approvalsStateChecks":[],"departmentChecks":[]}
      )
      this.idList=[]
      this.idList=res.data.data.rows;
      this.idList=this.idList.forEach((item)=>{console.log(item.id);});
    }
  }
};
</script>
  
  <style lang="less" scoped>
.salary {
  width: 100%;
  height: 112px;
  div {
    float: left;
  }
  div:nth-of-type(1) {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url(../../assets/svg/1.jpeg);
    background-size: 80px;
  }
  div:nth-of-type(2) {
    width: 28%;
    height: 120px;
    margin-left: 20px;
    li {
      list-style: none;
      height: 24px;
      line-height: 24px;
      font-size: 16px;
    }
  }
}
.text {
  font-size: 14px;
}
.allowance {
  width: 100%;
  height: 150px;
  margin-top: 20px;
  div {
    width: 100%;
    height: 120px;
    margin-top: 10px;
  }
  .title {
    text-align: left;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 600;
    span {
      font-size: 16px;
      font-weight: none;
      margin-left: 100px;
    }
  }
  .bg {
    background-color: rgba(200, 200, 200, 0.241);
    div {
      width: 100%;
      height: 30px;
      line-height: 30px;
      li {
        width: 25%;
        text-align: center;
        list-style: none;
        float: left;
      }
    }
    div:nth-of-type(1) {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
.foot {
  margin-top: 30px;
  span {
    display: inline;
    margin-right: 10px;
  }
}
.footer {
  margin-top: 20px;
  span {
    display: inline;
    margin-left: 28px;
  }
}
.recruit {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
}
.recruit_main {
  margin-top: 20px;
  div {
    float: left;
  }
  div:first-child {
    li {
      width: 100%;
      height: 50%;
      list-style: none;
      margin-top: 10px;
      p {
        height: 20px;
        line-height: 20px;
      }
    }
  }
}
.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>