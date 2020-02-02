<template>
  <div class="container">
    <div class="weather-card">
      <div class="weather-info">
          <TemperaturePanel></TemperaturePanel>
          <LocationPanel></LocationPanel>
      </div>
      <div class="forcast-info">
        <ForecastPanel></ForecastPanel>
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

<style lang="stylus">
@import "~assets/styles/variable.styl";
  .container
    display flex
    align-items center
    justify-content center
    background-image linear-gradient(rgb(203,101,154), rgb(87,94,246))
    width 100%
    height 100%
    z-index 9
  .weather-card
    position absolute
    width 850px
    height 600px
    box-shadow 0 0 15px $color-shadow-grey;
    background white
    border-radius 25px
  .weather-info
    display flex
    flex-direction row
    align-items center
    justify-content space-around
    width 100%
    height 50%
    border-radius 25px 25px 0 0
    background grey
  .forcast-info
    display flex
    align-items center
    width 100%
    height 50%
    border-radius 0 0 25px 25px
</style>
