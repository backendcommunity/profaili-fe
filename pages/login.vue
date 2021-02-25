<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content">
        <UnauthForm title="Hello, welcome back">
          <form class="mt-4" @submit.prevent="userLogin">
            <UnauthInput
              v-model="user.email"
              class="white mb-4"
              placeholder="Email"
              type="email"
            />
            <UnauthInput
              v-model="user.password"
              class="white"
              placeholder="Password"
              type="password"
            />
            <nuxt-link class="mt-3" to="/forgot">Forgot Password?</nuxt-link>
            <UnauthButton type="submit">Login</UnauthButton>
            <p class="mt-4">
              New to Profaili?
              <nuxt-link to="/register">Create account</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </div>
      <div class="col-md-6">
        <img class="illustration" :src="login" @click="refresh" />
      </div>
    </div>
  </div>
</template>
<script>
import login from "~/assets/img/login.svg";
export default {
  layout: "unauthenticated",
  data: function () {
    return {
      login,
      user: {
        password: "",
        email: "",
      },
    };
  },

  methods: {
    refresh() {
      console.log("here");
      this.$auth.refreshTokens();
    },
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.user,
        });
        // await this.$auth.setUserToken(response.data.token);
        this.$auth.setUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="sass">
.auth
  p, a
    font-weight: 500
    font-size: 1.2vw
  a
    color: #041836
    font-weight: 600
    text-decoration: underline
</style>
