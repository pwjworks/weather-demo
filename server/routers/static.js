/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:44
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 01:10:28
 */
const Router = require('koa-router')
const sent = require('koa-send')
const staticRouter = new Router({
  prefix: '/public'
})

staticRouter.get('*', async ctx => {
  await sent(ctx, ctx.path)
})

module.exports = staticRouter
