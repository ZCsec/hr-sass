import request from '@/utils/request'
//获取部门列表
export const getDepartment = params => request({
  url:' /company/department',
  method:'get',
  params
})

//获取考勤数据列表
export const getAttendance = params => request({
  url:' /attendances',
  method:'get',
  params
})