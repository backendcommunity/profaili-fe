<template>
  <UnauthForm :title="title" :addstyle="addstyle">
    <form class="mt-4" @submit.prevent="register">
      <em>{{ errors.name }}</em>
      <UnauthInput
        v-model="user.name"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Name"
      />
      <em>{{ errors.email }}</em>
      <UnauthInput
        v-model="user.email"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Email"
        type="email"
      />
      <em>{{ errors.password }}</em>
      <UnauthInput
        v-model="user.password"
        :class="{ 'white mb-4': addstyle }"
        placeholder="Password"
        type="password"
      />
      <UnauthButton class="action">{{ btntitle }}</UnauthButton>
      <p v-show="addstyle" class="mt-4">
        Already have an account?
        <nuxt-link to="/login">Login</nuxt-link>
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
    async register() {
      const res = await this.$store.dispatch('user/register', this.user)
      if (res.success) {
      } else {
        const { data, message } = res.data
        const o = {}
        if (message === 'Validation failed') {
          for (const [key, value] of Object.entries(data.errors)) {
            o[key] = `${value}`
          }
        }
        this.errors = o
      }
    },
  },
}
</script>
<style lang="sass">
em
    color: red
</style>
