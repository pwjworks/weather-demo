/*
 * @Author: pwjworks
 * @Date: 2020-02-08 17:51:05
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-09 14:36:27
 */
<template>
    <div class="inner-container">
      <div class="subscription-container">
        <city-card></city-card>
        <city-card></city-card>
        <city-card></city-card>
        <add-city-card></add-city-card>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import CityCard from 'components/CityCard/CityCard.vue'
import AddCityCard from 'components/AddCityCard/AddcityCard.vue'

export default {
  components: {
    CityCard,
    AddCityCard
  }
}
</script>

<style lang="stylus" scoped>
  .inner-container
    position relative
    overflow-x hidden
    overflow-y hidden
    height 100%
    width 100%
  .subscription-container
    overflow-y auto
    position absolute
    justify-content center
    display flex
    flex-wrap wrap
    background linear-gradient(rgb(97,162,253), rgb(94,231,224))
    width 100%
    height 100%
</style>
