import request from '@/utils/request'

export const getLogin = data => request({
  url: '/api/sys/login',
  method: 'POST',
  data
})