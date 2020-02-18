/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:22
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-19 00:11:15
 */
// const axios = require('axios')
const Router = require('koa-router')

const apiRouter = new Router({
  prefix: '/api'
})

apiRouter.get('/IPLocation', async (ctx) => {
  const keys = Object.keys(ctx.req.headers)
  console.log('req:' + keys)
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
