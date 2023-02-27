<template>
  <div>
    <el-container>
  <el-header class="top">员工导入</el-header>
  <el-main>
      <el-button type="warning" disabled class="btn"><span>!</span> 每次导入仅可添加1000名员工，姓名、手机、入职时间、聘用形式为必填项</el-button>
      <div class="click-imp">
        <div class="impleft">
        <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">(推荐下载模板文件，填写后上传)
点击查看文件上传要求</div>
</el-upload>
        </div>
        <div class="impright">
        <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
      <i class="el-icon-upload"></i>
       <div class="el-upload__text">将文件拖到此处</div>
</el-upload>
        </div>
      </div>
  </el-main>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'HrSassImport',

  data() {
    return {
      fileList:[]
    };
  },

  mounted() {
    
  },

  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
  },
};
</script>

<style lang="scss">
.top {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.btn {
  width: 100%;
  height: 15px;
  font-size: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.click-imp {
  width: 720px;
  height: 180px;
  border: 1px dashed #d9d9d9;
  margin: 120px 0 0 25%;
  background-color: #fff;
  display: flex;
  .impleft {
    width: 360px;
    border-right: 1px dashed #d9d9d9;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    .upload-demo {
      display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .el-upload__tip {
      width: 80%;
    }
    }
}
.impright{
 width: 274px;
   height: 180px;
   .upload-demo {
    width: 100%;
    height: 100%;
   }
}
}

</style>