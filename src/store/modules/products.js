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
    productsByDefault: (state) => state.products,
    productsByName: (state) =>
      state.products
        .slice(0)
        .sort((prev, next) => (next.name < prev.name ? 1 : -1)),
    productsByMax: (state) =>
      state.products
        .slice(0)
        .sort((prev, next) =>
          Number(next.price.split(" ").join("")) <
          Number(prev.price.split(" ").join(""))
            ? 1
            : -1
        ),
    productsByMin: (state) =>
      state.products
        .slice(0)
        .sort((prev, next) =>
          Number(prev.price.split(" ").join("")) <
          Number(next.price.split(" ").join(""))
            ? 1
            : -1
        ),
    idCounter: (state) => state.idCounter,
  },
  state: {
    products: [],
    idCounter: 1,
  },
};
