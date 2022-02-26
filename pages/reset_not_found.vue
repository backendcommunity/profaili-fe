<template>
  <b-container fluid class="pl-md-4 pr-md-5 auth">
    <b-row class="justify-content-between">
      <b-col sm="12" md="6" class="content">
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
              New to Profaily?
              <nuxt-link to="/register">Create account</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </b-col>
      <b-col md="5" sm="12">
        <img class="illustration" :src="resetPassword" />
      </b-col>
    </b-row>
    <UnauthFooter />
  </b-container>
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
