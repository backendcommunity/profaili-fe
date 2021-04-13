<template>
  <b-container fluid class="pl-md-4 pr-md-5 auth">
    <b-row class="justify-content-between">
      <b-col md="6" sm="12" class="content">
        <UnauthForm title="Forgot password?">
          <form class="mt-4" @submit.prevent="recoverPassword">
            <UnauthInput
              v-model="user.email"
              type="email"
              class="white mb-4"
              placeholder="Email"
            />
            <UnauthButton>Recover Password</UnauthButton>
            <p class="mt-4">
              New to Profaili?
              <nuxt-link to="/register">Create account</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </b-col>
      <b-col md="5" sm="12">
        <img class="illustration" :src="forgotPassword" />
      </b-col>
    </b-row>
    <UnauthFooter />
  </b-container>
</template>
<script>
import forgotPassword from '~/assets/img/forgotpassword.svg'
export default {
  layout: 'unauthenticated',
  middleware: ['auth'],
  auth: false,
  data() {
    return {
      forgotPassword,
      user: {},
    }
  },

  methods: {
    async recoverPassword() {
      return await this.$store.dispatch('user/recoverPassword', this.user)
    },
  },
}
</script>
