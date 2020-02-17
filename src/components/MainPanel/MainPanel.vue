/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:10
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 22:09:10
 */
<template>
  <div class="container">
    <router-link to="/subscription">
      <transition name="slide-fade-x-slow">
        <div v-if="arrowShow" class="arrow-icon">
          <svg
            t="1581782785531"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2085"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
          >
            <path
              d="M677.354667 836.608l-291.84-286.549333a53.333333 53.333333 0 0 1-0.704-75.413334l0.704-0.704L677.333333 187.392a53.333333 53.333333 0 0 0-74.709333-76.117333L310.784 397.824l-2.090667 2.090667a160 160 0 0 0 2.090667 226.261333l291.84 286.549333a53.333333 53.333333 0 0 0 74.730667-76.117333z"
              fill="rgb(57,67,122)"
              p-id="2086"
            />
          </svg>
          <p>BACK</p>
        </div>
      </transition>
    </router-link>
    <transition name="fade">
      <div v-show="show" class="weather-card">
        <div class="weather-info">
          <temperature-panel :tem="tem" :humidity="humidity" :pm2_5="pm2_5"></temperature-panel>
          <location-panel :city="city" :liveWeather="liveWeather"></location-panel>
        </div>
        <div class="forcast-info">
          <forecast-panel :weekWeather="weekWeather"></forecast-panel>
        </div>
      </div>
    </transition>
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
      show: false,
      city:
        this.$route.query.city === undefined
          ? ''
          : decodeURI(this.$route.query.city),
      liveWeather: '',
      liveTem: '',
      humidity: undefined,
      tem: undefined,
      pm2_5: undefined,
      weekWeather: [],
      arrowShow: false
    }
  },
  created () {
    // 结点被创建时获取数据
    this.__getWeatherData()
  },
  mounted () {
    this.show = true
    setTimeout(() => {
      this.arrowShow = true
    }, 500)
  },
  computed: {
    ...mapState({
      subscriptionCity: state => state.subscriptionCity,
      // 订阅过的城市
      sub_city: state => state.city
    })
  },
  methods: {
    // 获得实时天气和天气预报
    getLiveWeather__WeatherForecast: function (city) {
      Promise.all([getWeatherForecast(city), getLiveWeather(city)])
        .then(res => {
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
          if (this.sub_city.indexOf(city) === -1) {
            // 防止重复添加
            this.addSubscriptionCity({
              city: city,
              max: this.weekWeather[1].tem1,
              min: this.weekWeather[1].tem2,
              liveTem: res[1].data.weather.tem,
              weather: this.weekWeather[1].wea,
              wea_img: this.weekWeather[1].wea_img
            })
            this.addCity(city)
          }
        })
        .catch(value => {
          console.log(value)
        })
    },
    // 取得天气数据
    getWeatherData: function () {
      if (this.city !== '') {
        const index = this.city.indexOf('市')
        this.getLiveWeather__WeatherForecast(
          this.city.substr(0, index === -1 ? this.city.length : index)
        )
      } else {
        getIPLocation()
          .then(res => {
            if (res.data.err_code === ERR_OK && res.data.content.address_detail.city !== '') {
              this.city = res.data.content.address_detail.city
              const index = this.city.indexOf('市')
              this.getLiveWeather__WeatherForecast(
                this.city.substr(0, index === -1 ? this.city.length : index)
              )
            } else {
              this.$notify({
                content: 'Can\'t get IP location',
                btn: 'close'
              })
            }
          })
          .catch(value => {
            console.log(value)
          })
      }
    },
    __getWeatherData: function () {
      let i
      for (i = 0; i < NUM_RETRIES; ++i) {
        try {
          this.getWeatherData()
          break
        } catch (err) {
          this.$notify({
            content: 'Please try later.',
            btn: 'close'
          })
        }
      }
    },
    ...mapMutations(['addCity', 'addSubscriptionCity'])
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
  box-shadow 0 0 .5rem $color-shadow-grey
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
.arrow-icon
  opacity 0.8
  position absolute
  left 3rem
  width 4rem
  height 4rem
  p
    margin-top 0.5rem
    color white
</style>
