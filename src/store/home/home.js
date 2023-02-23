// 导入getUserData方法 在路由守卫中获取用户的信息
import { getUserDataAPI,getApplicationAPI } from '@/api/index'
import {getTime} from '@/utils/getDate'
import {successMsg} from '@/utils/sucessMsg'
import $sotre from '@/store'

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
    },
    // 关于用户的信息
    username:'',
    userId:'',
    company:'',
    getStatus:''
  },
  mutations:{
    getUserName(state,val){
      state.username = val[0]
      state.userId = val[1]
      state.company = val[2]
    },
    getAppStatus(state,val){
      state.getStatus = val
      // if(val === 200){
      //   state.getStatus = val
      //   state.dialogFormVisible = true
      //   // successMsg()
      // }
    }
  },
  actions:{
    async getUserData(context){
      const res = await getUserDataAPI({
        "Content-Type":"application/x-www-form-urlencoded"
      })

      // console.log(res.data.data);
      context.commit('getUserName',[res.data.data.username,res.data.data.userId,res.data.data.company])
    },
    async getApplication(context){
      const res = await getApplicationAPI({
        processName:'加班',
        userId:$sotre.state.home.userId,
        username:$sotre.state.home.username,
        procApplyTime:getTime(new Date())
      })
      // console.log(res.status);
      context.commit('getAppStatus',res.status)
    }
  }
}