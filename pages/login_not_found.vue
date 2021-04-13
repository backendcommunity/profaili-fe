<template>
  <b-container fluid class="pl-md-4 pr-md-5 auth">
    <b-row class="justify-content-between">
      <b-col sm="12" md="6" class="content">
        <Login />
      </b-col>
      <b-col sm="12" md="5">
        <img class="illustration" :src="login" />
      </b-col>
    </b-row>
    <UnauthFooter />
  </b-container>
</template>
<script>
import login from '~/assets/img/login.svg'
export default {
  layout: 'unauthenticated',
  data() {
    return {
      login,
    }
  },
}
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
