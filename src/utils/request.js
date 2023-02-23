import axios from 'axios'
import store from "@/store"
axios.defaults.baseURL = "/api"


// 请求拦截器
axios.interceptors.request.use(config => {
    // config 是请求的配置信息
    // 注入token
    // if (store.getters.token) {
    //   // 只有在有token的情况下 才有必要去检查时间戳是否超时
    //   if (IsCheckTimeOut()) {
    //     // 如果它为true表示 过期了
    //     // token没用了 因为超时了
    //     store.dispatch('user/logout') // 登出操作
    //     // 跳转到登录页
    //     router.push('/login')
    //     return Promise.reject(new Error('token超时了'))
    //   }
    console.log(store.getters.token);
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
    // }
    return config // 必须要返回的
}, error => {
    return Promise.reject(error)
})


export default axios