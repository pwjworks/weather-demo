/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:14
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:48:14
 */
import getMD5Sign from 'utils/getMD5Sign'

/**
 *拼接url参数
 *
 * @param {*} data
 * @returns
 */
function param (data) {
  let url = ''
  let key = ''
  for (var k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
    key += `${value}`
  }
  url += `&sign=${getMD5Sign(key)}`
  return url ? url.substr(1) : ''
}

/**
 *返回url（缺少sign参数）
 *
 * @export
 * @param {*} url
 * @param {*} data
 * @returns
 */
export default function getFullUrl (url, data) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return url
}
