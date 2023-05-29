import {
    REQUEST_ORDER_HISTORY_TO_SPRING,
    REQUEST_ORDER_TO_SPRING
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestOrderToSpring({ commit }, orderId) {
        console.log(", orderId: " + orderId)

        return axiosInst.get(`/order/${orderId}`)
            .then((res) => {
                console.log(res.data)
                commit(REQUEST_ORDER_TO_SPRING, res.data)
            })
    },

    requestOrderHistoryToSpring({ commit }, accountId) {
        console.log(", accountId: " + accountId)

        return axiosInst.get(`/order/history/${accountId}`)
            .then((res) => {
                console.log(res.data)
                commit(REQUEST_ORDER_HISTORY_TO_SPRING, res.data)
            })
    },
    requestDeleteOrderSpring({ }, orderId) {
        return axiosInst.delete(`/order/${orderId}`)
            .then((res) => {
                alert('주문 취소')
            })
            .catch(() => {
                alert('문제 발생')
            })
    },
    requestRegistOrderToSpring({ }, payload) {
        console.log(payload)
        const { productId, userToken } = payload
        console.log(userToken)
        return axiosInst.post('/order/register', { productId, userToken })
            .then((res) => {
                if (res.data) {
                    alert('구매 성공!')
                } else {
                    alert('구매 실패')
                }
            })
    },
}
