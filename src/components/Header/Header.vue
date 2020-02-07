<template>
  <div class="header">
    <div class="side-menu-container">
      <div class="side-menu-icon">
        <svg t="1580552638883" style="cursor:pointer;z-index:60;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1131" width="28" height="28" @click="sidebarClick"><path d="M1024 585.142857H292.571429V438.857143h731.428571v146.285714zM0 585.142857h146.285714V438.857143H0v146.285714zM1024 73.142857H292.571429v146.285714h731.428571V73.142857zM0 219.428571h146.285714V73.142857H0v146.285714z m1024 585.142858H292.571429v146.285714h731.428571V804.571429zM0 950.857143h146.285714V804.571429H0v146.285714z" p-id="1132" style="cursor:pointer;z-index:60;"></path></svg>
      </div>
    </div>
    <div class="header-title">
      <div class="date">
        <p>{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getMonthName, getWeekDayName } from 'utils/getDateName'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    var d = new Date()
    this.title = getWeekDayName(d) + ' ,' + d.getDate() + 'th ' + getMonthName(d)
  },
  computed: {
    ...mapState({
      sidebarActive: state => state.sidebarActive
    })
  },
  methods: {
    sidebarClick: function () {
      this.updateSidebarActive(!this.sidebarActive)
    },
    ...mapMutations(['updateSidebarActive'])
  }
}
</script>

<style lang="stylus">
.header
  display flex
  flex-direction row
  align-items center
  width 100%
  height 60px
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
    line-height 100%
.side-menu-icon
  margin-left 20px
.side-menu-container
  z-index 60
</style>
