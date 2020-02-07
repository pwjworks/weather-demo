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
