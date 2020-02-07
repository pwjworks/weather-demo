/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:49
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:47:49
 */
export default {
  updateCity (state, city) {
    state.city = city
  },
  updateTemWeather (state, { liveTem, LiveWeather }) {
    state.liveTem = liveTem
    state.liveWeather = LiveWeather
  },
  updateSidebarActive (state, active) {
    state.sidebarActive = active
  }
}
