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
    url: `/prod-api/salarys/modify/${params.userId}`,
    method: 'get',
    params
  })
}

//定薪
export function setSalarys(userId) {
  request({
    url: `/api/salarys/init/${userId}`,
    method: 'post'
  })
}

//员工详情
export const getEmployeetDetail = params => request({
  url: `/api/sys/user/${params.id}`,
  method: 'get',
  params
})

//保存津贴设置
export const setAllowance = data => request({
  url: '/salarys/settings',
  method: "post",
  data
})

//获取薪资/津贴列表
export function settings(params){
  return request({
    url:'/api/salarys/settings',
    method:'get',
    params
  })
}

//提交计薪/津贴设置列表
export function submitSettings(data){
  return request({
    url:`/api/salarys/settings`,
    method:'post',
    data
  })
}