<template>
  <div class="e-container">
    <div class="row">
      <div class="col-md-12">
        <div class="e-content">
          <h2>Hi {{ $auth.user.name }}</h2>
          <p class="sub-text">
            Please link up your social networks to start sycing up your profile.
          </p>
          <div class="e-grid-row marginTop">
            <SocialCard
              v-for="(channel, index) in channels"
              :key="`channel-${index}`"
              :icon="channel.icon"
              :name="channel.title"
            />
          </div>
          <div class="button-container">
            <nuxt-link to="/dashboard/add-account" class="add-button"
              ><img :src="plus" />Add other channels</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import initialAccounts from '../../common/initialAccounts'
import plus from '~/assets/icons/plus.svg'
export default {
  layout: 'dashboard',
  middleware: ['auth'],

  async asyncData({ store }) {
    try {
      const getChannels = store.getters['channels/getConnectedChannels']
      const channels = getChannels()

      if (!channels.length) {
        // const data = {}
        // data.page = query.page ? query.page : 1
        // data.count = 22
        await store.dispatch('channels/connectedChannels')
      }
    } catch (error) {
      // console.log(error, 'error')
    }
  },
  data() {
    return {
      initialAccounts,
      plus,
    }
  },

  computed: {
    ...mapState({
      channels: (state) => {
        return [...state.channels.connected_channels]
      },
    }),
  },
}
</script>
<style lang="sass" scoped>
h2
  margin-bottom: 1rem
</style>
