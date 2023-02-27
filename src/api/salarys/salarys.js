import request from '@/utils/request'

//获取考勤数据列表
export const getAttendancesList = params => request({
  url:'/api/company/department',
  method:'get',
  params
})