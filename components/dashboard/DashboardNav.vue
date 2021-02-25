<template>
  <div class="dashboard-nav">
    <nuxt-link to="#"
      ><div class="img-placeholder"></div>
      {{ $auth.user.name }}</nuxt-link
    >
  </div>
</template>
<style lang="sass" scoped>
.dashboard-nav
  width: 100%
  display: flex
  justify-content: flex-end
  align-items: center
  padding: 3vh 10vw
  a
    font-weight: 600
    color: #041F46
    display: inline-flex
    align-items: center
    text-decoration: none
    img, .img-placeholder
      display: inline-block
      width: 35px
      height: 35px
      margin-right: 10px
      border-radius: 50%
      background-color: #C4C4C4
</style>
