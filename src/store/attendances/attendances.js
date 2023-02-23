import {getDepartmentAPI} from '@/api/attendances/attendances'

export default{
    namespaced:true,
    state:{
        departList:[],
        attendancesList:[]
    },
    mutations:{
        updateDepartList(state,val){
            state.departList=val;
        },
        updatAttenList(state,val){
            state.attendancesList=val;
        }
    },
    actions:{
        async getDepartList(context,val){
            console.log(val);
            //查找部门列表
            const res =await getDepartmentAPI({
                "Authorization":"Bearer " +val
            })
            context.commit("updateDepartList",res);
            //部门考勤数据
            const res1=await getAttendanceAPI({
                "Authorization":"Bearer " +val,
                page,
                pagesize:9
            })
            console.log(res);
            context.comit("updatAttenList",res);
        }
    }
}