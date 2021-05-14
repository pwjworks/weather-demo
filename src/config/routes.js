/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:40
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-19 00:25:58
 */
import MainPanel from 'components/MainPanel/MainPanel.vue'
import AddCityPanel from 'components/AddCityPanel/AddCityPanel.vue'
import Subscription from 'components/Subscription/Subscription.vue'

export default [
  {
    path: '/',
    redirect: '/public'
  },
  {
    path: '/public',
    component: MainPanel
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
