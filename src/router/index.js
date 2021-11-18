import { createRouter, createWebHistory } from "vue-router"
import { getToken } from "@/utils/auth"
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { 
      title: '登录'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },
      {
        path: '/usermanage',
        name:'usermanage',
        component: () => import('@/views/usermanage/list.vue'),
        meta: { title: '用户管理', icon: 'el-icon-s-home', affix: true },
        redirect:'/usermanage/list',
        children: [
          {
            path: '/usermanage/list',
            name: 'list',
            component: () => import('@/views/usermanage/list.vue'),
            meta: { title: '用户列表', icon: 'el-icon-s-home' },
            children:[]
          }
        ]
      },
    ]
  }
]
export const asyncRoutes = []
export const router = createRouter({
  history: createWebHistory(),
  routes:constantRoutes
})

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
//
export default router
