<template>
<div class="app">
  <Sidebar></Sidebar>
  <Header></Header>
  <MainPanel></MainPanel>
</div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header/Header.vue'
import MainPanel from './components/MainPanel/MainPanel.vue'
import Sidebar from 'components/Sidebar/Sidebar.vue'

export default {
  components: {
    Header,
    MainPanel,
    Sidebar
  }
}
</script>

<style lang="stylus">
@import "~assets/styles/index.styl"
  .app
    position absolute
    display flex
    flex-direction column
    height 100%
    width 100%
</style>
