// 根据自己分工任务在api目录下创建不同的接口模块(文件夹)
// 在api/index.js 下 统一导入 并添加API后缀统一导出

// 导入示例 import {模块A,模块B} from '@/api/模块文件夹/模块文件'
// 导出示例 export const 模块A + 'API' = 模块A

// 在模块文件中 统一导入 '@/utils/request.js' 作为axios请求包 
// 文件内已经设置好接口的基础地址，调用时直接调用接口地址

//登录接口
import { getLogin } from "@/api/login/login";
export const getLoginAPI = getLogin

//考勤数据接口
import { getAttendancesList } from "@/api/attendances/attendances";
export const getAttendancesListAPI =getAttendancesList;
//薪资列表接口
import {getSalarysList} from "@/api/salarys/salarys";
export const getSalarysListAPI=getSalarysList
//部门接口
import { departmentList } from "@/api/organ"
// import {getUserData} from '@/api/getUserMsg/getUserMsg'
export const getUserDataAPI = getUserData
export const departmentListAPI = departmentList
import {getUserData} from '@/api/home/getUserMsg'
import { getApplication } from '@/api/home/application'
export const getApplicationAPI = getApplication
