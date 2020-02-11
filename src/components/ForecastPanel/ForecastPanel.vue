/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:34
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-12 00:55:38
 */
<template>
  <div class="panel">
    <ForecastInfo v-for="(weather,index) in weekWeather"
    :weekday='weather.week'
    :wea_img='weather.wea_img'
    :tem='weather.tem'
    :key="index"
    ></ForecastInfo>
  </div>
</template>

<script type="text/ecmascript-6">
import ForecastInfo from 'components/ForecastInfo/ForecastInfo.vue'

export default {
  components: {
    ForecastInfo
  },
  props: {
    weekWeather: Array
  }
}
</script>

<style lang="stylus" scoped>
.panel {
  display flex
  flex-direction row
  align-items center
  justify-content center
  width 100%
  height 100%
}

.forecast
  display flex
  align-items center
  justify-content center
  flex-direction column
  height 100%
  width 100%
.forecast-date
  margin-bottom 1.25rem
.forecast-temperature
  display flex
  align-content center
  flex-direction row
</style>
