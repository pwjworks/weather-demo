/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:36
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-15 21:20:56
 */
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
  metaInfo: {
    title: 'Pwjworks\' weather app'
  },
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
