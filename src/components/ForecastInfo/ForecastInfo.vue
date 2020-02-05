<template>
  <div class="forecast">
    <div class="forecast-date">
      <p>{{weekdayEN}}</p>
    </div>
    <div class="forecast-icon">
      <embed :src="imgUrl" type="image/svg+xml" />
    </div>
    <div class="tem-container">
      <p class="tem">{{tem}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getWeekDayEnName } from 'utils/getDateName'
export default {
  props: {
    forecastObj: Object,
    max: String,
    min: String,
    tem: String,
    weekday: String,
    wea_img: String
  },
  data () {
    return {
      weekdayEN: '',
      imgUrl: ''
    }
  },
  watch: {
    weekday: {
      handler: function (newWeekday, oldWeekday) {
        this.weekdayEN = getWeekDayEnName(newWeekday)
      },
      immediate: true
    },
    wea_img: {
      handler: function (newUrl, oldUrl) {
        this.imgUrl = 'src/assets/icons/weather/' + this.wea_img + '.svg'
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variable.styl';
  .forecast-date
    margin-bottom 30px
    p
      letter-spacing 7px
      font-size $font-size-medium-x
      font-weight bold
      color $color-font-forecast
  .tem-container
    margin-top 30px
  .tem
    font-size $font-size-medium
    color $color-font-forecast
</style>
