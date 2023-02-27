<template>
  <div>
    <div class="infor">
      <div class="infortop">
        <div>姓名： 管理员</div>
        <div>入职日期： 2018-11-02T08:00:00.000+0000</div>
        <div>部门： 总裁办</div>
        <div>工号： 9002</div>
      </div>
      <!-- ---------------------------------------------------- -->
      <div class="inforbody">
<el-form ref="form" :model="form" label-width="160px">
  <el-form-item label="岗位：">
    <el-input v-model="form.name" :style="{width:'300px'}"></el-input>
  </el-form-item>
  <!-- ---------------------------------------------------- -->
  <el-form-item label="转正日期：">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <!-- ---------------------------------------------------- -->
<el-form-item label="岗位：">
   <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
  </el-form-item>
  <!-- ---------------------------------- -->
  <el-form-item label="职级：">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
  <!-- ---------------------------------------------------- -->
  <!-- ---------------------------------- -->
  <el-form-item label="转正评价：">
    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
  </el-form-item>
  <!-- ---------------------------------------------------- -->
   <!-- ---------------------------------- -->
  <el-form-item label="汇报对象：">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
   <!-- ---------------------------------- -->
  <el-form-item label="HRBP：">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
   <!-- ---------------------------------- -->
  <el-form-item label="聘用形式：">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
<!-- ---------------------------------- -->
  <el-form-item label="管理形式：">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
   <!-- ---------------------------------- -->
  <el-form-item label="调整司龄(天)：">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
   <!-- ---------------------------------- -->
  <el-form-item label="司龄：">
    <el-input
  placeholder="2.97年"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
   <!-- ---------------------------------- -->
  <el-form-item label="首次参加工作时间：">
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <!-- ---------------------------------- -->
  <el-form-item label="调整工龄(天)：">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
  <!-- ---------------------------------- -->
  <el-form-item label="工龄：">
    <el-input
  placeholder="0.00年"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
  <!-- ---------------------------------- -->
  <el-form-item label="直属下属数量：">
    <el-input
  placeholder="2"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>

   <div class="top2-top1"> 
        合同信息
      </div>
<!-- ---------------------------------- -->
  <el-form-item label="首次合同开始时间：">
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
<!-- ---------------------------------- -->
  <el-form-item label="首次合同结束时间：">
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
<!-- ---------------------------------- -->
  <el-form-item label="现合同开始时间：">
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
<!-- ---------------------------------- -->
  <el-form-item label="现合同结束时间：">
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
<!-- ---------------------------------- -->
  <el-form-item label="合同期限：">
    <el-input
  placeholder="6月"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
  <!-- ---------------------------------- -->
  <el-form-item label="续签次数：">
    <el-input
  placeholder="1次"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>

   <div class="top2-top1"> 
        合同信息
      </div>
      <!-- ---------------------------------- -->
  <el-form-item label="招聘信息：">
    <el-input
  placeholder="拉勾网"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
      <!-- ---------------------------------- -->
  <el-form-item label="招聘渠道：">
    <el-input
  placeholder="猎头"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
      <!-- ---------------------------------- -->
  <el-form-item label="社招/校招：">
    <el-input
  placeholder="校招"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>
      <!-- ---------------------------------- -->
  <el-form-item label="推荐企业/人：">
    <el-input
  placeholder="百度"
  :disabled="true"
  :style="{width:'300px'}">
</el-input>
  </el-form-item>


<div class="bottombtn">
       <el-button>返回</el-button>
  <el-button type="primary">保存更新</el-button>
    </div>











</el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassPost',

  data() {
    return {
      textarea: '',
      form: {
          name: '',
        },
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
         input: '',
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.infor {
  padding: 20px 200px;
  .infortop {
display: flex;
flex-wrap: wrap;
    div{
      width: 45%;
      margin: 10px;
      padding: 10px;
    }
  }
}
.inforbody {
  margin-top: 30px;
  margin-left: -60px;
}
.top2-top1 {
  margin-top: 60px;
      border-bottom: 1px solid #999;
      height: 40px;
      margin-bottom: 40px;
  }
  .bottombtn {
    margin-top: 60px;
    margin-left: 35%;
  }
</style>