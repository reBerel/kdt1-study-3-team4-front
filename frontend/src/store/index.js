import Vue from 'vue'
import Vuex from 'vuex'

import productModule from '@/store/product/productModule.js'
import OrderModule from './order/OrderModule'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    productModule: productModule,
    orderModule: OrderModule,

  },
})

export default store
