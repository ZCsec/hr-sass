import { departmentListAPI } from "@/api/index"
export default {
    namespaced: true,
    state: {
        codes: [],
        datas: [],
    },
    mutations: {
        updatcodes(state, val) {
            state.codes = val;
        }
    },
    actions: {
        async getHomePage(context, val) {
            const res = await departmentListAPI({
                Authorization: "Bearer " + val
            });

            context.commit("updatcodes", res.data.result)

        }
    }
}