/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:22
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-18 23:19:52
 */
// const axios = require('axios')
const Router = require('koa-router')

const apiRouter = new Router({
  prefix: '/api'
})

apiRouter.get('/IPLocation', async (ctx) => {
  console.log('forward:' + ctx.$proxy_add_x_forwarded_for)
  console.log('remote addr:' + ctx.$remote_addr)
  console.log('host:' + ctx.$http_host)
  const resp = await ctx.handler.getWeatherAPIResp({
    app_key: 'F3A4E792DCFE446D889CB97357310B1B',
    s: 'App.Open_Baidu.LocationIP'
  })
  if (ctx.city === '' && resp.data.content.address_detail.city !== '') {
    ctx.city = resp.data.content.address_detail.city
  }
  ctx.body = resp
}).get('/getLiveWeather', async (ctx) => {
  const resp = await ctx.handler.getWeatherAPIResp({
    app_key: 'F3A4E792DCFE446D889CB97357310B1B',
    city: ctx.city,
    s: 'App.Common_Weather.LiveWeather'
  })
  ctx.body = resp
}).get('/getWeatherForecast', async (ctx) => {
  const resp = await ctx.handler.getWeatherAPIResp({
    app_key: 'F3A4E792DCFE446D889CB97357310B1B',
    city: ctx.city,
    s: 'App.Common_Weather.WeekWeather'
  })
  ctx.body = resp
})

module.exports = apiRouter
