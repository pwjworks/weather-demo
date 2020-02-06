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
