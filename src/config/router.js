import Router from 'vue-router'

import routes from './routes'

export default () => new Router({
  routes,
  // mode: 'history',
  fallback: true
})
