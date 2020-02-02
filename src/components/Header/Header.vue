<template>
  <div class="header">
    <div class="side-menu-container">
      <div class="side-menu-icon">
        <embed src="src/assets/icons/common/List.svg" type="image/svg+xml">
      </div>
    </div>
    <div class="header-title">
      <div class="date">
        <p>{{date}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getMonthName, getWeekDayName } from 'utils/getDateName.js'

export default {
  data () {
    return {
      date: ''
    }
  },
  created () {
    var d = new Date()
    this.date = getWeekDayName(d) + ' ,' + d.getDate() + 'th ' + getMonthName(d)
  }
}
</script>

<style lang="stylus">
@import "~assets/styles/variable.styl";
.header
  display flex
  flex-direction row
  align-items center
  width 100%
  height 70px
  background $color-background-dark
  box-shadow 5px 5px 20px $color-shadow
  z-index 10
.header-title
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
.date p
    position relative
    right 30px
    font-size 1.5em
    color white
    line-height 100%
.side-menu-icon
  margin-left 20px
</style>
