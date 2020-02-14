/*
 * @Author: pwjworks
 * @Date: 2020-02-15 00:43:34
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-15 00:43:34
 */
const ejs = require('ejs')
module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'
  const context = { url: ctx.path }
  try {
    const appString = await renderer.renderToString(context)
    const { title } = context.meta.inject()
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text()
    })
    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
