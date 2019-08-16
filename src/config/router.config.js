import Home from '@/views/Home.vue'

const RouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

export default RouterMap