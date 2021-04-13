<template>
  <b-container fluid class="pl-md-4 pr-md-5 auth">
    <b-row class="justify-content-between">
      <b-col sm="12" md="6" class="content"><Register /></b-col>
      <b-col sm="12" md="5">
        <img class="illustration" :src="login" />
      </b-col>
    </b-row>
    <div class="clearfix">
      <UnauthFooter />
    </div>
  </b-container>
</template>
<script>
import login from '~/assets/img/login.svg'
export default {
  layout: 'unauthenticated',
  middleware: ['auth'],
  auth: 'guest',
  data() {
    return { login }
  },
}
</script>
<style lang="sass" scoped>
.clearfix
  clear: both
</style>
