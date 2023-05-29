import Vue from 'vue'
import VueRouter from 'vue-router'

import OrderHistoryPage from '@/views/order/OrderHistoryPage.vue'
import OrderReadPage from '@/views/order/OrderReadPage.vue'


Vue.use(VueRouter)

const orderRoutes = [
      {
        path: '/order-read-page/:orderId',
        name: 'OrderReadPage',
        component: OrderReadPage
      },
      {
        path: '/order-history-page/:userToken',
        name: 'OrderHistoryPage',
        component: OrderHistoryPage
      }

]



export default orderRoutes
