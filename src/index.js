import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount(root)
