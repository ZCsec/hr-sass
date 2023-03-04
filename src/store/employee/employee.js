

import { getEmployeeList } from '@/api/employee/employee'

export default {

  // namespaced:true,

  state:{
    datata:[],
    list:[]
  },
  mutations:{
    // GetList(state,val){
    //   state.datata = val.rows
//  }
  BACKSPACE(state,index) {
    state.list.splice(index,1)
  },

  },

  
  actions:{
    async GetList(context){
      const res = await GetList({
          page:1,
          pagesize:10
      });
      console.log(res.data);
      context.commit("GetList",res.data.data.data);
     },
    backspace(context,index) {
      context.commit('BACKSPACE',index)
    },

    // 添加
   
  }
}