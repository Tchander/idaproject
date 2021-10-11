import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import products from "./modules/products";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    products,
  },
  plugins: [vuexLocal.plugin],
});
