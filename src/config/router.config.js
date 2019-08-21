/** 
 * redirect   路由重定向
 * 
 * alias  别名-->访问目标路由和别名路由一样
*/
import layout from '@/layout/BaseLayout.vue'

const RouterMap = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name:'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '*',
    redirect: '/404',
  }
]

export default RouterMap