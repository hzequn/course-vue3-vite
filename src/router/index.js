import { createRouter, createWebHistory } from "vue-router"

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { 
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes:constantRoutes
})

router.addRoute({
  path: '/about',
  component: () => import('@/views/about/index.vue'),
  meta: {
    title: '关于'
  }
}
)

export default router
