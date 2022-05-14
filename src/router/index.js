import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      },
      {
        path: 'control',
        name: 'control',
        component: () => import('@/views/control/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
