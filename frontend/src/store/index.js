import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import productModule from '@/store/product/productModule.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    productModule: productModule,
  

  },
})

export default store
