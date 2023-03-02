import { getProcessAPI, getProcessDetailAPI, getProcessRateAPI } from '@/api'

export default {
  namespaced: true,
  state: {
    list: [],
    total: ''
  },
  mutations: {
    getList(state, val) {
      // console.log(val)
      state.list = val.rows
      state.total = val.total
    }
  },
  actions: {
    // 获取全部的审批列表
    async getProcessData(context) {
      const res = await getProcessAPI({
        page: 1,
        pageSize: 10
      })
      // console.log(res)
      context.commit('getList', res.data.data)
    }
  }
}
