<template>
  <div :class="[{ disabledDiv: isConnected }, 'social-card']">
    <img :src="iconFinder" />
    <p>{{ name }}</p>
  </div>
</template>
<script>
import accounts from '../../common/allAccounts'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    isConnected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    iconFinder() {
      const account = accounts.find((account) => {
        if (account.name === this.name) {
          return account
        }
      })
      if (account) {
        return account.icon
      }
      return ''
    },
  },
}
</script>
<style lang="sass">
.social-card
  display: flex
  width: 100%
  background-color: rgba(#143B8C, .8)
  border-radius: 7px
  flex-direction: column
  align-items: center
  cursor: pointer
  justify-content: center
  p
    color: white
    font-weight: 600
    font-size: 1.4rem
  img
    margin-bottom: 1rem
    width: 2.6rem

.disabledDiv
  pointer-events: none
  opacity: 0.4
</style>
