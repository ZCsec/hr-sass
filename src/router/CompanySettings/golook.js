export default {
  path:'detail/:id',
  component:() =>import('@/view/Employee/detail.vue'),
  name:'detail',
  // redirect:'Employee/index',
  children:[

  ]
}
