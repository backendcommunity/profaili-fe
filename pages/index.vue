<template>
  <b-container fluid class="home">
    <div class="row justify-content-between">
      <div class="col-md-6 content">
        <h2 class="banner-text">Sync your online profile</h2>
        <p class="sub-text">
          Update your profile across multiple social networks at once with
          Profaily.
        </p>
        <Register :addstyle="false" title="" btntitle="Join our waiting list" />
        <p class="sub-text mt-3">
          Already have an account?
          <b><nuxt-link to="#">Login</nuxt-link></b>
        </p>
      </div>
      <div class="col-md-5">
        <div class="row justify-content-center">
          <img class="illustration" :src="home" />
        </div>
      </div>
    </div>
    <UnauthFooter />
  </b-container>
</template>

<script>
import home from '~/assets/img/home.svg'
export default {
  layout: 'unauthenticated',
  middleware: ['auth'],
  auth: false,
  data() {
    return {
      home,
    }
  },
}
</script>

<style lang="sass" scoped>
.home
  *
    color: #041836
  .banner-text
    font-weight: 700
    font-size: 3.4vw
    margin-bottom: 1vw
  .sub-text
    font-weight: 500
    font-size: 1.3vw
    line-height: 160%
    a
      text-decoration: underline
</style>
