/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:40
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-13 01:21:37
 */
import MainPanel from 'components/MainPanel/MainPanel.vue'
import Login from 'components/Login/Login.vue'
import AddCityPanel from 'components/AddCityPanel/AddCityPanel.vue'
import Subscription from 'components/Subscription/Subscription.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: MainPanel
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/addcity',
    component: AddCityPanel
  },
  {
    path: '/subscription',
    component: Subscription
  }
]
