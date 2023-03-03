<template>
  <div class="container">
    <div class="top">
      <span>个人信息</span>
    </div>
    <div class="main">
      <div class="img">
        <el-avatar class="userImg" :size="80" :src="userImg"></el-avatar>
      </div>
      <div class="userInfo">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formLabelAlign.mobile"></el-input>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="formLabelAlign.domicile"></el-input>
          </el-form-item>
          <!-- <el-form-item label="性别">
            <el-select v-model="formLabelAlign.sex" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="入职时间">
            <el-date-picker
              type="date"
              placeholder="请选择日期"
              v-model="formLabelAlign.timeOfEntry"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfoAPI, saveInfoAPI } from '@/api/index'
import { getToken } from '@/utils/cookie'
export default {
  data() {
    return {
      userImg: '',
      formLabelAlign: {
        username: '',
        mobile: '',
        domicile: '',
        timeOfEntry: ''
      },
      userId: ''
    }
  },
  methods: {
    async onSubmit() {
      // console.log('发送保存请求')
      const res = await saveInfoAPI(this.userId)
      console.log(res)
    },
    async getInfo(id) {
      const res = await getInfoAPI(id)
      // console.log(res)
      this.formLabelAlign.username = res.data.data.username
      this.formLabelAlign.mobile = res.data.data.mobile
      this.formLabelAlign.domicile = res.data.data.domicile
      this.formLabelAlign.timeOfEntry = res.data.data.timeOfEntry
      this.userImg = res.data.data.staffPhoto
    }
  },
  mounted() {
    this.userId = window.sessionStorage.getItem('userId')
    this.getInfo(this.userId)
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  height: 380px;
  .top {
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    span {
      color: #409eff;
      border-bottom: 2px solid #409eff;
      font-size: 18px;
      display: inline-block;
      padding: 0 18px;
    }
  }
  .main {
    display: flex;
    .img {
      margin: 10px 10px 10px 20px;
    }
    .userInfo {
      // border: 1px solid red;
      margin-top: 15px;
    }
  }
}
</style>
