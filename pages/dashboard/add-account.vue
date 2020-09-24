<template>
  <div class="e-container">
    <div class="row">
      <div class="col-md-12">
        <div class="e-content">
          <h2 class="title-h2">Select a social network</h2>
          <p class="sub-text">
            Pick a social network, connect it and start syncing
          </p>
          <div class="e-grid-row marginTop">
            <SocialCard
              @click.native="showConnectModal(account)"
              v-for="(account, index) in accounts"
              :key="`account-${index}`"
              :icon="account.icon"
              :name="account.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import accounts from "../../common/allAccounts";
import ConnectAccountModal from "~/components/dashboard/ConnectAccountModal"
export default {
  layout: "dashboard",
  data: function() {
    return {
      accounts
    };
  },
  methods: {
    showConnectModal: function(selectedAccount) {
      this.$modal.show(ConnectAccountModal, {selectedAccount})
    }
  }
};
</script>
