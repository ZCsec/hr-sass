<template>
  <div>
    <div class="top1">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="工号：">
          <el-input v-model="formInline.user" placeholder="审批人" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
        <el-form-item label="入职时间：">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名：">
          <el-input v-model="formInline.user" placeholder="审批人" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
        <el-form-item label="部门：">
          <el-input v-model="formInline.user" placeholder="审批人" :style="{width:'300px'}"></el-input>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="手机：">
          <el-input v-model="formInline.user" placeholder="审批人" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
        <el-form-item label="聘用形式：">
          <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="员工照片：">
          <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
        </el-form-item>
      </el-form>
      <div class="btnn">
        <el-button>取消</el-button>
  <el-button type="primary">保存更新</el-button>
      </div>
    </div>
    <!-- 头部2基础信息 -->
    <div class="top2">
      <div class="top2-top"> 
        基础信息
      </div>
      <div class="top2-body">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="最高学历：">
          <el-select v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
      </el-form>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="国家/地区：">
          <el-select v-model="value3" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="护照号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:' 600px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="身份证号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'800px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="籍贯：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="民族：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="婚姻状况：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="生日：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="生肖：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="年龄：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="星座：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="血型：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="身份证号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:' 600px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="户籍所在地：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'700px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="政治面貌：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="入党时间：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="存档机构：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'400px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="子女状态：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'600px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="子女有无商业保险：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="有无重大违纪现象">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'400px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="有无重大病史">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <!-- 头部3基础信息 -->
    <div class="top2">
      <div class="top2-top"> 
        通讯信息
      </div>
      <div class="top2-body">
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="QQ：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="微信：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="现住址：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'800px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="通讯地址：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'700px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="联系手机：">
          <el-input v-model="formInline.user" placeholder="11位字符" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="个人邮箱：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="紧急联系人：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="紧急联系电话：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <!-- 头部4基础信息 -->
    <div class="top2">
      <div class="top2-top"> 
        账号信息
      </div>
      <div class="top2-body">
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="社保电脑号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="公积金账号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="银行卡卡号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="开户行账号：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <!-- 头部5基础信息 -->
    <div class="top2">
      <div class="top2-top"> 
        教育信息
      </div>
      <div class="top2-body">
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学历类型：">
          <el-input v-model="formInline.user" placeholder="统招/自考/应考" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="毕业学校：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="入学时间：">
          <el-input v-model="formInline.user" placeholder="xx年xx月xx日" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="毕业时间：">
          <el-input v-model="formInline.user" placeholder="xx年xx月xx日" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="专业：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <!-- 头部6基础信息 -->
    <div class="top2">
      <div class="top2-top"> 
        从业信息
      </div>
      <div class="top2-body">
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="上家公司：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="职称：">
          <el-input v-model="formInline.user" placeholder="请输入" :style="{width:'300px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="有无竞争限制：">
          <el-input v-model="formInline.user" placeholder="" :style="{width:'900px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
       <!-- ---------------------------------------------------- -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="备注：">
          <el-input v-model="formInline.user" placeholder="xx年xx月xx日" :style="{width:'900px'}" class="right"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <div class="bottombtn">
       <el-button>返回</el-button>
  <el-button type="primary">保存更新</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HrSassLogin',

  data() {
    return {
      value2:'',
       dialogImageUrl: '',
        dialogVisible: false,
     formInline: {
          user: '',
          region: ''
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
        options: [{
          value: '选项1',
          label: '正式'
        }, {
          value: '选项2',
          label: '非正式'
        }],
        // --------------------------------
        options3: [{
          value: '选项1',
          label: '中国内陆'
        }, {
          value: '选项2',
          label: '港澳台国外'
        }],
        value3: '',
        value: '正式',
        // --------------------------------
        options2: [{
          value: '选项1',
          label: '初中'
        }, {
          value: '选项2',
          label: '高中'
        }, {
          value: '选项3',
          label: '中专'
        }, {
          value: '选项4',
          label: '大专'
        }, {
          value: '选项5',
          label: '本科'
        }, {
          value: '选项6',
          label: '硕士'
        }, {
          value: '选项7',
          label: '博士'
        }],
    };
  },

  mounted() {
    
  },

  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  },
};
</script>

<style lang="scss" scoped>
.top1 {
  margin: 30px 150px;
  .right {
    margin-right: 300px;
  }
  .btnn {
    margin-left: 80px;
  }
} 
.top2 {
    padding: 20px 40px;
    .top2-top {
      border-bottom: 1px solid #999;
      height: 40px;
    }
    .top2-body {
      margin: 20px 130px;
    }
  }
  .bottombtn {
    margin-left: 35%;
  }
</style>