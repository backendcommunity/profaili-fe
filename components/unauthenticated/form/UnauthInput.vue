<template>
  <div class="unauth-input">
    <input v-bind="$attrs" />
  </div>
</template>
<style lang="sass" scoped>
div.unauth-input
  margin-bottom: .9rem
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
    &:focus, &:active
      outline: none
      border-color: #8e8e8e
    &::placeholder
      color: #5e5e5e
</style>