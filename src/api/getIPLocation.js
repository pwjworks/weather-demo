/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:45:30
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 04:13:29
 */
// import jsonp from 'utils/jsonp'
// import { commonParams, options } from './config'
import handleRequest from 'utils/handleRequest'

const axios = require('axios')
/**
 *获得IP地址的物理位置（使用jsonp）
 *
 * @export
 * @returns
 */
// export function getIPLocation () {
//   const url = 'https://hn216.api.yesapi.cn/'
//   const data = Object.assign({}, commonParams, {
//     s: 'App.Open_Baidu.LocationIP'
//   })
//   return jsonp(url, data, options)
// }

/**
 * 获得IP地址的物理位置（ 使用ssr）
 *
 * @export
 * @returns
 */
export function getIPLocation () {
  return handleRequest(axios.get('/api/IPLocation'))
}
