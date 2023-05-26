import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductRegisterPage from '@/views/product/ProductRegisterPage.vue'
import ProductListPage from '@/views/product/ProductListPage.vue'

Vue.use(VueRouter)

const productRoutes = [
      {
        path: '/product-register-page',
        name: 'ProductRegisterPage',
        component: ProductRegisterPage
      },
      {
        path: '/Product-list-page',
        name: 'ProductListPage',
        component: ProductListPage
      }

]



export default productRoutes
