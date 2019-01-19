import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('@/views/category')
  },
  {
    path: '/rooms/:name',
    name: 'rooms',
    props: true,
    component: () => import('@/views/rooms')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail')
  },
  {
    path: '*',
    component: () => import('@/views/home')
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
