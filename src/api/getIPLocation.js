import jsonp from 'utils/jsonp'
import { commonParams, options } from './config'

export function getIPLocation () {
  const url = 'https://hn216.api.yesapi.cn/'
  const data = Object.assign({}, commonParams, {
    s: 'App.Open_Baidu.LocationIP'
  })
  return jsonp(url, data, options)
}
