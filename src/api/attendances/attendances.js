import request from '@/utils/request'

//获取考勤数据列表
export const getAttendancesList = params => request({
  url:'/api/attendances',
  method:'get',
  params
})

//获取月份报表数据
export const getRepotsList =params=>request({
  url:'/api/attendances/reports?atteDate=202303',
  methods:'get',
  params
})