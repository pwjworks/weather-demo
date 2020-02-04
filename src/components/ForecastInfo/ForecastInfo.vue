<template>
  <div class="forecast">
    <div class="forecast-date">
      <p>{{weekdayEN}}</p>
    </div>
    <div class="forecast-icon">
      <embed src="src/assets/icons/weather/Storm.svg" type="image/svg+xml" />
    </div>
    <div class="tem-container">
      <p class="max"><span>Max</span>  {{max}}</p>
      <p class="min"><span>Min</span>  {{min}}</p>
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
    weekday: String,
    wea_img: String
  },
  data () {
    return {
      weekdayEN: ''
    }
  },
  computed: {
  },
  watch: {
    weekday: {
      handler: function (newWeekday, oldWeekday) {
        this.weekdayEN = getWeekDayEnName(newWeekday)
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
      letter-spacing 10px
      font-size $font-size-medium-x
  .tem-container
    margin-top 30px
  .max
    span
      color red
  .min
    span
      color green
</style>
