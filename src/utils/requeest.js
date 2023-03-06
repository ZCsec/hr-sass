// import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// // create an axios instance
// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   timeout: 5000 // request timeout
// })

// // request interceptor
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// // response interceptor
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//     const res = response.data

//     // if the custom code is not 20000, it is judged as an error.
//     if (res.code !== 20000) {
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         duration: 5 * 1000
//       })

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login
//         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//           confirmButtonText: 'Re-Login',
//           cancelButtonText: 'Cancel',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             location.reload()
//           })
//         })
//       }
//       return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// export default service

// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
import router from '@/router'
const TimeOut = 3600 // 定义一个超时时间
const service = axios.create({
  // 如果执行npm run dev值为/api正确 /api这个代理只是给开发环境配置的代理
  // 如果执行npm run build值为/pro-api
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(
  // config是请求的配置信息
  (config) => {
    // 注入token
    if (store.getters.token) {
      if (IsCheckTimeOut()) {
        // 如果为true表示过期了
        // token 没用了表示因为超时了
        store.dispatch('user/logout')
        // 跳转到登录页
        router.push('/login')
        return Promise.reject(new Error('token超时了'))
      }
      // 如果token存在 注入token
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
) // 请求拦截器

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      Message.error(message) // 提示错误信息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    if (error.response && error.response.data && error.response.code == 10002) {
      // 当错误码等于10002的时候表示后端告诉我们token超时了
      store.dispatch('user/logout')
      // 跳转到登录页
      router.push('/login')
    } else {
      Message.error(error.message) // 提示错误信息
    }
    return Promise.reject(error) // 返回执行错误 让当前的执行链接跳出成功 直接进入 catch
  }
) // 响应拦截器

// 是否超时 (当前时间 - 缓存时间) 是否大于时间差
function IsCheckTimeOut() {
  var currentTime = Date.now() // 当前时间戳
  var timestamp = getTimeStamp() // 缓存时间戳
  return (currentTime - timestamp) / 1000 > TimeOut
}
export default service // 导出axios实例
