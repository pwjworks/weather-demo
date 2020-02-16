/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:27
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 20:48:37
 */
<template>
  <transition name="fade">
    <div  v-if="show" class="forecast">
      <div class="forecast-date">
        <p>{{weekdayEN}}</p>
      </div>
      <div class="forecast-icon-container">
        <embed :src="'./public/resources/icons/weather/' + this.wea_img + '.svg'" type="image/svg+xml" />
      </div>
      <div class="tem-container">
        <p class="tem">{{tem}}</p>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { getWeekDayEnName } from 'utils/getDateName'
export default {
  props: {
    tem: String,
    weekday: String,
    wea_img: String
  },
  data () {
    return {
      weekdayEN: '',
      imgUrl: '',
      show: false
    }
  },
  watch: {
    weekday: {
      handler: function (newWeekday, oldWeekday) {
        this.weekdayEN = getWeekDayEnName(newWeekday)
      },
      immediate: true
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.forecast-date
  margin-bottom 1.875rem
  p
    letter-spacing 0.75rem
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
