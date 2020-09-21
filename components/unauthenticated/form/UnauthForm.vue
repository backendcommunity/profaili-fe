<template>
<div class="unauth-form">
  <h2 v-if="title">{{title}}</h2>
  <slot></slot>
</div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style lang="sass">
.unauth-form
  width: 100%
  border-radius: 10px
  background: #ededed
  padding: 40px 25px
  h2
    text-align: center
    font:
      weight: bold
      size: 32px
      color: #041836
</style>