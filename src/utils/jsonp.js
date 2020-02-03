import originJSONP from 'jsonp'
import getFullUrl from 'utils/getFullUrl'

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
