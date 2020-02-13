/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:12
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-14 01:36:57
 */

<template>
  <div class="inner-container">
    <div class="subscription-container">
      <div class="sub-panel">
        <div class="search">
          <p>SEARCH CITIES</p>
        </div>
        <div class="select-container">
          <div class="select">
            <p>Province</p>
            <select v-model="selectedProv" name="province">
              <option disabled value>省份</option>
              <option
                v-for="(prov,index) in provinceList"
                :value="prov"
                :key="index"
                class="prov"
              >{{prov}}</option>
            </select>
          </div>
          <div class="select">
            <p>City</p>
            <select v-model="selectedCity" name="city">
              <option disabled value>市</option>
              <option
                v-for="(city,index) in cityMap.get(selectedProv)"
                :value="city"
                :key="index"
                class="prov_city"
              >{{city}}</option>
            </select>
          </div>
        </div>
        <div class="select-btn">
          <button id="select-confirm" @click="add_sub()">ADD CITY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProvinceList from 'utils/getProvinceList'
import CityMap from 'utils/getCityList'
import { mapState, mapMutations } from 'vuex'
import { getWeatherForecast } from 'api/getWeatherForecast'
import { getLiveWeather } from 'api/getLiveWeather'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      selectedProv: '',
      selectedCity: '',
      cityMap: CityMap,
      provinceList: ProvinceList,
      weekWeather: []
    }
  },
  computed: {
    ...mapState({
      // 订阅过的城市
      sub_city: state => state.city,
      subscriptionCity: state => state.subscriptionCity
    })
  },
  methods: {
    // 获得实时天气和天气预报
    getLiveWeather__WeatherForecast: function (city) {
      Promise.all([getWeatherForecast(city), getLiveWeather(city)]).then(
        res => {
          console.log(res)
          if (
            res[0].data.err_code === ERR_OK &&
            res[1].data.err_code === ERR_OK
          ) {
            this.weekWeather = res[0].data.weather
            // 添加订阅城市
            this.addSubscriptionCity({
              city: this.selectedCity,
              max: this.weekWeather[1].tem1,
              min: this.weekWeather[1].tem2,
              liveTem: res[1].data.weather.tem,
              weather: this.weekWeather[1].wea,
              wea_img: this.weekWeather[1].wea_img
            })
            // TODO 添加通知
          } else {
            // TODO 添加通知
          }
        }
      ).catch((value) => {
        console.log(value)
      })
    },
    add_sub: function () {
      if (this.selectedCity !== '') {
        if (this.sub_city.indexOf(this.selectedCity) === -1) {
          this.addCity(this.selectedCity)
          this.getLiveWeather__WeatherForecast(this.selectedCity)
        } else {
          // TODO 添加通知
        }
      } else {
        // TODO 添加通知
      }
    },
    ...mapMutations(['addSubscriptionCity', 'addCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.inner-container
  position relative
  overflow-x hidden
  overflow-y hidden
  height 100%
  width 100%
.subscription-container
  overflow-y auto
  position absolute
  justify-content center
  align-items center
  display flex
  flex-wrap wrap
  background linear-gradient(rgb(97, 162, 253), rgb(94, 231, 224))
  width 100%
  height 100%
.sub-panel
  display flex
  align-items center
  flex-direction column
  box-shadow 0 0 0.25rem $color-font-forecast
  padding 3rem
  border-radius 1rem
  width 28rem
  height 36rem
  background white
.search
  p
    font-weight bold
    color $color-font-forecast
    font-size $font-size-large
.select-container
  display flex
  flex-direction column
  align-items center
  width 25rem
  height 30rem
.select
  margin 1rem
  width 25rem
  height 10rem
  select
    box-shadow 0 0 0.25rem $color-font-forecast
    font-size $font-size-medium-l
    border-radius 3rem
    padding 0.5rem
    width 100%
    height 3rem
  p
    font-size $font-size-medium
    margin 2rem
//TODO 更改样式
.select-btn
  width 10rem
  button
    font-size $font-size-medium
    color $color-font-forecast
    width 100%
    height 3rem
    border-radius 2rem
a
  text-decoration none
</style>
