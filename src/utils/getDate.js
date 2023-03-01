export function getDate(time) {
  var date = new Date(time)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = date.getDate()
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}

export function getTime(time) {
  var date = new Date(time)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = date.getDate()
  d = d < 10 ? '0' + d : d
  var h = date.getHours()
  h = h < 10 ? '0' + h : h
  var minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var s = date.getSeconds()
  s = s < 10 ? '0' + s : s
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s
}
