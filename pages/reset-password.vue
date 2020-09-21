<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Reset password">
          <form class="mt-4">
            <UnauthInput class="white mb-4" placeholder="New Password" />
            <UnauthInput class="white mb-4" placeholder="Confirm New Password" />
            <UnauthButton>Change Password</UnauthButton>
            <p class="mt-4">
              New to Profaili?
              <nuxt-link to="/register">Create account</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </div>
      <div class="col-md-6">
        <img class="illustration" :src="resetPassword" />
      </div>
    </div>
  </div>
</template>
<script>
import resetPassword from "~/assets/img/forgotpassword.svg";
export default {
  layout: "unauthenticated",
  data: function() {
    return {
      resetPassword
    };
  }
};
</script>
