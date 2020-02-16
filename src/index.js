/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:40
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 16:13:43
 */
import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import createStore from './store/store'
import createRouter from './config/router'
import VueRouter from 'vue-router'
import Notification from './components/notification'
import 'assets/styles/index.styl'

Vue.use(vuex)
Vue.use(VueRouter)
Vue.use(Notification)

const router = createRouter()
const store = createStore()
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
