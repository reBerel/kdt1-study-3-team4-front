import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import productModule from '@/store/product/productModule.js'
import OrderModule from './order/OrderModule'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    productModule: productModule,
    orderModule: OrderModule,

  },
})

export default store
