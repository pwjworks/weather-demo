/*
 * @Author: pwjworks
 * @Date: 2020-02-15 03:08:51
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-15 03:08:51
 */
const axios = require('axios')
const MD5 = require('js-md5')

const baseURL = 'https://hn216.api.yesapi.cn/'
const request = axios.create({
  baseURL
})

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

// 对axios返回的对象进行处理
const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

module.exports = (appSecret) => {
  /**
   *处理url，添加sign
   *
   * @param {*} data
   * @returns
   */
  function urlHandler (data) {
    let url
    let key
    for (var k in data) {
      const value = data[k] !== undefined ? data[k] : ''
      url += `&${k}=${encodeURIComponent(value)}`
      key += k
    }
    key += appSecret
    url += `&sign=${MD5(key).toUpperCase()}`
    url = url.substr(1)
    url = (url.indexOf('?') < 0 ? '?' : '&') + url
    return url
  }
  return {
    /**
     *根据传入的URL返回JSON结果
     *
     * @param {*} data
     * @returns
     */
    async getAPIResp (data) {
      return handleRequest(await request.get(urlHandler(data)))
    }
  }
}
