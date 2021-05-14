const OSS = require('ali-oss')
const fs = require('fs')
const path = require('path')
const cdnConfig = require('../app.config.js')
const {
  region,
  bucket,
  accessKeyId,
  accessKeySecret
} = cdnConfig.AliOSS
const client = new OSS({
  region,
  bucket,
  accessKeyId,
  accessKeySecret
})
async function doUpload(objectName, localFile) {
  try {
    const result = await client.put(objectName, localFile)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}
const publicPath = path.join(__dirname, '../public')
const uploadAll = (dir, prefix) => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const key = prefix ? `${prefix}/${file}` : file
    if (fs.lstatSync(filePath).isDirectory()) {
      uploadAll(filePath, key)
    } else {
      doUpload(key, filePath)
    }
  })
}

uploadAll(publicPath)
