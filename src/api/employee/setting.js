import request from '@/utils/requeest'

export function getRoleList(params) {
  return request({
    url:'/api/sys/role',
    params
  })
}

// 删除
export function delRole(id) {
  return request({
    url:`/api/sys/role/${id}`,
    method:'delete'
  })
}

export function getRoletail(id) {
  return request({
    url:`/api/sys/role/${id}`,
  })
}

export function upRoletail(data) {
  return request({
    url:`/api/sys/role/${data.id}`,
    method:'delete',
    method:'put',
    data
  })
}


export function addRole(data) {
  return request({
    url:'/api/sys/role',
    method:'post',
    data
  })
}