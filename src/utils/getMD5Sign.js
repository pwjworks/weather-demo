/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:20
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:48:20
 */
import jsmd5 from 'js-md5'

/**
 *对url参数进行MD5加密，获得sign标签
 *
 * @export
 * @param {*} data
 * @returns
 */
export default function encodeUrl (data) {
  data += process.env.APP_SECRET.toUpperCase()
  return jsmd5(data)
}
