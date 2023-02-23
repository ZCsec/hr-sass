import {getDate,getTime} from '@/utils/getDate'

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
    
  }
}