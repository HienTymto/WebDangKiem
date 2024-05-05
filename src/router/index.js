import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      children: [
        { path: '/home', component: () => import('../views/WelcomeView.vue') },
        { path: '/login', component: () => import('../views/LoginView.vue') },
        { path: '/register', component: () => import('../views/RegisterView.vue') },
        { path: '/dashboard', component: () => import('../views/DashboardView.vue') },
        { path: '/bookinglist', component: () => import('../views/BookingListView.vue') },
        { path: '/booking', component: () => import('../views/BookingView.vue') }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        { path: '/admin/listbooking', component: () => import('../views/admin/ListBooking.vue') },
        { path: '/admin/listaccount', component: () => import('../views/admin/ListAccount.vue') }
      ]
    }
  ]
})

export default router
