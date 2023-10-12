import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/OLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import(`@/views/HomeView.vue`)
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: 'home'
    }
  ]
})

export default router
