import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductRegisterPage from '@/views/product/ProductRegisterPage.vue'
import ProductListPage from '@/views/product/ProductListPage.vue'
import ProductReadPage from '@/views/product/ProductReadPage.vue'
import ProductModifyPage from '@/views/product/ProductModifyPage.vue'

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
  },
  {
    path: "/product-read-page/:productId",
    name: "ProductReadPage",
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify-page/:productId',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true,
    }
  },

]



export default productRoutes
