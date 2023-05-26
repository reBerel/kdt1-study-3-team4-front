import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultSetRoutes from './defaultRouterSet'
import productRoutes from './product'
Vue.use(VueRouter)

const routes = [
  ...defaultSetRoutes,
  ...productRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
