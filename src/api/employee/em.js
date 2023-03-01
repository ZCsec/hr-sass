import request from '@/utils/request'


// 员工简单列表
// export function getEmployeeSimple() {
//   return request({
//     url:'/api/sys/user/simple'
//   })
// }
// 员工综合列表
export function GetList(params) {
  return request({
    url:'/api/sys/user',
    params
  })
}