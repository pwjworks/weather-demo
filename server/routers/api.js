/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:22
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 03:02:41
 */
// const axios = require('axios')
const Router = require('koa-router')

const apiRouter = new Router({
  prefix: '/api'
})

apiRouter.get('/IPLocation', async (ctx) => {
  const resp = await ctx.handler.getAPIResp({
    s: 'App.Open_Baidu.LocationIP',
    app_key: 'F3A4E792DCFE446D889CB97357310B1B'
  })
  ctx.body = resp
})

module.exports = apiRouter
