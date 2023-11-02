// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/LayoutDefault.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'todos',
        name: 'Todos',
        component: () => import('@/views/TodosPage.vue')
      },
      {
        path: 'done',
        name: 'Done',
        component: () => import('@/views/DonePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
