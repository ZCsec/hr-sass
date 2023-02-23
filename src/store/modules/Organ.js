import { departmentListAPI } from "@/api/index"
export default {
    namespaced: true,
    state: {
        companyId: "",
        companyName: "",
        companyManage: "",
        depts: []
    },
    mutations: {
        updatcodes(state, val) {
            state.companyId = val.companyId;
            state.companyName = val.companyName;
            state.companyManage = val.companyManage;
            state.depts = val.depts;
        }
    },
    actions: {
        async getHomePage(context) {
            const res = await departmentListAPI();
            console.log(res);
            context.commit("updatcodes", res.data.data)

        }
    }
}