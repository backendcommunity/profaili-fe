<template>
  <div class="e-container auth">
    <div class="row">
      <div class="col-md-6 content"><Register /></div>
      <div class="col-md-6">
        <img class="illustration" :src="login" />
      </div>
    </div>
    <div class="clearfix">
      <UnauthFooter />
    </div>
  </div>
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
