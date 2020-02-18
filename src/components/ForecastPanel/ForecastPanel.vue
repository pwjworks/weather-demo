/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:34
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-18 02:51:54
 */
<template>
  <div class="panel">
    <ForecastInfo
      v-for="(weather,index) in weekWeather"
      :weekday="weather.week"
      :wea_img="weather.wea_img"
      :tem="weather.tem"
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
.panel
  display flex
  flex-direction row
  align-items center
  justify-content center
  width 100%
  height 100%
  @media screen and (max-width: 768px)
    flex-wrap wrap
</style>
