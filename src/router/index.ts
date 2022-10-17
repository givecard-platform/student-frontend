import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportingView from '../views/ReportingView.vue'
import SpendingView from '../views/SpendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Reporting',
      component: ReportingView
    },
    {
      path: '/about',
      name: 'Spending',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SpendingView.vue')
    }
  ]
})

export default router
