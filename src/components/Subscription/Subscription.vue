/*
 * @Author: pwjworks
 * @Date: 2020-02-08 17:51:05
 * @Last Modified by: pwjworks
 * @Last Modified time: 2020-02-12 01:18:29
 */
 //TODO 业务逻辑
<template>
  <div class="inner-container">
    <div class="subscription-container">
      <city-card
        v-for="(subscription,index) in subscriptionCity"
        :key="index"
        :city="subscription.city"
        :weather="subscription.weather"
        :max="subscription.max"
        :min="subscription.min"
        :wea_img="subscription.wea_img"
        :live_tem="subscription.liveTem"
      ></city-card>
      <add-city-card></add-city-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CityCard from 'components/CityCard/CityCard.vue'
import AddCityCard from 'components/AddCityCard/AddcityCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CityCard,
    AddCityCard
  },
  computed: {
    ...mapState({
      subscriptionCity: state => state.subscriptionCity
    })
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
  background linear-gradient(rgb(97, 162, 253), rgb(94, 231, 224))
  width 100%
  height 100%
</style>
