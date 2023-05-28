import {
    REQUEST_ORDER_HISTORY_TO_SPRING,
    REQUEST_ORDER_TO_SPRING,
} from './mutation-types'

export default {
    [REQUEST_ORDER_HISTORY_TO_SPRING] (state,  receivedData) {
        state.orders = receivedData
    },
    [REQUEST_ORDER_TO_SPRING] (state, receivedData) {
        state.order = receivedData
    },
    
}