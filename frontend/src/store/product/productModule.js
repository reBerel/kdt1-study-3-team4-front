import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/product/mutations";
import actions from "@/store/product/actions";

Vue.use(Vuex);

const productModule = {
    namespaced: true,
    
    actions,
    mutations,
};

export default productModule;