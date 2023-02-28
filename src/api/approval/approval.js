import request from '@/utils/request'

export const getProcess = (data) =>
  request({
    url: ' /api/user/process/instance/{page}/{size}',
    method: 'PUT',
    data
  })
