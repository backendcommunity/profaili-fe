<template>
  <b-container fluid class="pl-md-4 pr-md-5">
    <div class="nav-links">
      <b-navbar toggleable="lg" type="light" class="nav">
        <b-navbar-brand class="brand" href="/">{{ name }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Pricing</b-nav-item>
            <b-nav-item href="#">Customers</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Login</b-nav-item>
            <b-button href="/" class="button">Get Started</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      name: process.env.APP_NAME || 'Profaily',
    }
  },
}
</script>
<style lang="sass" scoped>
.nav
  padding: 40px 0 20px

.navbar-light .navbar-nav .nav-link
  color: #041836

.nav-links
  justify-content: space-between
  width: 100%
  align-items: center
  font-weight: 600
  font-size: 18px

a
  margin: 0 20px
  text-decoration: none

.brand
  font-weight: bold
  font-size: 32px
  margin-left: 0
  margin-right: 40px
  text-decoration: none
  color: #041836

.button
  display: inline-block
  border: none
  radius: 5px
  background-color: #92E3A9
  padding: 7px 12px
  color: #041836
  font-size: 18px
  font-weight: 600
</style>
