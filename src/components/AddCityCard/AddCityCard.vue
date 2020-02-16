/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:36:19
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-16 00:24:33
 */
<template>
  <router-link to="/addcity">
    <transition name="slide-fade">
      <section v-if="show" class="card-container">
        <div class="card-header">
          <p>Add City</p>
        </div>
        <div class="add-icon">
          <svg
            t="1581183053016"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2118"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
          >
            <path
              d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448h-128v128c0 35.392-28.608 64-64 64a64 64 0 0 1-64-64v-128h-128a64 64 0 1 1 0-128h128v-128a64.021333 64.021333 0 0 1 128 0v128h128a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
              fill="rgb(57,67,122)"
              p-id="2119"
            />
          </svg>
        </div>
      </section>
    </transition>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/variable.styl'

.card-container
  display flex
  flex-direction column
  align-items center
  justify-content center
  border-radius 1.25rem
  box-shadow 0 0 0.25rem $color-font-forecast
  padding 2.5rem
  margin 2rem
  width 17rem
  height 28rem
  background white
.card-header
  margin-bottom 4rem
  height 2rem
  font-size $font-size-medium
  p
    font-size $font-size-large
.add-icon
  margin 0 auto
  height 6rem
</style>
