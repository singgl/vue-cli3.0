import Vue from 'vue'
import Router from 'vue-router'
import RouterMap from '@/config/router.config'

Vue.use(Router)

// history --history路由

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: RouterMap
})

export default router;

