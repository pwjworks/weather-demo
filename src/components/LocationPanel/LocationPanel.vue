/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:46:54
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:46:54
 */
<template>
  <div class="location-content">
    <p id="city">{{city}}</p>
    <p id="liveWeather">{{liveWeather}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { getIPLocation } from 'api/getIPLocation'
import { ERR_OK } from 'api/config'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    this.__getIPLocation()
  },
  methods: {
    __getIPLocation: function () {
      getIPLocation().then((res) => {
        if (res.data.err_code === ERR_OK) {
          this.updateCity(res.data.content.address_detail.city)
        }
      })
    },
    ...mapMutations(['updateCity'])
  },
  computed: {
    ...mapState({
      city: state => state.city,
      liveWeather: state => state.liveWeather
    })
  }
}
</script>

<style lang="stylus">
  .location-content
    position absolute
    display flex
    flex-direction column
    justify-content center
    left 60%
    width 300px
    height 225px
    p
      margin-top 20px
      font-size 2em
  #city
    letter-spacing 20px
    border-bottom  solid 3px white
  #liveWeather
    position relative
    top 30px
</style>
