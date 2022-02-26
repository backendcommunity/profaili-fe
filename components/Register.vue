<template>
  <UnauthForm :title="title" :addstyle="addstyle">
    <form
      ref="form"
      class="mt-4"
      action="https://profaily.us1.list-manage.com/subscribe/post?u=731fe09da3abfe832f8122f69&amp;id=62eda625eb"
      method="post"
      @submit.prevent="register"
    >
      <em>{{ errors.name }}</em>
      <UnauthInput
        v-model="user.name"
        name="FNAME"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Name"
        required
      />
      <div hidden="true">
        <input type="hidden" name="tags" value="4051637" />
      </div>
      <em>{{ errors.email }}</em>
      <UnauthInput
        v-model="user.email"
        name="EMAIL"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Email"
        type="email"
        required
      />
      <!-- <em>{{ errors.password }}</em>
      <UnauthInput
        v-model="user.password"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Password"
        type="password"
      /> -->
      <UnauthButton class="action">{{ btntitle }}</UnauthButton>
      <p v-show="addstyle" class="mt-4">
        Already have an account?
        <nuxt-link to="/">Login</nuxt-link>
      </p>
    </form>
  </UnauthForm>
</template>

<script>
export default {
  props: {
    addstyle: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Hello, create an account',
    },
    btntitle: {
      type: String,
      default: 'Create Account',
    },
  },
  data() {
    return {
      errors: {},
      user: {},
    }
  },
  methods: {
    register() {
      // const res = await this.$store.dispatch('user/register', this.user)
      // if (res.success) {
      // } else {
      //   const { data, message } = res.data
      //   const o = {}
      //   if (message === 'Validation failed') {
      //     for (const [key, value] of Object.entries(data.errors)) {
      //       o[key] = `${value}`
      //     }
      //   }
      //   this.errors = o
      // }
      if (this.validateEmail(this.user.email)) {
        this.suscribeNewsletter()
      } else this.errors.email = 'Enter a valid email'
    },
    suscribeNewsletter() {
      this.$refs.form.submit()
    },
    validateEmail(email) {
      if (email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
      }
      return false
    },
  },
}
</script>
<style lang="sass">
em
  color: red
</style>
