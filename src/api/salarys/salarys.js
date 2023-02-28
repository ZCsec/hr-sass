import request from '@/utils/request'

//获取薪资列表
export const getSalarysList = data => request({
  url:'/api/salarys/list',
  method:'post',
  data
})