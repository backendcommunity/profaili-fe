export const state = () => ({
  channels: [],
  connected_channels: [],
})

export const getters = {
  getChannels: (state) => () => {
    return state.channels
  },
  getConnectedChannels: (state) => () => {
    return state.connected_channels
  },
}

export const mutations = {
  STORE_CHANNELS(state, channels) {
    state.channels = channels
  },
  STORE_CONNECTED_CHANNELS(state, channels) {
    state.connected_channels = channels
  },
}

export const actions = {
  all({ dispatch, commit }) {
    return this.$repositories.channel.index().then((data) => {
      const { success, channels } = data
      if (success) {
        commit('STORE_CHANNELS', channels)
      }
      return data
    })
  },

  connectedChannels({ dispatch, commit }) {
    return this.$repositories.channel.connected().then((data) => {
      const { success, channels } = data
      if (success) {
        commit('STORE_CONNECTED_CHANNELS', channels)
      }
      return data
    })
  },
}
