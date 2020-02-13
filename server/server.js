const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const pageRouter = require('./router/dev-ssr')
const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

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

// 静态资源处理
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', {
      root: path.join(__dirname, '../')
    })
  } else {
    await next()
  }
})

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

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
