import request from '@/utils/request'

export const getApplication = data => request({
  url:'/api//user/process/startProcess',
  method:'POST',
  data
})