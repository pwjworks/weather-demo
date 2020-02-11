/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:49
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-12 01:28:06
 */
export default {
  updateSidebarActive (state, active) {
    state.sidebarActive = active
  },
  addCity (state, city) {
    if (state.city.indexOf(city) === -1) {
      state.city.push(city)
    }
  },
  addSubscriptionCity (state, subscription) {
    state.subscriptionCity.push(subscription)
  }
}
