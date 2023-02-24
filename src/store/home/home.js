// 导入getUserData方法 在路由守卫中获取用户的信息
import { getUserDataAPI, getApplicationAPI } from '@/api/index'
import { getDate, getTime } from '@/utils/getDate'
import $store from '@/store'

export default {
  namespaced: true,
  state: {
    date: new Date(),
    dialogFormVisible: false,
    form: {
      region: '加班',
      startDate1: new Date(),
      startDate2: new Date(),
      endDate1: new Date(),
      endDate2: new Date(),
      desc: '',
      leaveDate1: new Date(),
      leaveDate2: new Date(),
      leaveReason: ''
    },
    // 关于用户的信息
    username: '',
    userId: '',
    company: '',
    getStatus: '',
    message: ''
  },
  mutations: {
    getUserName(state, val) {
      state.username = val[0]
      state.userId = val[1]
      state.company = val[2]
    },
    getAppStatus(state, val) {
      state.getStatus = val[0]
      // console.log(val[1])
      state.message = val[1]
    }
  },
  actions: {
    async getUserData(context) {
      const res = await getUserDataAPI({
        'Content-Type': 'application/x-www-form-urlencoded'
      })

      // console.log(res.data.data);
      context.commit('getUserName', [
        res.data.data.username,
        res.data.data.userId,
        res.data.data.company
      ])
    },
    // 加班申请
    async getApplication(context) {
      const res = await getApplicationAPI({
        end_time:
          $store.state.home.form.endDate1 +
          $store.state.home.form.endDate2.substring(10, 20),
        processKey: 'process_dimission',
        processName: $store.state.home.form.region,
        reason: $store.state.home.form.desc,
        start_time:
          $store.state.home.form.startDate1 +
          $store.state.home.form.startDate2.substring(10, 20),
        userId: $store.state.home.userId
      })
      console.log(res)
      context.commit('getAppStatus', [res.data.code, res.data.message])
    },
    // 离职申请
    async leaveWork(context) {
      const res = await getApplicationAPI({
        exceptTime:
          getDate($store.state.home.form.leaveDate1) +
          getTime($store.state.home.form.leaveDate2).substring(10, 20),
        processKey: 'process_dimission',
        processName: '离职',
        reason: $store.state.home.form.leaveReason,
        userId: $store.state.home.userId
      })
      console.log(res)
      context.commit('getAppStatus', [res.data.code, res.data.message])
    }
  }
}
