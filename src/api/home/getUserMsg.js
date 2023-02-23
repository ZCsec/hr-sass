import request from '@/utils/request'

export const getUserData = data => request({
  url:'/api/sys/profile',
  method:'POST',
  data
})