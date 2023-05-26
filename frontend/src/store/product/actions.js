import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
  } from "./mutation-types";

import axiosInst from '@/utility/axiosInst'

export default {
    requestProductToSpring({ commit }, productId) {
      return axiosInst.get(`/product/${productId}`)
        .then((res) => {
          commit(REQUEST_PRODUCT_TO_SPRING, res.data)
        })
    },
    requestProductListToSpring({ commit }) {
      return axiosInst.get("/product/list").then((res) => {
        commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
      });
    },
}
