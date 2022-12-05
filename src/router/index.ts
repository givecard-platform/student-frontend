import { createRouter, createWebHistory } from 'vue-router'
import ReportingView from '../views/ReportingView.vue'
import SpendingView from '../views/SpendingView.vue'
import BudgetingView from '../views/BudgetingView.vue'
// import DataView from '../views/DataView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Reporting',
      component: ReportingView
    },
    {
      path: '/spending',
      name: 'Spending',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SpendingView.vue')
    },
    {
      path: '/budget',
      name: 'Budgeting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BudgetingView.vue')
    },
    // used for testing asynchronous fetching in views/DataView.vue
    // {
    //   path: '/testing_async',
    //   name: 'Testing',
    //   component: DataView
    // },
  ]
})

export default router
