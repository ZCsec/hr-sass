import { getSalarysListAPI } from '@/api/index'
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    getSalarysList(state, val) {
      state.list = val
    }
  },
  actions: {
    async getSalarys(context) {
      const res = await getSalarysListAPI()
      console.log(res)
      context.commit('getSalarysList', res.data)
    }
  }
}
