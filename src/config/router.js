/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:35
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 00:51:01
 */
import Router from 'vue-router'

import routes from './routes'

export default () => new Router({
  routes,
  mode: 'history',
  fallback: true
})
