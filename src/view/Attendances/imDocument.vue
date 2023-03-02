<template>
  <div>
    <el-card class="box-card" style="width:1250px;height:600px;border-radius:5px">
      <div class="text item">
        <div class="nav">
          <h2>考勤导入</h2>
          <p>
            <i class="el-icon-info" style="color:#E6A23C"></i> 如果某员工已有打卡记录，最新上传的不覆盖原有数据。可上传多名员工的打卡记录，同考勤日内取员工第一次和最后一次打卡时间
          </p>
        </div>
        <div class="main">
          <div>
            <input type="button" value="点击上传" id="fileImport" @click="clickLoad" />
            <input type="file" id="files" ref="refFile" style="display: none" />
            <p>（推荐下载模板文件，请填写后上传）点击查看文件上传要求</p>
          </div>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              style="border:none;margin-top:80px"
            >
              <i class="el-icon-upload" style="margin-left:-340px;margin-top:50px"></i>
              <div class="el-upload__text" style="width:320px;margin-left:12px;
              margin-top:120px">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
            </el-upload>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    clickLoad() {
      this.$refs.refFile.dispatchEvent(new MouseEvent("click"));
    }
  }
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  .nav {
    width: 90%;
    height: 120px;
    margin: auto;
    margin-top: 0;
    p {
      height: 40px;
      line-height: 40px;
      background-color: #fdf6ec;
      color: #e6a23c;
    }
    h2 {
      text-align: center;
    }
  }
  .main {
    width: 68%;
    height: 320px;
    margin: auto;
    margin-top: 40px;
    border: 1px rgba(119, 119, 119, 0.436) dashed;
    div {
      width: 50%;
      height: 100%;
      float: left;
    }
    div:first-child {
      position: relative;
      input:nth-of-type(1) {
        position: absolute;
        left: 178px;
        top: 138px;
        height: 35px;
        color: white;
        border: none;
        border-radius: 4px;
        background-color: #3994ef;
        cursor: pointer;
      }
      button:hover {
        background-color: #218bf5bb;
      }
      p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 186px;
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