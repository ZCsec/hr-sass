import request from "@/utils/request"

export const departmentList = data => request({
    url: `/company/department`,
    method: "get",
    data
})