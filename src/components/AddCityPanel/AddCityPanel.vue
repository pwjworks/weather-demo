/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:12
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-09 14:42:35
 */
 //TODO 业务逻辑
<template>
  <div class="inner-container">
    <div class="subscription-container">
      <div class="sub-panel">
        <div class="search">
          <p>SEARCH CITIES</p>
        </div>
        <div class="select-container">
          <div class="select">
            <p>PROVINCE</p>
            <select name="province">
              <option value="广东" class="prov">广东</option>
              <option value="深圳" class="prov">深圳</option>
              <option value="湖南" class="prov">湖南</option>
            </select>
          </div>
          <div class="select">
            <p>CITY</p>
            <select name="city">
              <option value="广州" class="opt" selected>广州</option>
              <option value="清远" class="opt">清远</option>
              <option value="佛山" class="opt">佛山</option>
            </select>
          </div>
        </div>
        <div class="select-btn">
          <button id="select-confirm">ADD CITY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.inner-container
  position relative
  overflow-x hidden
  overflow-y hidden
  height 100%
  width 100%
.subscription-container
  overflow-y auto
  position absolute
  justify-content center
  align-items center
  display flex
  flex-wrap wrap
  background linear-gradient(rgb(97, 162, 253), rgb(94, 231, 224))
  width 100%
  height 100%
.sub-panel
  display flex
  align-items center
  flex-direction column
  box-shadow 0 0 0.25rem $color-font-forecast
  padding 3rem
  border-radius 1rem
  width 28rem
  height 36rem
  background white
.search
  p
    font-weight bold
    color $color-font-forecast
    font-size $font-size-large
.select-container
  display flex
  flex-direction column
  align-items center
  width 25rem
  height 30rem
.select
  margin 1rem
  width 25rem
  height 10rem
  select
    box-shadow 0 0 0.25rem $color-font-forecast
    font-size $font-size-medium-l
    border-radius 3rem
    padding 0.5rem
    width 100%
    height 3rem
  p
    font-size $font-size-medium
    margin 2rem
.select-btn
  width 10rem
  button
    font-size $font-size-medium
    color $color-font-forecast
    width 100%
    height 3rem
    border-radius 2rem
</style>
