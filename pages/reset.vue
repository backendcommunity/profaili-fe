<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Reset password">
          <form class="mt-4" @submit.prevent="reset">
            <UnauthInput
              type="password"
              class="white mb-4"
              placeholder="New Password"
              v-model="user.password"
            />
            <UnauthInput
              type="password"
              class="white mb-4"
              placeholder="Confirm New Password"
              v-model="user.password_confirmation"
            />
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
  auth: false,
  data: function () {
    return {
      resetPassword,
      user: {},
    };
  },

  methods: {
    async reset() {
      const { token, email } = this.$route.query;
      this.user.email = email;
      this.user.token = token;
      return await this.$store.dispatch("user/resetPassword", this.user);
    },
  },
};
</script>
