import jsmd5 from 'js-md5'

export default function encodeUrl (data) {
  data += process.env.APP_SECRET.toUpperCase()
  return jsmd5(data)
}
