/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:45:56
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 04:21:16
 */
// import jsonp from 'utils/jsonp'
// import { commonParams, options } from './config'
import handleRequest from 'utils/handleRequest'

const axios = require('axios')
/**
 *获得未来一周的天气预报（使用jsonp）
 *
 * @export
 * @param {*} city
 * @returns
 */
// export function getWeatherForecast (city) {
//   const url = 'https://hn216.api.yesapi.cn/'
//   const data = Object.assign({}, commonParams, {
//     city: city,
//     s: 'App.Common_Weather.WeekWeather'
//   })
//   return jsonp(url, data, options)
// }

/**
 * 获得未来一周的天气预报（ 使用ssr）
 *
 * @export
 * @param {*} city
 * @returns
 */
export function getWeatherForecast (city) {
  return handleRequest(axios.get(`/api/getWeatherForecast?city=${city}`))
}
