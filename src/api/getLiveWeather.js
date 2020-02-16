/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:45:48
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 04:17:48
 */
// import jsonp from 'utils/jsonp'
// import { commonParams, options } from './config'
import handleRequest from 'utils/handleRequest'

const axios = require('axios')
/**
 *获得实时天气（使用jsonp）
 *
 * @export
 * @param {*} city
 * @returns 请求的promise对象
 */
// export function getLiveWeather (city) {
//   const url = 'https://hn216.api.yesapi.cn/'
//   const data = Object.assign({}, commonParams, {
//     city: city,
//     s: 'App.Common_Weather.LiveWeather'
//   })
//   return jsonp(url, data, options)
// }

/**
 * 获得实时天气（ 使用jsonp）
 *
 * @export city
 * @returns
 */
export function getLiveWeather (city) {
  return handleRequest(axios.get(`/api/getLiveWeather?city=${city}`))
}
