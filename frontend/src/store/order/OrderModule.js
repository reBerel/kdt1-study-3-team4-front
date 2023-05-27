import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/order/mutations"
import actions from "@/store/order/actions"
import state from "@/store/order/states"

Vue.use(Vuex)

const OrderModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default OrderModule