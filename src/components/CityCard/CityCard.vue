/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:21
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-09 01:34:04
 */
<template>
  <section class="card-container">
    <div class="card-header">
      <p>city</p>
        <div class="weather-icon-container">
          <embed src="src/assets/icons/weather/qing.svg" type="image/svg+xml">
        </div>
        <div class="temperature-text-container">
          <p class="tem">21</p>
          <p class="wea">晴</p>
        </div>
        <section class="max-min-container">
          <div class="max">
            <div class="max-icon">
              <svg t="1580840189884" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1114" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" p-id="1115" fill="#d81e06"></path></svg>
            </div>
            <div class="tem-num"><p>23</p></div>
            <div class="max-text"><p>max</p></div>
          </div>
          <div class="min">
            <div class="min-icon">
              <svg t="1580840107056" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z" p-id="2092" fill="#1afa29"></path></svg>
            </div>
            <div class="tem-num"><p>21</p></div>
            <div class="min-text"><p>min</p></div>
          </div>
        </section>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl';
.card-container
  display flex
  flex-direction column
  align-items center
  border-radius 1.25rem
  padding 2.5rem
  margin-top 5rem
  margin-left 5rem
  width 17rem
  height 28rem
  background white
.card-header
  height 2rem
  font-size $font-size-medium
.weather-icon-container
  margin 0 auto
  margin-top 2rem
  width 10rem
  margin-bottom 2rem
.icon
  width 6.25rem
  height 6.25rem
.temperature-text-container
  height 6rem
.tem
  font-size $font-size-large
  height 70%
.wea
  font-size $font-size-medium-l
  height 30%
.max-min-container
  display grid
  grid-template-columns 1fr 1fr
  width 14rem
  height 7rem
.max
  display grid
  grid-template-rows 1fr 2fr 1fr
  height 100%
.min
  display grid
  grid-template-rows 1fr 2fr 1fr
  height 100%
.tem-num
  p
    height 100%
    font-size $font-size-large
    &:before
      display inline-block
      content ""
      height 100%
      vertical-align middle
.min-text
  color green
.max-text
  color red
.max-icon
  margin 0 auto
  width 1.25rem
.min-icon
  margin 0 auto
  width 1.25rem
</style>
