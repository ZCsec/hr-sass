import { getAttendancesListAPI } from "@/api/index";

export default{
    namespaced:true,
    state:{
        data:[],

    },
    mutations:{
       getAttendList(state,val){
            state.data=val.rows
       }
    },
    actions:{
       async getAttendance(context){
        const res = await getAttendancesListAPI({
            page:1,
            pagesize:10
        });
        console.log(res.data.data.data);
        context.commit("getAttendList",res.data.data.data);
       }
    }
}