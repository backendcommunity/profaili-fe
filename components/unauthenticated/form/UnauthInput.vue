<template>
  <div class="unauth-input">
    <input
      v-bind="$attrs"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
  },
};
</script>
<style lang="sass" scoped>
div.unauth-input
  margin-bottom: .9rem
  &.white
    input
      background-color: #fff
      border-color: #acacac
  input
    border-radius: 7px
    background: #dedede
    padding: 10px 25px
    color: #333
    border: 2px solid transparent
    outline: none
    display: block
    width: 100%
    font-size: 1.3vw
    font-weight: 500
    &.white
      background-color: #fff
      border-color: #acacac
    &:focus, &:active
      outline: none
      border-color: #8e8e8e
    &::placeholder
      color: #5e5e5e
</style>