import { getLoginAPI } from '@/api/index'
import {getToken,setToken,removeToken,getTokenTime,setTokenTime,removeTokenTime} from '@/utils/cookie'


export default{
  namespaced:true,
  state:{
    input: '13800000002',
    pwd: '123456',
    token:getToken()
  },
  // 同步操作
  mutations:{
    getTokenData(state,val){
      console.log(val);
      state.token = val
      setToken(val)
      setTokenTime()
      // this.$router.push('/layout')
    }
  },
  // 异步操作
  actions:{
    async getLogindata(context,list){
      const res = await getLoginAPI({
        'Content-Type':'application/json',
        mobile:list[0],
        password:list[1]
      })
      context.commit('getTokenData',res.data.data)
    }
  }
}