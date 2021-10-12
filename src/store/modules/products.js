export default {
  namespaced: true,
  actions: {
    addProduct({ commit }, data) {
      try {
        commit("addProduct", data);
      } catch (e) {
        console.log(e);
      }
    },
    deleteProduct({ commit }, data) {
      try {
        commit("deleteProduct", data);
      } catch (e) {
        console.log(e);
      }
    },
    incrementId({ commit }) {
      try {
        commit("incrementId");
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    deleteProduct(state, payload) {
      let index = state.products.findIndex((i) => i.id === payload);
      state.products.splice(index, 1);
    },
    incrementId(state) {
      state.idCounter++;
    },
  },
  getters: {
    products: (state) => state.products,
    idCounter: (state) => state.idCounter,
  },
  state: {
    products: [],
    idCounter: 1,
  },
};
