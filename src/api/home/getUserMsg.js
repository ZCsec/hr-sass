import request from '@/utils/request'

export const getUserData = (data) =>
  request({
    url: '/api/sys/profile',
    method: 'POST',
    data
  })

export const getUserMsg = (id) =>
  request({
    url: `/prod-api/sys/user/${id}`,
    method: 'GET'
  })
