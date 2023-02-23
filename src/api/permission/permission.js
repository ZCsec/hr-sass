import request from '@/utils/request'

//获取权限
export const getPermissionList = params => request({
  url:`/sys/permission`,
  params
})
