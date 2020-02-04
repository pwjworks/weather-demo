import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import createStore from './store/store'

Vue.use(vuex)

const store = createStore()
const root = document.createElement('div')
document.body.appendChild(root)
/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount(root)
