<template>
  <div class="e-container">
    <div class="row">
      <div class="col-md-12">
        <div class="e-content">
          <h2>Hi Eric McWinNEr</h2>
          <p class="sub-text">
            Please link up your social networks to start sycing up your profile.
          </p>
          <div class="e-grid-row marginTop">
            <SocialCard
              v-for="(account, index) in initialAccounts"
              :key="`account-${index}`"
              :icon="account.icon"
              :name="account.name"
            />
          </div>
          <div class="button-container">
            <nuxt-link to="/dashboard/add-account" class="add-button"><img :src="plus" />Add other accounts</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
h2
  margin-bottom: 1rem

</style>
<script>
import initialAccounts from "../../common/initialAccounts";
import plus from "~/assets/icons/plus.svg"
export default {
  layout: "dashboard",
  data: function() {
    return {
      initialAccounts,
      plus
    };
  }
};
</script>
