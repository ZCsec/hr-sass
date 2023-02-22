import request from '@/utils/request'

export const getLogin = data => request({
  url:'/sys/login',
  method:'POST',
  data
})