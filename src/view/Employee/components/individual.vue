<template>
  <div>
    <div class="box">
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名：" :label-width="formLabelWidth">
      <el-input v-model="form.data1" autocomplete="off" :style="{width:'300px'}"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="密码：" :label-width="formLabelWidth">
      <el-input v-model="form.data1" autocomplete="off" :style="{width:'300px'}"></el-input>
    </el-form-item>
    </el-form>
    <div class="new">
      <el-button type="primary" @click="onSubmit">更新</el-button>  
      <el-link type="primary" class="left">取消</el-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassIndividual',

  data() {
    return {
      form:{
        data1:'',
        data2:''
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.new {
  margin-left: 80px;
}
.left {
  margin-left: 20px;
}
.box {
  padding: 30px 0 50px 300px;
}
</style>