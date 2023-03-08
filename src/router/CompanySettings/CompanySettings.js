export default {
  path: 'companySettings',
  component: () => import('@/view/CompanySettings/CompanySettings.vue'),
  name: 'CompanySettings',
  redirect: 'companySettings/role',
  children: [
    {
      path: 'role',
      name: 'role',
      hidden: true,
      component: () => import('@/view/CompanySettings/RoleManagement.vue'),
      meta: {
        title: '公司设置'
      }
    },
    {
      path: 'set',
      name: 'role',
      component: () => import('@/view/CompanySettings/CompanyInformation.vue'),
      meta: {
        title: '员工信息'
      }
    }
  ]
}
