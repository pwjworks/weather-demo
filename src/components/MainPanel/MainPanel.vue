<template>
  <div class="container">
    <div class="weather-card">
      <div class="weather-info">
        <div class="temperature-content">
          <div class="temperature">
            <p>12</p>
          </div>
          <div class="wh-container">
            <div class="wind-meter">
              <p class="info">wind</p>
              <p class="info">12km/h</p>
            </div>
            <div class="humidity">
              <p class="info">humidity</p>
              <p class="info">84%</p>
            </div>
          </div>
        </div>
        <div class="location-content">
          <p>France</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  .temperature-content
    display flex
    flex-direction column
    align-content center
    justify-content center
    flex-wrap wrap
    position absolute
    left 7%
    width 300px
    height 250px
  .temperature
    width 300px
    height 100px
    p
      font-size 100px
  .wh-container
    display flex
    flex-direction row
    height 80px
    margin-top 30px
  .wind-meter
    display flex
    justify-content center
    flex-direction column
    width 50%
  .humidity
    display flex
    justify-content center
    flex-direction column
    width 50%
    border-left  2px solid white
  .info
      font-size 20px
      &:before
        display inline-block
        content ""
        height 100%
        vertical-align middle
  .location-content
    position absolute
    display flex
    justify-content center
    left 60%
    width 300px
    height 225px
    p
      position absolute
      top 10%
      font-size 2em
</style>
