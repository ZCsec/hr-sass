// 在router文件夹下创建你自己对应组件的路由规则模块 router/路由规则模块文件夹/路由规则文件
// 导入后直接加载 routes 数组里
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

// 导入子路由规则模块
import Layout from '@/layout/index.vue'
// 布局路由模块
import organs from '@/router/organ/organ'
// 主页子路由模块
import home from '@/router/home/home'
// 登陆主路由模块
import Login from '@/components/login.vue'

//导入权限路由
import sysSet from '@/router/sysSet/sysSet'
//导入社保路由
import socialSec from './socialSec/socialSec'
import socialHistorical from '@/router/socialSec/socialHistorical' //历史归档
import monthlyReport from '@/router/socialSec/monthlyReport'
import userSocial from '@/router/socialSec/userSocial' //员工社保详情

//考勤模块路由
import attendances from '@/router/attendances/attendances'
import imports from '@/router/attendances/imports'
import historys from '@/router/attendances/historys'
import isMonths from '@/router/attendances/isMonths'
//工资模块路由
import salarys from '@/router/salarys/salarys'
import salaryset from '@/router/salarys/salaryset'
import report from '@/router/salarys/report'
import details from '@/router/salarys/details'

import store from '@/store/index'
// 公司设置路由
import companySettings from '@/router/CompanySettings/CompanySettings'
import employee from '@/router/CompanySettings/Employee'
import imp from '@/router/CompanySettings/Imp'
import golook from '@/router/CompanySettings/golook'
// 导入审批模块
import Approval from '@/router/Approval/Approval'
import leaveApproval from '@/router/Approval/leaveApproval'
import securitySetting from '@/router/Approval/securitySetting'
import myInfo from '@/router/Approval/myInfo'
import Approvals from '@/router/Approval/Approvals'
import { getTokenTime, setTokenTime } from '@/utils/cookie'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      // 在这里放你对应的模块！！！
      home,
      attendances,
      imports,
      historys,
      isMonths,
      salarys,
      salaryset,
      report,
      details,
      companySettings,
      sysSet,
      socialSec,
      employee,
      organs,
      imp,
      golook,
      socialHistorical,
      monthlyReport,
      Approval,
      userSocial,
      leaveApproval,
      securitySetting,
      myInfo,
      Approvals
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const arrs = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
  if (arrs.indexOf(to.path) === -1) {
    if (store.getters.token) {
      // 获取当前时间戳和登录时得到的 时间戳
      // console.log(Date.now() - getTokenTime())
      if (Date.now() - getTokenTime() <= 300000) {
        // 如果token未超时 更新tokenTime 并放行
        setTokenTime('tokenTime', Date.now())
        next()
      } else {
        // 如果此次tokenTime与上次tokenTime 时间差 大于五分钟
        // 需要做出提示
        Message({
          type: 'error',
          message: 'token已超时！'
        })
        next('/login')
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
