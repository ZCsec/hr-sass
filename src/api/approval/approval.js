import request from '@/utils/request'

export const getProcess = (data) =>
  request({
    url: ' /api/user/process/instance/1/10',
    method: 'PUT',
    data
  })
