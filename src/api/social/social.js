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

//社保数据归档
export function getArchivingArchive(data){
    return request({
        url:`/api/social_securitys/historys/${data.yearMonth}/archive`,
        method:"post",
        data
    })
}

//获取社保员工详情
export function user(params){
    return request({
        url:`/api/social_securitys/${params.id}`,
        method:"get",
        params
    })
}
//查询参保城市的参保项目
export function citysItem(params){
    return request({
        url:`/api/social_securitys/payment_item/${params.id}`,
        method:"get",
        params
    })
}
