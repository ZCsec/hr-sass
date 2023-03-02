import request from '@/utils/request'

// 查询所有部门
export const departmentList = () =>
  request({
    url: '/api/company/department',
    method: 'get'
  })

// 增加新的部门
export const addDepartment = (data) =>
  request({
    url: `/prod-api/company/department`,
    method: 'POST',
    data
  })

// 根据ID修改部门详情 待修改
export const updateDepartment = (data) =>
  request({
    url: `/prod-api/company/department/${data.id}`,
    method: 'PUT',
    data
  })

// 根据ID删除部门 待修改
export const deleteDepartment = (obj) =>
  request({
    url: `/prod-api/company/department/${obj.id}`,
    method: 'DELETE',
    obj
  })

// 根据ID查询部门详情
export const checkDepartment = (obj) =>
  request({
    url: `/api/company/department/${obj.id}`,
    method: 'GET',
    obj
  })
