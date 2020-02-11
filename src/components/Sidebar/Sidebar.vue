/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:16
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-08 23:40:50
 */

<template>
    <aside class="sidebar" :class="{active:sidebarActive}">
      <section id="menu-header">
        <p>WECOME BACK</p>
      </section>
      <div id="menu-body">
        <ul>
          <router-link to="/subscription">
            <li class="menu-item">Subscription</li>
          </router-link>
          <router-link to="/addcity">
            <li class="menu-item">Add City</li>
          </router-link>
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
    width 25rem
    height 100%
    z-index 10
  #menu-header
    box-shadow 0 0.0625rem 1.875rem grey
    width 100%
    height 14.375rem
    background linear-gradient(to right,rgb(0,255,155),rgb(95,133,251))
    p
      position relative
      color white
      top 1rem
      font-size $font-size-medium-x
  #menu-body
    height 20rem
    padding 1.875rem
  .menu-item
    list-style-type none
    width 100%
    height 2.5rem
    margin-top 0.625rem
    padding 0.625rem
    cursor pointer
    &:before
      display inline-block
      content ""
      height 100%
      vertical-align middle
  .active
    transform none
  a
    text-decoration none
    color black
  .router-link-active
    li
      color blue
      border-bottom solid
</style>
