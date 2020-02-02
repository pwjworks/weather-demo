<template>
  <div class="panel">
    <div class="forecast">
      <embed src="src/assets/icons/weather/Rain.svg" type="image/svg+xml" />
    </div>
    <div class="forecast">
      <div class="forecast-date">
        <p>星期二</p>
      </div>
      <div class="forecast-icon">
        <embed src="src/assets/icons/weather/Storm.svg" type="image/svg+xml" />
      </div>
      <p>max 20</p>
      <p>min 10</p>
    </div>
    <div class="forecast">
      <embed src="src/assets/icons/weather/Snow.svg" type="image/svg+xml" />
    </div>
    <div class="forecast">
      <embed src="src/assets/icons/weather/Cloudy.svg" type="image/svg+xml" />
    </div>
    <div class="forecast">
      <embed src="src/assets/icons/weather/Sunny.svg" type="image/svg+xml" />
    </div>
    <div class="forecast">
      <embed src="src/assets/icons/weather/Windy.svg" type="image/svg+xml" />
    </div>
    <div class="forecast">
      <embed src="src/assets/icons/weather/Drizzle.svg" type="image/svg+xml" />
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
.panel {
  display flex
  flex-direction row
  align-items center
  justify-content center
  width 100%
  height 80%
}

.forecast
  display flex
  align-items center
  justify-content center
  flex-direction column
  height 200px
  width 120px
.forecast-date
  margin-bottom 20px
.forecast-temperature
  display flex
  align-content center
  flex-direction row
</style>
