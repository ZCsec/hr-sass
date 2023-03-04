// 根据自己分工任务在api目录下创建不同的接口模块(文件夹)
// 在api/index.js 下 统一导入 并添加API后缀统一导出

// 导入示例 import {模块A,模块B} from '@/api/模块文件夹/模块文件'
// 导出示例 export const 模块A + 'API' = 模块A

// 在模块文件中 统一导入 '@/utils/request.js' 作为axios请求包
// 文件内已经设置好接口的基础地址，调用时直接调用接口地址

import { getLogin } from '@/api/login/login'
import { getApplication } from '@/api/home/application'
import { getProcess } from '@/api/approval/approval'
import { getUserData } from '@/api/home/getUserMsg'
import { departmentList } from '@/api/Organ.js'
import { getAttendancesList } from '@/api/attendances/attendances'

//考勤数据接口
//部门接口
export const getAttendancesListAPI = getAttendancesList
export const departmentListAPI = departmentList
export const getApplicationAPI = getApplication
// LLF的接口
export const getLoginAPI = getLogin
export const getUserDataAPI = getUserData
export const getProcessAPI = getProcess

