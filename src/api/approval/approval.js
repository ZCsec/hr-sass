import request from '@/utils/request'

// 查询所有审批单
export const getProcess = (data) =>
  request({
    url: `/api/user/process/instance/${data.page}/${data.pageSize}`,
    method: 'PUT',
    data
  })

// 查询审批单的详情数据
export const getProcessDetail = (data) =>
  request({
    url: `/prod-api/user/process/instance/${data.id}`,
    method: 'GET'
  })

// 查询审批单审批明细
export const getProcessRate = (data) =>
  request({
    url: `/prod-api/user/process/instance/tasks/${data.id}`,
    method: 'GET'
  })
