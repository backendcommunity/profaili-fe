<template>
  <div class="social-modal">
    <h2>Connect {{ article }} {{ displayName }} Channel</h2>
    <p>{{ selectedChannel.description }}</p>
    <b-button
      :style="{ background: selectedChannel.theme }"
      class="connect-link"
      @click.prevent="connect"
    >
      <img :src="iconFinder" /> Connect
      {{ displayName }}
    </b-button>
    <span class="close">&times;</span>
  </div>
</template>

<script>
import accounts from '../../common/allAccounts'
import { correctArticle, sentenceCase } from '~/utils/helpers'
export default {
  name: 'ConnectChannelModal',
  props: {
    selectedChannel: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    article() {
      return correctArticle(this.selectedChannel.title)
    },
    displayName() {
      return sentenceCase(this.selectedChannel.title)
    },

    iconFinder() {
      const account = accounts.find((account) => {
        if (account.name === this.selectedChannel.title) {
          return account
        }
      })
      if (account) {
        return account.icon
      }
      return ''
    },
  },
  methods: {
    getURL() {
      return !this.selectedChannel.isConnected
        ? `https://github.com/login/oauth/authorize?client_id=14235e0e35ebb82adc8a&allow_signup=true&scope=user&state=${this.$auth.user.id}_${this.selectedChannel.id}`
        : ''
    },
    connect() {
      if (!this.selectedChannel.isConnected)
        window.open(
          this.getURL(),
          'win',
          'width=800,height=400,screenX=200,screenY=200'
        )
    },
  },
}
</script>
<style lang="sass" scoped>
.social-modal
  padding: 50px 30px
  position: relative
  .close
    position: absolute
    right: 1rem
    top: 1rem
    color: #555555
    font-size: 2rem
  h2
    font-size: 1.75rem
    weight: 600
    color: #333
  p
    color: #666
    font-weight: 500
    margin-top: 1.5rem
  .connect-link
    border: none
    margin-top: 1.5rem
    border-radius: 7px
    color: white
    font-weight: 600
    font-size: 1.2rem
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    padding: 12px 0
    img
      height: 24px
      margin-right: 1.5rem
</style>
