import request from '@/utils/request'

//获取薪资列表
export const getSalarysList = data => request({
  url: '/api/salarys/list',
  method: 'post',
  data
})

//获取员工薪资  //调薪
export function getSalaryDetail(params) {
  return request({
    url: `/api/salarys/modify/${params.userId}`,
    method:'get',
    params
  })
}

//定薪
export function setSalarys(userId){
  request({
    url:`/api/salarys/init/${userId}`,
    method:'post'
  })
}

//员工详情
export const getEmployeetDetail =params=>({
  url: `/api/sys/user/${params.id}`,
  method:'get',
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