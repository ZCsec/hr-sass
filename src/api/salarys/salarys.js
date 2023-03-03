import request from '@/utils/request'

//获取薪资列表
export const getSalarysList = data => request({
  url:'/api/salarys/list',
  method:'post',
  data
})


//获取员工薪资
// export const getSalaryDetail=data=>request({
//     url: `/salarys/modify/${userId}`,
//     method:'post',
//     data
// });
//调薪
export function getSalaryDetail(userId) {
  return request({
    url: `/api/salarys/modify/${userId}`
  })
}
export function changeSalary(data) {
  return request({
    url: `/api/salarys/modify/${data.userId}`,
    method: 'post',
    data
  })
}


export function importEmployee(data) {
  return request({
    url: '/api/sys/user/batch',
    method: 'post',
    data
  })
}