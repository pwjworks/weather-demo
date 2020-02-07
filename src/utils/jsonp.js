import originJSONP from 'jsonp'
import getFullUrl from 'utils/getFullUrl'

/**
 *利用jsonp进行跨域请求
 *
 * @export
 * @param {*} url
 * @param {*} data
 * @param {*} option
 * @returns
 */
export default function jsonp (url, data, option) {
  url = getFullUrl(url, data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
