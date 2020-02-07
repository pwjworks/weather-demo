/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:16
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:47:16
 */
<template>
  <aside class="sidebar" :class="{active:sidebarActive}">
    <section id="menu-header">
      <p>WECOME BACK</p>
    </section>
    <div id="menu-body">
      <ul>
        <li class="menu-item">Home</li>
        <li class="menu-item">Add City</li>
        <li class="menu-item">Logout</li>
      </ul>
    </div>
  </aside>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      sidebarActive: state => state.sidebarActive
    })
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variable.styl';
  .sidebar
    position fixed
    background white
    transform translateX(-200%)
    transition transform .3s ease-in-out
    display flex
    flex-direction column
    width 400px
    height 100%
    z-index 50
  #menu-header
    box-shadow 0 1px 30px grey
    width 100%
    height 230px
    background linear-gradient(to right,rgb(0,255,155),rgb(95,133,251))
    p
      position relative
      color white
      top 18px
      font-size $font-size-medium-x
  #menu-body
    height 300px
    padding 30px
  .menu-item
    list-style-type none
    width 100%
    height 40px
    margin-top 10px
    padding 10px
    cursor pointer
    &:before
      display inline-block
      content ""
      height 100%
      vertical-align middle
  .active
    transform none
</style>
