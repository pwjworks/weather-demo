/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:54
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-11 21:23:34
 */
<template>
  <div class="location-content">
    <p id="city">{{city}}</p>
    <p id="liveWeather">{{liveWeather}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    city: String,
    liveWeather: String
  }
}
</script>

<style lang="stylus" scoped>
  .location-content
    position absolute
    display flex
    flex-direction column
    justify-content center
    left 60%
    width 18.75rem
    height 14rem
    p
      font-size 2rem
      &:before
        display inline-block
        content ""
        height 100%
        vertical-align middle
  #city
    height 50%
    letter-spacing 1.25rem
    border-bottom  solid 0.1875rem white
  #liveWeather
    height 50%
    position relative
</style>
