import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultSetRoutes from './defaultRouterSet'
import productRoutes from './product'
import accountRoutes from './account'
Vue.use(VueRouter)

const routes = [
  ...defaultSetRoutes,
  ...productRoutes,
  ...accountRoutes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
