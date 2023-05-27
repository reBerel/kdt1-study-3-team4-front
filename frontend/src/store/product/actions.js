import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
  } from "./mutation-types";

import axiosInst from '@/utility/axiosInst'

export default {
    requestProductListToSpring({ commit }) {
      return axiosInst.get("/product/list").then((res) => {
        commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
      });
    },
    requestRegisterProductToSpring ({}, payload) {
        const { productInfo, imageFile} = payload
        return axiosInst.post('/product/register', { productInfo, imageFile})
            .then((res) => {
                if(res.data.isSuccessRegister){
                alert('게시물 등록 성공!')
                return res.data} else{
                    alert('문제 발생')
                }
            })
            .catch(() => {
                alert('문제 발생!')               
            })
    },
}