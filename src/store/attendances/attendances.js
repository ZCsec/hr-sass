import { getAttendancesListAPI,getRepotsListAPI } from "@/api/index";

export default{
    namespaced:true,
    state:{
        data:[],
        yearList:{},
    },
    mutations:{
       getAttendList(state,val){
            state.data=val.rows
       },
       getYearList(state,val){
            state.yearList=val
       }
    },
    actions:{
       async getAttendance(context){
        const res = await getAttendancesListAPI({
            page:1,
            pagesize:10
        });
        context.commit("getAttendList",res.data.data.data);
       },
       async getyearList(context){
        const res=await getRepotsListAPI();
        console.log(res.data.data);
        context.commit("getYearList",res.data.data);
       }
    }
}