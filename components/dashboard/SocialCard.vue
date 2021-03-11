<template>
  <div class="social-card">
    <img :src="icon" />
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="sass">
.social-card
  display: flex
  width: 100%
  background-color: rgba(#143B8C, .8)
  border-radius: 7px
  flex-direction: column
  align-items: center
  cursor: pointer
  justify-content: center
  p
    color: white
    font-weight: 600
    font-size: 1.4rem
  img
    margin-bottom: 1rem
    width: 2.6rem
</style>
