import jsonp from 'utils/jsonp'
import { commonParams, options } from './config'

/**
 *获得未来一周的天气预报
 *
 * @export
 * @param {*} city
 * @returns
 */
export function getWeatherForecast (city) {
  const url = 'https://hn216.api.yesapi.cn/'
  const data = Object.assign({}, commonParams, {
    city: city,
    s: 'App.Common_Weather.WeekWeather'
  })
  return jsonp(url, data, options)
}
