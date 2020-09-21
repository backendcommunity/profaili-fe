<template>
  <div class="sidebar">
    <nuxt-link class="logo" to="/dashboard">P</nuxt-link>
    <nuxt-link to="/dashboard/accounts/select"><img :src="accounts" /></nuxt-link>
    <nuxt-link to="/dashboard/synchronize"><img :src="synchronize" /></nuxt-link>
    <nuxt-link to="/dashboard/schedule"><img :src="schedule" /></nuxt-link>
  </div>
</template>
<script>
import accounts from "~/assets/icons/sidebar-accounts.svg";
import schedule from "~/assets/icons/sidebar-schedule.svg";
import synchronize from "~/assets/icons/sidebar-synchronize.svg";
export default {
  data: function() {
    return {
      accounts,
      schedule,
      synchronize
    };
  }
};
</script>
<style lang="sass">
.sidebar
  background-color: #010B18
  color: white
  height: 100%
  position: absolute
  width: 100px
  display: flex
  flex-direction: column
  align-items: center
</style>
