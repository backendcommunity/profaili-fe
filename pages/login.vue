<template>
  <div class="e-container login">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Hello, welcome back">
          <form class="mt-4">
            <UnauthInput class="white mb-4" placeholder="Email" />
            <UnauthInput class="white" placeholder="Password" />
            <nuxt-link class="mt-3" to="/forgot-password">Forgot Password?</nuxt-link>
            <UnauthButton>Login</UnauthButton>
            <p class="mt-4">New to Profaili? <nuxt-link to="/register">Create account</nuxt-link></p>
          </form>
        </UnauthForm>
      </div>
      <div class="col-md-6">
        <img class="illustration" :src="login" />
      </div>
    </div>
  </div>
</template>
<script>
import login from "~/assets/img/login.svg";
export default {
  layout: "unauthenticated",
  data: function() {
    return {
      login
    };
  }
};
</script>
<style lang="sass">
.login
  p, a
    font-weight: 500
    font-size: 1.2vw 
  a
    color: #041836
    font-weight: 600
    text-decoration: underline
</style>
