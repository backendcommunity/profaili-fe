<template>
  <div class="nav">
    <div class="e-container">
      <div class="nav-links">
        <div class="left">
          <nuxt-link class="brand" to="/">{{name}}</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/pricing">Pricing</nuxt-link>
          <nuxt-link to="/customers">Customers</nuxt-link>
        </div>
        <div class="right">
          <nuxt-link to="/login">Login</nuxt-link>
          <nuxt-link to="/register" class="button">Get Started</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        name: process.env.APP_NAME || "Profaili"
      }
    }
  }
</script> 
<style lang="sass" scoped>
.nav 
  padding: 40px 0 20px
  *
    color: #041836
  .nav-links
    display: flex
    width: 100%
    justify-content: space-between
    align-items: center
    font-weight: 600
    font-size: 18px
    > div
      display: flex
      align-items: center
    a
      margin: 0 20px
    .brand
      font-weight: bold
      font-size: 32px
      margin-left: 0
      margin-right: 40px
      text-decoration: none
    .button
      display: inline-block
      border: none
        radius: 5px
      background-color: #92E3A9
      padding: 7px 12px
</style>