<template>
  <div>
    <div class="box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="企业名称" class="lab">
          <el-input v-model="form" placeholder="江苏传智播客教育科技股份有限公司" class="ipt"  :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司地址" class="lab">
          <el-input v-model="form" placeholder="北京市昌平区建材城西路金燕龙办公楼一层" class="ipt"  :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司电话" class="lab">
          <el-input v-model="form" placeholder="400-618-9090" class="ipt"  :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="邮箱" class="lab">
          <el-input v-model="form" placeholder="bd@itcastcn" class="ipt"  :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="备注" class="lab">
          <el-input v-model="form" placeholder="传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质" class="ipt"  :disabled="true"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassCompanyInformation',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.box{
padding: 50px;
.lab{
  width: 50px;
    margin-left: 100px;
}
.ipt{
  width: 350px;
  background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    height: 36px;
    line-height: 36px;
}
}
</style>