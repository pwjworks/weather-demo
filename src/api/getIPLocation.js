/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:45:30
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 00:38:13
 */
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
