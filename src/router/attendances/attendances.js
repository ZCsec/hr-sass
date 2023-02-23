import Attendances from '@/view/Attendances'

export default{
    path:'attendances',
    component:Attendances,
    children:[
        {
          path:'/attendanceSet',
          name:'attendanceSet',
          component:() =>import('@/view/Attendances/attendanceSet.vue'),
        }
    ]
}                           