<template>
  <div class="header">
    <div class="nav">
      <ul class="nav-ul">
        <li class="nav-item">1</li>
        <li class="nav-item">2</li>
        <li class="nav-item">3</li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus">
@import "~assets/styles/variable.styl";
.header
  top 0
  width 100%
  height 60px
  background $color-background
  box-shadow 5px 5px 20px $color-shadow
  z-index 10
.nav .nav-ul
  display flex
  align-content center
.nav-item
  margin-right 20px
</style>
