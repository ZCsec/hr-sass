// 根据自己分工任务在api目录下创建不同的接口模块(文件夹)
// 在api/index.js 下 统一导入 并添加API后缀统一导出

// 导入示例 import {模块A,模块B} from '@/api/模块文件夹/模块文件'
// 导出示例 export const 模块A + 'API' = 模块A

// 在模块文件中 统一导入 '@/utils/request.js' 作为axios请求包 
// 文件内已经设置好接口的基础地址，调用时直接调用接口地址

//登录接口
import { getLogin } from "@/api/login/login";

//社保
import { getSocialList,getSettings,getArchivingCont,getArchivingList,getYearsMonth } from "@/api/social/social"
export const getSocialListAPI = getSocialList;
export const getSettingsAPI = getSettings;
export const getArchivingContAPI = getArchivingCont;
export const getArchivingListAPI = getArchivingList;
export const getYearsMonthAPI = getYearsMonth;


export const getLoginAPI = getLogin;
export const getUserDataAPI = getUserData;
export const departmentListAPI = departmentList

//权限
import { getPermissionList,delPermission,addPermission,updatePermission,getPermissionDetail } from "@/api/permission/permission"
export const getPermissionListAPI = getPermissionList;
export const delPermissionAPI = delPermission;  //删除
export const addPermissionAPI = addPermission;  //添加
export const updatePermissionAPI = updatePermission;  //更改
export const getPermissionDetailAPI = getPermissionDetail;  //获取权限详情

//考勤数据接口
import { getAttendancesList } from "@/api/attendances/attendances";
export const getAttendancesListAPI =getAttendancesList;
//部门接口
import { departmentList } from "@/api/Organ"
// import {getUserData} from '@/api/getUserMsg/getUserMsg'
import {getUserData} from '@/api/home/getUserMsg'
import { getApplication } from '@/api/home/application'
export const getApplicationAPI = getApplication
