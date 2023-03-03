import Cookie from 'js-cookie'

// 独一无二的token
const token = 'token'
// 时间戳token
const tokenTime = 'tokenTime'

export function getToken(){
  return Cookie.get(token)
}

export function setToken(value){
  return Cookie.set(token,value)
}

export function removeToken(){
  return Cookie.remove(token)
}

// 时间搓token
export function getTokenTime(){
  return Cookie.get(tokenTime)
}

export function setTokenTime(){
  return Cookie.set(tokenTime,Date.now())
}

export function removeTokenTime(){
  return Cookie.remove(tokenTime)
}