// 根据自己分工任务在api目录下创建不同的接口模块(文件夹)
// 在api/index.js 下 统一导入 并添加API后缀统一导出

// 导入示例 import {模块A,模块B} from '@/api/模块文件夹/模块文件'
// 导出示例 export const 模块A + 'API' = 模块A

// 在模块文件中 统一导入 '@/utils/request.js' 作为axios请求包 
// 文件内已经设置好接口的基础地址，调用时直接调用接口地址

//登录接口
import { getLogin } from "@/api/login/login";
<<<<<<< HEAD
export const getLoginAPI = getLogin

//部门接口 考勤数据接口
import { getDepartment,getAttendance } from "@/api/attendances/attendances";
export const getDepartmentAPI = getDepartment;
export const getAttendanceAPI =getAttendance;
=======
import { departmentList } from "@/api/Organ"
import {getUserData} from '@/api/getUserMsg/getUserMsg'
export const getLoginAPI = getLogin
export const getUserDataAPI = getUserData
export const departmentListAPI = departmentList
>>>>>>> 2b91f4167771b41bbae41daa358fc95f0034e74c
