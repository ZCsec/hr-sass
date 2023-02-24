import request from '@/utils/request'
//获取部门列表
export const getDepartment = () => request({
  url: "/api/company/department",
  method: "get"
})

//获取考勤数据列表
export const getAttendance = params => request({
  url:'/api/attendances',
  method:'get',
  params
})