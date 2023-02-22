// 在router文件夹下创建你自己对应组件的路由规则模块 router/路由规则模块文件夹/路由规则文件
// 导入后直接加载 routes 数组里
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
// 导入子路由规则模块
import home from '@/router/home/home'
import organ from '@/router/organ/organ'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: 'layout' 
  },
  {
    path: '/layout', 
    component: Layout, 
    redirect: '/layout/home',
    children: [
      home,organ
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router