<template>
  <div class="e-container login">
    <div class="row">
      <div class="col-md-6 offset-md-3 content">
        <UnauthForm title="Hello, create an account">
          <form class="mt-4">
            <UnauthInput class="white mb-4" placeholder="Name" />
            <UnauthInput class="white" placeholder="Email" />
            <UnauthInput class="white" placeholder="Password" />
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
<style lang="sass"></style>
<script>
export default {
  layout: "unauthenticated"
};
</script>
