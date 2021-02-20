<template>
  <div class="e-container home">
    <div class="row">
      <div class="col-md-6 content">
        <h2 class="banner-text">Sync your online profile</h2>
        <p class="sub-text">Update your profile across multiple social networks at once with Profaili.</p>
        <form>
          <UnauthInput placeholder="Name" />
          <UnauthInput placeholder="Email" />
          <UnauthInput placeholder="Password" />
          <UnauthButton>Get Started!</UnauthButton>
        </form>
        <p class="sub-text mt-3">Already have an account? <b><nuxt-link to="/login">Login</nuxt-link></b></p>
      </div>
      <div class="col-md-6">
        <img class="illustration" :src="home" />
      </div>
    </div>
    <UnauthFooter />
  </div>
</template>

<script>
import home from "~/assets/img/home.svg"
export default {
  layout: "unauthenticated",
  data: function() {
    return {
      home
    }
  }
};
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
