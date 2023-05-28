import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/product/actions"
import mutations from "@/store/product/mutations"
import state from "@/store/product/states"

Vue.use(Vuex);

const productModule = {
    namespaced: true,
    state,
    actions,
    mutations,
};

export default productModule;