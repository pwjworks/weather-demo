/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:29
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:47:29
 */
<template>
  <div class="temperature-content">
    <div class="temperature">
      <p>{{tem}}°</p>
    </div>
    <div class="wh-container">
      <div class="wind-meter">
        <p class="info">pm2.5</p>
        <p class="info">{{pm2_5}}</p>
      </div>
      <div class="humidity">
        <p class="info">humidity</p>
        <p class="info">{{humidity}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getLiveWeather } from 'api/getLiveWeather'
import { ERR_OK } from 'api/config'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      tem: undefined,
      humidity: '',
      pm2_5: undefined
    }
  },
  methods: {
    __getLiveWeather: function (city) {
      getLiveWeather(city).then((res) => {
        if (res.data.err_code === ERR_OK) {
          this.humidity = res.data.weather.humidity
          this.tem = res.data.weather.tem
          this.pm2_5 = res.data.weather.air_pm25
          this.updateTemWeather({
            liveTem: res.data.weather.tem,
            LiveWeather: res.data.weather.weather
          })
        }
      })
    },
    ...mapMutations(['updateTemWeather'])
  },
  computed: {
    ...mapState({
      city: state => state.city,
      liveWeather: state => state.liveWeather
    })
  },
  watch: {
    city: function (newCity, oldCity) {
      var index = newCity.indexOf('市')
      this.__getLiveWeather(newCity.substr(0, index === -1 ? newCity.length : index))
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variable.styl';
  .temperature-content
    display flex
    flex-direction column
    align-content center
    justify-content center
    flex-wrap wrap
    position absolute
    left 7%
    width 300px
    height 250px
  .temperature
    width 300px
    height 100px
    p
      font-size $font-size-large-x
  .wh-container
    display flex
    flex-direction row
    height 80px
    margin-top 30px
  .wind-meter
    display flex
    justify-content center
    flex-direction column
    width 50%
  .humidity
    display flex
    justify-content center
    flex-direction column
    width 50%
    border-left  2px solid white
  .info
    font-size 20px
    &:before
      display inline-block
      content ""
      height 100%
      vertical-align middle
</style>
