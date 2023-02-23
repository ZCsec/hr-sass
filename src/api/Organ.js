import request from "@/utils/request"

export const departmentList = () => request({
    url: "/api/company/department",
    method: "get"
})