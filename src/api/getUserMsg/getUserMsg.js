import request from '@/utils/request'

export const getUserData = data => request({
  url:'/sys/profile',
  method:'POST',
  data
})