export default {
  path: 'employee',
  component: () => import('@/view/Employee/EmployeeIndex.vue'),
  name: 'employee',
  meta: {
    title: '员工'
  }
  // redirect:'Employee/index',
}
