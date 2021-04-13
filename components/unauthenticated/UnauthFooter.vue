<template>
  <div class="unauth-footer">
    <p>© Copyright {{ name }} 2020, All rights reserved.</p>
    <div class="icons">
      <a href="#"><img :src="fb" /></a>
      <a href="#"><img :src="twitter" /></a>
      <a href="#"><img :src="linkedin" /></a>
    </div>
  </div>
</template>
<script>
import fb from '~/assets/icons/facebook.svg'
import twitter from '~/assets/icons/twitter.svg'
import linkedin from '~/assets/icons/linkedin.svg'
export default {
  data() {
    return {
      name: process.env.APP_NAME || 'Profaili',
      fb,
      twitter,
      linkedin,
    }
  },
}
</script>
<style lang="sass" scoped>
.unauth-footer
  display: flex
  justify-content: space-between
  width: 100%
  margin: 30px 0
  *
    color: #041836
  p
    margin: 0
    font-weight: 500
  .icons
    display: flex
    a
      margin: 0 8px
</style>
