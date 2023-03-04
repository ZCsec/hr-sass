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
          <upload-excel :on-success="success"></upload-excel>
        </div>
      </div>
    </el-card>
    
  </div>
</template>

<script>
import UploadExcel from '@/components/UploadExcel'
import XLSX from 'xlsx'
import {importEmployeeAPI} from '@/api'
export default {
  components:{
    UploadExcel
  },
  data(){
    return{

    }
  },
  mounted(){
    console.log(XLSX)
  },
  methods: {
    clickLoad() {
      this.$refs.refFile.dispatchEvent(new MouseEvent("click"));
    },
    async success({header,results}){
      const headerData={
        '入职日期': 'timeOfEntry' ,
        '手机号':'mobile' ,
        '姓名':'username',
        '转正日期':'correctionTime' ,
        '工号': 'workNumber'
      }
      let newArr =results.map(item=>{
        let newInfo={};
        Object.keys(item).forEach(key=>{
          newInfo[headerData[key]=item[key]]
          if(headerData[key]=='timeOfEntry'||headerData[key]=='correctionTime'){
            newInfo[headerData[key]]=new Date(this.formatDate(item[key],'/'))
          }else{
            newInfo[headerData[key]]=item[key]
          }
        })
        return newInfo
      })
      await importEmployeeAPI(newArr);
      console.log(newArr);
    },
     // 转化excel的日期格式
     formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() - 1 + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }
  }
};
</script>

<style lang="less" scoped>
.upload-excel{
  margin-left: 200px;
  margin-top: 80px;
}
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