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
              v-for="(channel, index) in channels"
              :key="`channel-${index}`"
              :name="channel.title"
              :is-connected="isConnected(channel.id)"
              @click.native="showConnectModal(channel)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import ConnectChannelModal from '~/components/dashboard/ConnectChannelModal'
export default {
  layout: 'dashboard',
  async asyncData({ store }) {
    try {
      const getChannels = store.getters['channels/getChannels']
      const channels = getChannels()
      if (!channels.length) {
        await store.dispatch('channels/all')
      }
      const getConnectedChannels =
        store.getters['channels/getConnectedChannels']
      const connectedChannels = getConnectedChannels()

      if (!connectedChannels.length) {
        await store.dispatch('channels/connectedChannels')
      }
    } catch (error) {
      // console.log(error, 'error')
    }
  },
  computed: {
    ...mapState({
      channels: (state) => {
        return [...state.channels.channels]
      },
    }),

    ...mapGetters({
      findConnectedChannel: ['channels/findConnectedChannel'],
    }),
  },
  methods: {
    isConnected(id) {
      return !!this.findConnectedChannel(id)
    },
    showConnectModal(selectedChannel) {
      selectedChannel.isConnected = this.isConnected(selectedChannel.id)
      this.$modal.show(ConnectChannelModal, { selectedChannel })
    },
  },
}
</script>
