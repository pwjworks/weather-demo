/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:29
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 22:18:28
 */
/*
 * @Author: pwjworks
 * @Date: 2020-02-13 12:24:23
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-13 23:38:50
 */
const Router = require('koa-router')
const axios = require('axios')
const MemoryFS = require('memory-fs')
const fs = require('fs')
const webpack = require('webpack')
const path = require('path')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, status) => {
  if (err) throw err
  status = status.toJson()
  status.errors.forEach(err => console.log(err))
  status.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'Please wait...'
    return
  }
  const ClientManifestResp = await axios.get('http://127.0.0.1:8000/public/vue-ssr-client-manifest.json')
  const clientManifest = ClientManifestResp.data
  const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')

  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })
  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
