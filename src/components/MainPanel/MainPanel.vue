/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:10
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-12 01:25:12
 */
<template>
  <div class="container">
    <div class="weather-card">
      <div class="weather-info">
        <temperature-panel :tem="tem" :humidity="humidity" :pm2_5="pm2_5"></temperature-panel>
        <location-panel :city="city" :liveWeather="liveWeather"></location-panel>
      </div>
      <div class="forcast-info">
        <forecast-panel :weekWeather="weekWeather"></forecast-panel>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TemperaturePanel from 'components/TemperaturePanel/TemperaturePanel.vue'
import LocationPanel from 'components/LocationPanel/LocationPanel.vue'
import ForecastPanel from 'components/ForecastPanel/ForecastPanel.vue'
import { mapMutations, mapState } from 'vuex'
import { getWeatherForecast } from 'api/getWeatherForecast'
import { getIPLocation } from 'api/getIPLocation'
import { getLiveWeather } from 'api/getLiveWeather'
import { ERR_OK, NUM_RETRIES } from 'api/config'

export default {
  components: {
    TemperaturePanel,
    LocationPanel,
    ForecastPanel
  },
  data () {
    return {
      city: '',
      liveWeather: '',
      liveTem: '',
      humidity: undefined,
      tem: undefined,
      pm2_5: undefined,
      weekWeather: []
    }
  },
  created () {
    // 结点被创建时获取数据
    this.__getWeatherData()
  },
  computed: {
    ...mapState({
      subscriptionCity: state => state.subscriptionCity
    })
  },
  methods: {
    // 获得实时天气和天气预报
    getLiveWeather__WeatherForecast: function (city) {
      Promise.all([getWeatherForecast(city), getLiveWeather(city)]).then((res) => {
        // 天气预报结果
        if (res[0].data.err_code === ERR_OK) {
          this.weekWeather = res[0].data.weather
        }
        // 实时天气结果
        if (res[1].data.err_code === ERR_OK) {
          this.humidity = res[1].data.weather.humidity
          this.tem = res[1].data.weather.tem
          this.pm2_5 = res[1].data.weather.air_pm25
          this.liveTem = res[1].data.weather.tem
          this.liveWeather = res[1].data.weather.weather
        }
        // 将数据添加到订阅数组
        this.addSubscriptionCity({
          city: this.city,
          max: this.weekWeather[0].tem1,
          min: this.weekWeather[0].tem2,
          liveTem: res[1].data.weather.tem,
          weather: this.weekWeather[0].wea,
          wea_img: this.weekWeather[0].wea_img
        })
      })
    },
    // 取得数据
    getWeatherData: function () {
      getIPLocation().then(res => {
        if (res.data.err_code === ERR_OK) {
          this.city = res.data.content.address_detail.city
        }
        const index = this.city.indexOf('市')
        const _city = this.city.substr(
          0,
          index === -1 ? this.city.length : index
        )
        this.getLiveWeather__WeatherForecast(_city)
      })
    },
    __getWeatherData: function () {
      let i
      for (i = 0; i < NUM_RETRIES; ++i) {
        try {
          this.getWeatherData()
          break
        } catch (err) {
          // TODO 添加通知
        }
      }
    },
    ...mapMutations(['addSubscriptionCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.container
  display flex
  align-items center
  justify-content center
  background-image linear-gradient(rgb(255, 213, 159), rgb(255, 171, 159))
  width 100%
  height 100%
.weather-card
  position absolute
  width 62.5rem
  height 42.5rem
  box-shadow 0 0 1.25rem $color-shadow-grey
  background white
  border-radius 1.5rem
.weather-info
  display flex
  flex-direction row
  align-items center
  justify-content space-around
  width 100%
  height 55%
  box-shadow 0px 0.125rem 1rem $color-shadow-grey
  border-radius 1.5rem 1.5rem 0 0
  background linear-gradient(rgb(102, 102, 173), rgb(255, 186, 186))
  color white
.forcast-info
  display flex
  align-items center
  padding-left 2.25rem
  padding-right 2.25rem
  height 45%
  border-radius 0 0 1.5rem 1.5rem
</style>
