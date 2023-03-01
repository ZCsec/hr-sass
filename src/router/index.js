// 在router文件夹下创建你自己对应组件的路由规则模块 router/路由规则模块文件夹/路由规则文件
// 导入后直接加载 routes 数组里
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入子路由规则模块
import Layout from '@/layout/index.vue'
// 布局路由模块
import organs from '@/router/organ/organ.js'
// 主页子路由模块
import home from '@/router/home/home'
// 登陆主路由模块
import Login from '@/components/login.vue'
import sysSet from '@/router/sysSet/sysSet'
//考勤模块路由
import attendances from '@/router/attendances/attendances'
import imports from '@/router/attendances/imports'
import historys from '@/router/attendances/historys'
import isMonths from '@/router/attendances/isMonths'
//工资模块路由
import salarys from '@/router/salarys/salarys'
<<<<<<< HEAD
import salaryset from '@/router/salarys/salaryset'
import report from '@/router/salarys/report'
import details from '@/router/salarys/details'

import store from "@/store/index"
=======
import store from '@/store/index'
>>>>>>> 188e034d5da35e3a6fb435255da504428ba20115
// 公司设置路由
import companySettings from '@/router/CompanySettings/CompanySettings'
import salaryset from '@/router/salarys/salaryset'
import report from '@/router/salarys/report'
import employee from '@/router/CompanySettings/Employee'
import imp from '@/router/CompanySettings/Imp'
import golook from '@/router/CompanySettings/golook'
// 导入审批模块
import Approval from '@/router/Approval/Approval'

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {path:'/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/layout',component:Layout,redirect:'/layout/home',children:[
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
    employee,
    organs,
    imp,
    golook
  ]}
=======
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
      salarys,
      companySettings,
      sysSet,
      employee,
      imports,
      historys,
      isMonths,
      organs,
      imp,
      golook,
      Approval
    ]
  }
>>>>>>> 188e034d5da35e3a6fb435255da504428ba20115
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const arrs = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
  if (arrs.indexOf(to.path) === -1) {
    if (store.getters.token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
