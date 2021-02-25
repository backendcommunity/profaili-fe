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
              @click.native="showConnectModal(channel)"
              v-for="(channel, index) in channels"
              :key="`channel-${index}`"
              :icon="channel.icon"
              :name="channel.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import accounts from "../../common/allAccounts";
import ConnectChannelModal from "~/components/dashboard/ConnectChannelModal";
export default {
  layout: "dashboard",
  async asyncData({ store }) {
    try {
      const getChannels = store.getters["channels/getChannels"];
      const channels = getChannels();
      if (!channels.length) {
        // const data = {}
        // data.page = query.page ? query.page : 1
        // data.count = 22
        await store.dispatch("channels/all");
      }
    } catch (error) {
      console.log(error, "error");
    }
  },
  data: function () {
    return {
      accounts,
    };
  },
  computed: {
    ...mapState({
      channels: (state) => {
        return [...state.channels.channels];
      },
    }),
  },
  methods: {
    showConnectModal: function (selectedChannel) {
      this.$modal.show(ConnectChannelModal, { selectedChannel });
    },
  },
};
</script>
