import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import productModule from '@/store/product/productModule.js'
import OrderModule from './order/OrderModule'
import MemberModule from './member/MemberModule';

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    productModule: productModule,
    orderModule: OrderModule,
    MemberModule: MemberModule,
  },
})

export default store
