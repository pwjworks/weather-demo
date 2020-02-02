<template>
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
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus">
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
</style>
