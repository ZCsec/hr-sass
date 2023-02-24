import {getDepartmentAPI} from '@/api/index'

export default{
    namespaced:true,
    state:{
        companyId: "",
        companyName: "",
        companyManage: "",
        depts: []
    },
    mutations:{
        updateDepartList(state,val){
            state.companyId = val.companyId;
            state.companyName = val.companyName;
            state.companyManage = val.companyManage;
            state.depts = val.depts;
        }
    },
    actions:{
       async getDepartment(context){
            const res =await getDepartmentAPI();
            console.log(res);
            context.commit("updateDepartList",res.data.data.depts)
       }
    }
}