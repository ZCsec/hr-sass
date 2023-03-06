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

//导入
export function importEmployee(data) {
  return request({
    url: '/api/sys/user/batch',
    method: 'post',
    data
  })
}

//导出
export function reportsList(params) {
  return request({
    url: '/attendances/reports',
    params
  })
}

// 月份归档
export function file(params){
  return request({
     url:"/attendances/archives",
     get:'get',
     params
  })
}
// 新建报表
export function newReports(params){
  return request({
     url:"/attendances/newReports",
     method:"get",
     params
  })
}

// 获取月考勤报表数据
export function getReports(sid){
  return request({
     url:`attendances/reports?atteDate=${sid}`,
     method:'get'
  })
}