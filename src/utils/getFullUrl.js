import getMD5Sign from 'utils/getMD5Sign'

function param (data) {
  let url = ''
  let key = ''
  for (var k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
    key += `${value}`
  }
  url += `&sign=${getMD5Sign(key)}`
  console.log(url)
  return url ? url.substr(1) : ''
}

export default function getFullUrl (url, data) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return url
}
