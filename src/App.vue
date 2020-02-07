<template>
<div class="app">
  <Sidebar></Sidebar>
  <Header></Header>
  <router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import Header from 'components/Header/Header.vue'
import Sidebar from 'components/Sidebar/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="stylus">
  .app
    position absolute
    display flex
    flex-direction column
    height 100%
    width 100%
</style>
