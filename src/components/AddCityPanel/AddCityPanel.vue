/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:12
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-19 00:44:05
 */

<template>
  <div class="subscription-container">
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
          <p>MAIN</p>
        </div>
      </transition>
    </router-link>
    <transition name="fade">
      <div v-if="show" class="panel">
        <div class="search-form-container">
          <div class="search-text">
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
            <button @click="add_sub()">ADD CITY</button>
          </div>
        </div>
        <div class="welcome">
          <transition name="slide-fade-x">
            <h1 v-if="textShow">WECOME BACK</h1>
          </transition>
          <transition name="slide-fade-x-slow">
            <hr v-if="textShow" />
          </transition>
        </div>
      </div>
    </transition>
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
      textShow: false,
      show: false,
      selectedProv: '',
      selectedCity: '',
      cityMap: CityMap,
      provinceList: ProvinceList,
      weekWeather: [],
      arrowShow: false
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
      Promise.all([getWeatherForecast(city), getLiveWeather(city)])
        .then(res => {
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
            this.$notify({
              content: 'Added successfully',
              btn: 'close'
            })
          } else {
            this.$notify({
              content: 'please try later.',
              btn: 'close'
            })
          }
        })
        .catch(value => {
          console.log(value)
        })
    },
    add_sub: function () {
      if (this.selectedCity !== '') {
        if (this.sub_city.indexOf(this.selectedCity) === -1) {
          this.addCity(this.selectedCity)
          this.getLiveWeather__WeatherForecast(this.selectedCity)
        } else {
          this.$notify({
            content: 'You have aleady subscribe this city.',
            btn: 'close'
          })
        }
      } else {
        this.$notify({
          content: 'Please select a city.',
          btn: 'close'
        })
      }
    },
    ...mapMutations(['addSubscriptionCity', 'addCity'])
  },
  mounted () {
    this.show = true
    setTimeout(() => {
      this.textShow = true
      this.arrowShow = true
    }, 500)
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.subscription-container
  height 100%
  width 100%
  display flex
  justify-content center
  align-items center
  background linear-gradient(rgb(97, 162, 253), rgb(94, 231, 224))
  width 100%
  height 100%
.panel
  display flex
  flex-direction row
  align-items center
  box-shadow 0 0 0.25rem $color-font-forecast
  border-radius 1rem
  width 62rem
  height 42rem
  background white
  @media screen and (max-width: 768px)
    width 100%
    height 90%
    flex-direction column
.search-text
  margin-top 4rem
  font-size $font-size-medium
  font-weight bold
  color $color-font-forecast
.welcome
  background url('~assets/images/background.png')
  background-size cover
  border-radius 0 1rem 1rem 0
  height 100%
  width 60%
  @media screen and (max-width: 768px)
    display none
  h1
    position relative
    color white
    top 60%
    left 10%
  hr
    width 8rem
    height 0.5rem
    outline 0
    border none
    background white
    position relative
    top 65%
    left 8%
.search-form-container
  display flex
  flex-direction column
  align-items center
  border-radius 1rem 0 0 1rem
  height 100%
  width 40%
  @media screen and (max-width: 768px)
    width 100%
.select-container
  display flex
  flex-direction column
  align-items center
  margin-top 5rem
  width 23rem
  height 15rem
  select
    font-size $font-size-small
    width 15rem
    height 3.25rem
    margin 2rem
    padding 0.75rem
    padding-left 2rem
    border-radius 2rem
    border none
    box-shadow 0 0 0.5rem $color-font-forecast
.select-btn
  width 10rem
  margin-top 5rem
  button
    font-size $font-size-medium-l
    color $color-font-forecast
    width 100%
    height 3rem
    background $color-font-forecast
    border-radius 2rem
    border none
    box-shadow 0 0 0 $color-font-forecast
    cursor pointer
    color white
    transition all 0.35s linear
    &:hover
      opacity 0.8
.arrow-icon
  opacity 0.8
  position absolute
  left 3rem
  width 4rem
  height 4rem
  @media screen and (max-width: 768px)
    position fixed
    width 3rem
    height 3rem
    top 50%
    left 10%
  p
    margin-top 0.5rem
    color white
    @media screen and (max-width: 768px)
      color black
a
  text-decoration none
</style>
