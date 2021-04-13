<template>
  <UnauthForm ref="form" title="Hello, welcome back">
    <div class="error">{{ error_msg }}</div>
    <form class="mt-4" @submit.prevent="userLogin">
      <UnauthInput
        ref="email-input"
        v-model="user.email"
        class="white mb-4"
        placeholder="Email"
        type="email"
      ></UnauthInput>
      <UnauthInput
        ref="password-input"
        v-model="user.password"
        class="white"
        placeholder="Password"
        type="password"
      ></UnauthInput>
      <nuxt-link class="mt-3" to="/forgot">Forgot Password?</nuxt-link>
      <UnauthButton ref="loginbtn" type="submit">Login</UnauthButton>
      <p class="mt-4">
        New to Profaili?
        <nuxt-link to="/register">Create account</nuxt-link>
      </p>
    </form>
  </UnauthForm>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      error_msg: '',
      user: {
        password: '',
        email: '',
      },
    }
  },
  methods: {
    refresh() {
      // console.log('here')
      this.$auth.refreshTokens()
    },
    async userLogin() {
      try {
        return await this.$store.dispatch('user/login', this.user)
      } catch (error) {
        this.error_msg = 'Password/email combination is incorrect'
      }
    },
  },
}
</script>

<style scoped lang="sass">
.error
  color: red
  text-align: center
  margin-top: 2em
</style>
