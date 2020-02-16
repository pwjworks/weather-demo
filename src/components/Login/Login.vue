/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:01
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 22:16:23
 */
<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-form-container">
        <p class="login-text">Login</p>
        <div class="login-form">
          <input type="text">
          <input type="text">
        </div>
        <div class="admit-btn">
          <button>admit</button>
        </div>

      </div>
      <div class="welcome">
        <h1>WECOME BACK</h1>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Login'
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variable.styl';
  .login-container
    height 100%
    width 100%
    display flex
    justify-content center
    align-items center
    background linear-gradient(rgb(97,162,253), rgb(94,231,224))
  .login-panel
    display flex
    flex-direction row
    align-items center
    box-shadow 0 0 .25rem $color-font-forecast
    border-radius 1rem
    width 62rem
    height 42rem
    background white
  .login-text
    margin-top 4rem
    font-size $font-size-large
    font-weight bold
    color $color-font-forecast
  .welcome
    background grey
    border-radius 0 1rem 1rem 0
    height 100%
    width 60%
    h1
      position relative
      color white
      top 60%
      left 10%
    hr
      width 8rem
      height .5rem
      outline 0
      border none
      background white
      position relative
      top 65%
      left 5%
  .login-form-container
    display flex
    flex-direction column
    align-items center
    border-radius 1rem 0 0 1rem
    height 100%
    width 40%
  .login-form
    display flex
    flex-direction column
    align-items center
    margin-top 2rem
    width 23rem
    height 15rem
    input
      font-size $font-size-small
      width 15rem
      height 2.5rem
      margin 2rem
      padding .75rem
      padding-left 2rem
      border-radius 2rem
      border none
      box-shadow 0 0 .5rem $color-font-forecast
  .admit-btn
    width 10rem
    button
      font-size $font-size-medium
      color $color-font-forecast
      width 100%
      height 3rem
      border-radius 2rem
</style>
