import request from '@/utils/request'

//获取社保详情
export function getSocialList(data) {
    return request({
        url: '/api/social_securitys/list',
        method: 'post',
        data
    })
}

export function getSettings() {
    return request({
        url: '/api/social_securitys/settings'
    })
}

//历史归档列表
export function getArchivingList(data) {
    return request({
        url: `/api/social_securitys/historys/${data.year}/list`,
        method:"get",
        data
    })
}

//2020.01 -->社保报表
export function getArchivingCont(params) {
    return request({
        url: `/api/social_securitys/historys/${params.month}`,
        params
    })
}


//月报表
export function getYearsMonth(yearMonth) {
    return request({
      url: `/api/social_securitys/historys/${yearMonth}`,
      method:"get"
    })
}


