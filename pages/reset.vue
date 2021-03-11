<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Reset password">
          <form class="mt-4" @submit.prevent="reset">
            <UnauthInput
              v-model="user.password"
              type="password"
              class="white mb-4"
              placeholder="New Password"
            />
            <UnauthInput
              v-model="user.password_confirmation"
              type="password"
              class="white mb-4"
              placeholder="Confirm New Password"
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
    <UnauthFooter />
  </div>
</template>
<script>
import resetPassword from '~/assets/img/forgotpassword.svg'
export default {
  layout: 'unauthenticated',
  auth: false,
  data() {
    return {
      resetPassword,
      user: {},
    }
  },

  methods: {
    async reset() {
      const { token, email } = this.$route.query
      this.user.email = email
      this.user.token = token
      return await this.$store.dispatch('user/resetPassword', this.user)
    },
  },
}
</script>
