<template>
  <div class="temperature-content">
    <div class="temperature">
      <p>{{tem}}°</p>
    </div>
    <div class="wh-container">
      <div class="wind-meter">
        <p class="info">wind</p>
        <p class="info">12km/h</p>
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

export default {
  data () {
    return {
      city: '广州',
      tem: undefined,
      humidity: ''
    }
  },
  created () {
    this.__getLiveWeather(this.city)
  },
  methods: {
    __getLiveWeather: function (city) {
      getLiveWeather(city).then((res) => {
        if (res.data.err_code === ERR_OK) {
          this.tem = res.data.weather.tem
          this.humidity = res.data.weather.humidity
        }
      })
    }
  }
}
</script>

<style lang="stylus">
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
      font-size 100px
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
