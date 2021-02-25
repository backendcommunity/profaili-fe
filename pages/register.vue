<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 offset-md-3 content">
        <UnauthForm title="Hello, create an account">
          <form class="mt-4" @submit.prevent="register">
            <UnauthInput
              v-model="user.name"
              class="white mb-4"
              placeholder="Name"
            />
            <UnauthInput
              v-model="user.email"
              class="white"
              placeholder="Email"
              type="email"
            />
            <UnauthInput
              v-model="user.password"
              class="white"
              placeholder="Password"
              type="password"
            />
            <UnauthButton class="action">Create Account</UnauthButton>
            <p class="mt-4">
              Already have an account?
              <nuxt-link to="/login">Login</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  auth: "guest",
  layout: "unauthenticated",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async register() {
      await this.$store.dispatch("user/register", this.user);
    },
  },
};
</script>
<style lang="sass"></style>
