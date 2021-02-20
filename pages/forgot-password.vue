<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Forgot password?">
          <form class="mt-4">
            <UnauthInput class="white mb-4" placeholder="Email" />
            <UnauthButton>Recover Password</UnauthButton>
            <p class="mt-4">
              New to Profaili?
              <nuxt-link to="/register">Create account</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </div>
      <div class="col-md-6">
        <img class="illustration" :src="forgotPassword" />
      </div>
    </div>
  </div>
</template>
<script>
import forgotPassword from "~/assets/img/forgotpassword.svg";
export default {
  layout: "unauthenticated",
  data: function() {
    return {
      forgotPassword
    };
  }
};
</script>
