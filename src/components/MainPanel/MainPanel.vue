/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:10
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-08 23:33:25
 */
<template>
  <div class="container">
    <div class="weather-card">
      <div class="weather-info">
          <temperature-panel></temperature-panel>
          <location-panel></location-panel>
      </div>
      <div class="forcast-info">
        <forecast-panel></forecast-panel>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TemperaturePanel from 'components/TemperaturePanel/TemperaturePanel.vue'
import LocationPanel from 'components/LocationPanel/LocationPanel.vue'
import ForecastPanel from 'components/ForecastPanel/ForecastPanel.vue'

export default {
  components: {
    TemperaturePanel,
    LocationPanel,
    ForecastPanel
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl';
  .container
    display flex
    align-items center
    justify-content center
    background-image linear-gradient(rgb(255,213,159), rgb(255,171,159))
    width 100%
    height 100%
  .weather-card
    position absolute
    width 62.5rem
    height 42.5rem
    box-shadow 0 0 1.25rem $color-shadow-grey
    background white
    border-radius 1.5rem
  .weather-info
    display flex
    flex-direction row
    align-items center
    justify-content space-around
    width 100%
    height 55%
    box-shadow 0px 0.125rem 1rem $color-shadow-grey
    border-radius 1.5rem 1.5rem 0 0
    background linear-gradient(rgb(102,102,173), rgb(255,186,186))
    color white
  .forcast-info
    display flex
    align-items center
    padding-left 2.25rem
    padding-right 2.25rem
    height 45%
    border-radius 0 0 1.5rem 1.5rem
</style>
