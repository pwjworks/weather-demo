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
