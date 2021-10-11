export default {
  namespaced: true,
  actions: {
    addProduct({ commit }, data) {
      try {
        commit("updateProducts", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateProducts(state, payload) {
      state.products.push(payload);
    },
  },
  getters: {
    products: (state) => state.products,
  },
  state: {
    products: [],
  },
};
