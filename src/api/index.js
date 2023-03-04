// 根据自己分工任务在api目录下创建不同的接口模块(文件夹)
// 在api/index.js 下 统一导入 并添加API后缀统一导出

// 导入示例 import {模块A,模块B} from '@/api/模块文件夹/模块文件'
// 导出示例 export const 模块A + 'API' = 模块A

// 在模块文件中 统一导入 '@/utils/request.js' 作为axios请求包
// 文件内已经设置好接口的基础地址，调用时直接调用接口地址

//登录接口
import { getLogin } from "@/api/login/login";

//社保
import { getSocialList,getSettings,getArchivingCont,getArchivingList,getYearsMonth,getArchivingArchive } from "@/api/social/social"
export const getSocialListAPI = getSocialList;
export const getSettingsAPI = getSettings;
export const getArchivingContAPI = getArchivingCont;
export const getArchivingListAPI = getArchivingList;
export const getYearsMonthAPI = getYearsMonth;
export const getArchivingArchiveAPI = getArchivingArchive;

//权限
import { getPermissionList,delPermission,addPermission,updatePermission,getPermissionDetail } from "@/api/permission/permission"
export const getPermissionListAPI = getPermissionList;
export const delPermissionAPI = delPermission;  //删除
export const addPermissionAPI = addPermission;  //添加
export const updatePermissionAPI = updatePermission;  //更改
export const getPermissionDetailAPI = getPermissionDetail;  //获取权限详情


import { getApplication } from '@/api/home/application'
import { getAttendancesList, getRepotsList } from '@/api/attendances/attendances'
import { getProcess, getProcessDetail, getProcessRate } from '@/api/approval/approval'
import { getUserData, getUserMsg } from '@/api/home/getUserMsg'
<<<<<<< HEAD
import { departmentList, addDepartment, updateDepartment, deleteDepartment, checkDepartment } from '@/api/organ/organ.js'
import { getSalarysList, getSalaryDetail, importEmployee, setSalarys, getEmployeetDetail } from '@/api/salarys/salarys'
=======
import {departmentList,addDepartment,updateDepartment,deleteDepartment,checkDepartment} from '@/api/organ/Organ.js'
import {getSalarysList,getSalaryDetail,importEmployee} from '@/api/salarys/salarys'
>>>>>>> a6e2dfe2e61cf951b1dfec79117add289d5a5bdb

//月份报表数据接口
//导入
export const importEmployeeAPI = importEmployee
import { getDefinition, getSuspend } from '@/api/approval/securitySetting'
import { getInfo, saveInfo } from '@/api/approval/myInfo'



export const getAttendancesListAPI = getAttendancesList
export const getRepotsListAPI = getRepotsList
export const departmentListAPI = departmentList
export const getApplicationAPI = getApplication
export const getLoginAPI = getLogin
export const getUserDataAPI = getUserData
export const getProcessAPI = getProcess
export const addDepartmentAPI = addDepartment
export const updateDepartmentAPI = updateDepartment
export const deleteDepartmentAPI = deleteDepartment
export const checkDepartmentAPI = checkDepartment
export const getUserMsgAPI = getUserMsg
export const getProcessDetailAPI = getProcessDetail
export const getProcessRateAPI = getProcessRate
export const getSalarysListAPI = getSalarysList
export const getSalaryDetailAPI = getSalaryDetail    //调薪
export const setSalarysAPI = setSalarys
export const getEmployeetDetailAPI = getEmployeetDetail
export const getDefinitionAPI = getDefinition
export const getSuspendAPI = getSuspend
export const getInfoAPI = getInfo
export const saveInfoAPI = saveInfo
