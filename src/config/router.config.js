// import Home from '@/views/Home.vue'
import Index from '@/layout/BaseLayout.vue'

const RouterMap = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

export default RouterMap