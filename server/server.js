/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:52
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 22:24:02
 */
const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const staticRouter = require('./routers/static')
const apiRouter = require('./routers/api')
const isDev = process.env.NODE_ENV === 'development'
const createHandler = require('./routers/api-handler')
const config = require('../app.config')

const handler = createHandler(config.app_secret)
const app = new Koa()
app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})

// favicon.ico静态资源处理
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', {
      root: path.join(__dirname, '../')
    })
  } else {
    await next()
  }
})

// 静态资源处理
app.use(async (ctx, next) => {
  if (ctx.path.search('/src/assets/icons/weather/') !== -1) {
    ctx.headers['Content-Type'] = 'text/xml'
    await send(ctx, ctx.path, {
      root: path.join(__dirname, '../')
    })
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  ctx.handler = handler
  ctx.city = ctx.query.city === undefined ? '' : decodeURI(ctx.query.city)
  await next()
})
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  pageRouter = require('./routers/ssr')
}
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
