export const state = () => ({
  user: [],
  topMerchants: []
});

export const mutations = {
  storeUser(state, user) {
    state.user = user;
  },
  storeTopMerchants(state, merchants) {
    state.topMerchants = merchants;
  }
};

export const actions = {
  register({ dispatch, commit }, form) {
    return this.$repositories.user.create(form).then(data => {
      const { success } = data;
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data;
    });
  },

  recoverPassword({ dispatch, commit }, form) {
    return this.$repositories.user.recoverPassword(form).then(data => {
      const { success } = data;
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data;
    });
  },

  resetPassword({ dispatch, commit }, form) {
    return this.$repositories.user.resetPassword(form).then(data => {
      const { success } = data;
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data;
    });
  }
};
