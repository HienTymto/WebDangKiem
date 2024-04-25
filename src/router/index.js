import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      children: [
        { path: '/login', component: () => import('../views/LoginView.vue') },
        { path: '/register', component: () => import('../views/RegisterView.vue') },
        { path: '/dashboard', component: () => import('../views/DashboardView.vue') }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        { path: '/admin/listbooking', component: () => import('../views/admin/ListBooking.vue') }
      ]
    }
  ]
})

export default router
