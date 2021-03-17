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
  findConnectedChannel: (state) => (id) => {
    return state.connected_channels.find((channel) => {
      if (channel.id === id) return channel
    })
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
  connect({ dispatch, commit }, data) {
    return this.$repositories.channel.connect(data).then((data) => {
      const { success } = data
      if (success) {
        return data
      }
      return false
    })
  },
}
