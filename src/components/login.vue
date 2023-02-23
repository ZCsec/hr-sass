<template>
  <div class="container">
    <div class="login">
      <div class="user">
        <el-input
          color="red"
          v-model="input"
          style="width: 380px"
          placeholder="username"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </div>
      <div class="pwd">
        <el-input
          placeholder="password"
          style="width: 380px"
          v-model="pwd"
          show-password
          prefix-icon="el-icon-lock"
        ></el-input>
      </div>

      <el-button type="primary" @click="loginFn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    input: {
      get() {
        return this.$store.state.login.input
      },
      set(val) {
        this.$store.state.login.input = val
      }
    },
    pwd: {
      get() {
        return this.$store.state.login.pwd
      },
      set(val) {
        this.$store.state.login.pwd = val
      }
    }
  },
  methods: {
    loginFn() {
      // console.log(this.$store.state.login.pwd)
      this.$store.dispatch('login/getLogindata', [this.input, this.pwd])
      this.$router.push('/layout')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-image: url('@/assets/common/login.jpg');
  width: 100%;
  height: 100vh;
  // height: 700px;
  background-size: 100% 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .login {
    width: 400px;
    & > div {
      margin: 20px 0;
      background-color: #fff;
      border-radius: 5px;
    }

    /deep/ .el-input__inner {
      background: transparent;
      border-radius: 5;
      border: none;
      padding: 15px 25px 15px 55px;
      color: #68b0fe;
      height: 47px;
    }
  }

  /deep/.el-button {
    width: 100%;
    height: 60px;
    background-color: #407ffe;
    border: none;
    span {
      font-size: 20px;
    }
  }
}
</style>
