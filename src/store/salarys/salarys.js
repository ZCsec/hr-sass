import { getSalaryDetailAPI, getSalarysListAPI } from '@/api/index'
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    getSalarysList(state, val) {
      state.list = val.rows
    }
  },
  actions: {
    async getSalarys(context) {
      const res = await getSalarysListAPI(
        {"total":0,"page":1,"pageSize":10,"approvalsTypeChecks":[],"approvalsStateChecks":[],"departmentChecks":[]}
      )
      //表格数据
      console.log(res.data.data.rows)
      context.commit('getSalarysList', res.data.data)
    }
  }
}
