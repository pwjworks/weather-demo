/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:27
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-08 19:34:21
 */
<template>
  <div class="forecast">
    <div class="forecast-date">
      <p>{{weekdayEN}}</p>
    </div>
    <div class="forecast-icon-container">
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

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl';
  .forecast-date
    margin-bottom 1.875rem
    p
      letter-spacing .75rem
      font-size $font-size-medium-l
      font-weight bold
      color $color-font-forecast
  .tem-container
    margin-top 1.875rem
  .tem
    font-size $font-size-medium
    color $color-font-forecast
  .forecast-icon-container
    width 4rem
    height 3.75rem
</style>
