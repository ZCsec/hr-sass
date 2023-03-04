import Vue from 'vue'
import Vuex from 'vuex'
// 在store文件夹下创建对应的store(vuex)模块 store/模块文件夹/模块文件
// 在你对应的store模块文件内 导入对应的 api 接口  要加上命名空间
// 在store/index.js中将你写好的模块导入，放在modules数组内
import login from '@/store/login/login.js'

import home from '@/store/home/home.js'
import SysSet from '@/store/SysSet/SysSet'
import SocialSec from '@/store/SocialSec/SocialSec'

//考勤列表
import attendances from '@/store/attendances/attendances.js'
import approval from '@/store/approval/approval'
import organ from '@/store/modules/Organ'
//薪资列表
import salarys from '@/store/salarys/salarys'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    SysSet,
    home,
    attendances,
    organ,
    SocialSec,
    salarys,
    approval
  },
  // 快捷引用
  getters: {
    token: (state) => state.login.token,
    date: (state) => state.home.date,
    depts: (state) => state.organ.depts,
    powerLists: (state) => state.SysSet.powerLists,
    data: (state) => state.attendances.data,
    SocialLists: (state) => state.SocialSec.SocialLists,
    yearList: (state) => state.attendances.yearList,
    list: (state) => state.salarys.list,
    userId: (state) => state.home.userId
  }
})
