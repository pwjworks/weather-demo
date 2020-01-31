<template>
<div class="app">
  <Header></Header>
  <MainPanel></MainPanel>
</div>
</template>

<script>
import Header from './components/Header/Header.vue'
import MainPanel from './components/MainPanel/MainPanel.vue'

export default {
  components: {
    Header,
    MainPanel
  }
}
</script>

<style lang="stylus">
@import "~assets/styles/index.styl"
  .app
    position absolute
    display flex
    flex-direction column
    align-content center
    height 100%
    width 100%
</style>
