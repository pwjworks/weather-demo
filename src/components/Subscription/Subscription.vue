/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:47:24
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:47:24
 */
<template>
  <div class="subscription-container">
    <city-card></city-card>
    <add-city-card></add-city-card>
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

<style lang="stylus">
  .subscription-container
    display flex
    flex-direction row
    justify-content center
    align-items center
    flex-wrap wrap
    width 100%
    height 100%
  .card-container
    display flex
    flex-direction column
    border-radius 20px
    padding 40px
    margin 40px
    width 300px
    height 450px
    background grey
</style>
