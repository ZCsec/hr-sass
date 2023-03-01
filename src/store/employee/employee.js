

import { GetList } from '@/api/employee/em'

export default {

  namespaced:true,

  state:{
    datata:[],
    list:[
      {
        id: 1,
        name: '王小虎',
        phone: '19897630403',
        worknumber: '9000',
        manner: '1',
        department: '管理员',
        time:'2018-11-02T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 2,
        name: '张天欣',
        phone: '13078545213',
        worknumber: '9025',
        manner: '1',
        department: '市场部',
        time:'2018-11-04T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 3,
        name: '罗晓晓',
        phone: '13800000004',
        worknumber: '9025',
        manner: '1',
        department: '人事部',
        time:'2018-12-02T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 4,
        name: '文吉星',
        phone: '13400000001',
        worknumber: '9336',
        manner: '1',
        department: '人事部',
        time:'2018-01-01T00:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 5,
        name: '周乐天',
        phone: '13500000003',
        worknumber: '2003',
        manner: '1',
        department: '财务部',
        time:'2018-01-01T00:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 6,
        name: '吕勇锐',
        phone: '13600000001',
        worknumber: '0001',
        manner: '1',
        department: '总裁办',
        time:'1992-08-04T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 7,
        name: '袁永安',
        phone: '13600000002',
        worknumber: '0002',
        manner: '1',
        department: '总裁办',
        time:'1993-08-04T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 8,
        name: '乔海',
        phone: '13500000001',
        worknumber: '2001',
        manner: '1',
        department: '总裁办',
        time:'2018-01-01T00:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 9,
        name: '孙财',
        phone: '13800000003',
        worknumber: '111',
        manner: '1',
        department: '市场部',
        time:'2018-11-04T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 10,
        name: '管理员',
        phone: '13800000002',
        worknumber: '9002',
        manner: '1',
        department: '总裁办',
        time:'2018-11-02T08:00:00.000+0000',
        incumbency:'1',
        state:'1'
      },
      {
        id: 11,
        name: '董昊空',
        phone: '13500000002',
        worknumber: '2002',
        manner: '1',
        department: '总裁办',
        time:'2018-01-01T00:00:00.000+0000',
        incumbency:'1',
        state:'1'
      }
    ]
  },
  mutations:{
    GetList(state,val){
      state.datata = val.rows
 }
  },
  actions:{
    async GetList(context){
      const res = await GetList({
          page:1,
          pagesize:10
      });
      console.log(res.data);
      context.commit("GetList",res.data.data.data);
     }
  }
}