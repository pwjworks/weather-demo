/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:49
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-19 12:48:35
 */
export default {
  updateSidebarActive (state, active) {
    state.sidebarActive = active
  },
  addCity (state, city) {
    state.city.push(city)
  },
  addSubscriptionCity (state, subscription) {
    state.subscriptionCity.push(subscription)
  }
}
