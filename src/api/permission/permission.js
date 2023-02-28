import request from '@/utils/request'

// 获取权限
export function getPermissionList(params) {
  return request({
    url: '/api/sys/permission',
    method:"get",
    params
  })
}
// 新增权限
export function addPermission(data) {
  return request({
    url: '/api/sys/permission',
    method: 'post',
    data
  })
}

// 更新权限
export function updatePermission(data) {
  return request({
    url: '/api/sys/permission/${data.id}',
    method: 'put',
    data
  })
}

// 删除权限
export function delPermission(id) {
  return request({
    url: '/api/sys/permission/${id}',
    method: 'delete'
  })
}
// 获取权限详情
export function getPermissionDetail(id) {
  return request({
    url: '/api/sys/permission/${id}'
  })
}

