// 导入getUserData方法 在路由守卫中获取用户的信息
import { getUserDataAPI } from '@/api/index'
import axios from 'axios';

export default{
  namespaced:true,
  state:{
    date:new Date(),
    dialogFormVisible: false,
    form: {
      region: '加班',
      startDate1: new Date(),
      startDate2: new Date(),
      endDate1:new Date(),
      endDate2:new Date(),
      desc: ''
    }
  },
  mutations:{},
  actions:{
    async getUserData(){
      const res = await getUserDataAPI({
        "Content-Type":"application/x-www-form-urlencoded"
      })

      console.log(res.data.data);
    }
  }
}