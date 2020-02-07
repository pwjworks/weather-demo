import jsonp from 'utils/jsonp'
import { commonParams, options } from './config'

/**
 *获得IP地址的物理位置
 *
 * @export
 * @returns
 */
export function getIPLocation () {
  const url = 'https://hn216.api.yesapi.cn/'
  const data = Object.assign({}, commonParams, {
    s: 'App.Open_Baidu.LocationIP'
  })
  return jsonp(url, data, options)
}
