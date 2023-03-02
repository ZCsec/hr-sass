import { getProcessAPI } from '@/api'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getProcessData(context) {
      const res = await getProcessAPI({
        page: 1,
        size: 10
      })
      console.log(res)
    }
  }
}
