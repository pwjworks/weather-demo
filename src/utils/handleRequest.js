/*
 * @Author: pwjworks
 * @Date: 2020-02-15 03:31:57
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 16:08:10
 */
const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}

export default (request) => {
  return new Promise((resolve, reject) => {
    request.then((resp) => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      } else {
        return resolve(data)
      }
    }).catch((value) => {

    })
  })
}
