import request from '@/utils/request'

// 查询所有的流程定义
export const getDefinition = () =>
  request({
    url: '/prod-api/user/process/definition',
    method: 'GET'
  })

// 设置流程的挂起与激活状态
export const getSuspend = (params) =>
  request({
    url: `/prod-api/user/process/suspend/${params.processKey}`,
    method: 'GET',
    params
  })
