<template>
  <div class="social-modal">
    <h2>Connect {{ article }} {{ displayName }} Channel</h2>
    <p>{{ selectedChannel.description }}</p>
    <button :style="{ background: selectedChannel.theme }" class="connect-link">
      <img :src="selectedChannel.icon" /> Connect
      {{ displayName }}
    </button>
    <span class="close">&times;</span>
  </div>
</template>

<script>
// import allAccounts from '~/common/allAccounts'
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
