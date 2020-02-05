<template>
  <div class="panel">
    <ForecastInfo v-for="(weather,index) in weekWeather"
    :forecastObj='weather'
    :max='weather.tem1'
    :min='weather.tem2'
    :weekday='weather.week'
    :wea_img='weather.wea_img'
    :tem='weather.tem'
    :key="index"
    ></ForecastInfo>
  </div>
</template>

<script type="text/ecmascript-6">
import { ERR_OK } from 'api/config'
import { getWeatherForecast } from 'api/getWeatherForecast'
import { mapState } from 'vuex'
import ForecastInfo from 'components/ForecastInfo/ForecastInfo.vue'

export default {
  components: {
    ForecastInfo
  },
  data () {
    return {
      weekWeather: []
    }
  },
  methods: {
    __getWeatherForecast (city) {
      getWeatherForecast(city).then((res) => {
        if (res.data.err_code === ERR_OK) {
          this.weekWeather = res.data.weather
        }
      })
    }
  },
  computed: {
    ...mapState({
      city: state => state.city
    })
  },
  watch: {
    city: function (newCity, oldCity) {
      var index = newCity.indexOf('市')
      this.__getWeatherForecast(newCity.substr(0, index === -1 ? newCity.length : index))
    }
  }
}
</script>

<style lang="stylus">
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
  margin-bottom 20px
.forecast-temperature
  display flex
  align-content center
  flex-direction row
</style>
