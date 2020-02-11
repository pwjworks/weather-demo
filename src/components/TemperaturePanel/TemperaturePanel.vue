/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:29
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-11 21:17:27
 */
<template>
  <div class="temperature-content">
    <div class="temperature">
      <p>{{tem}}°</p>
    </div>
    <div class="wh-container">
      <div class="wind-meter">
        <p class="info">pm2.5</p>
        <p class="info">{{pm2_5}}</p>
      </div>
      <div class="humidity">
        <p class="info">humidity</p>
        <p class="info">{{humidity}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    tem: String,
    humidity: String,
    pm2_5: String
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variable.styl'

.temperature-content
  display flex
  flex-direction column
  align-content center
  justify-content center
  flex-wrap wrap
  position absolute
  left 4rem
  width 18.75rem
  height 15.625rem
.temperature
  width 18.75rem
  height 6.25rem
  p
    font-size $font-size-large-x
.wh-container
  display flex
  flex-direction row
  height 5rem
  margin-top 1.875rem
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
  border-left 0.125rem solid white
.info
  height 50%
  font-size 1.25rem
  &:before
    display inline-block
    content ''
    height 100%
    vertical-align middle
</style>
