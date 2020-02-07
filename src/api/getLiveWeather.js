/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:45:48
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:45:48
 */
import jsonp from 'utils/jsonp'
import { commonParams, options } from './config'

/**
 *获得实时天气
 *
 * @export
 * @param {*} city
 * @returns
 */
export function getLiveWeather (city) {
  const url = 'https://hn216.api.yesapi.cn/'
  const data = Object.assign({}, commonParams, {
    city: city,
    s: 'App.Common_Weather.LiveWeather'
  })
  return jsonp(url, data, options)
}
