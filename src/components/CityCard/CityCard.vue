<template>
  <section class="card-container">
    <div class="card-header">
      <p>city</p>
        <div class="weather-icon-container">
        </div>
        <div class="temperature-text-container">
        </div>
        <section class="max-min-container"></section>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
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
