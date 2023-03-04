import request from '@/utils/request'

// 获取个人信息页的用户参数
export const getInfo = (userid) =>
  request({
    url: `/prod-api/employees/${userid}/personalInfo?id=${userid}`,
    method: 'GET'
  })

// 保存个人信息页的用户数据
export const saveInfo = (userid) =>
  request({
    // url: `prod-api/employees/${userid}/personalInfo`,
    url: `prod-api/sys/user/${userid}`,
    method: 'PUT'
  })
