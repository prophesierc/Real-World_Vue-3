import { createRouter, createWebHistory } from 'vue-router'
import EventView from '@/views/EventView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EventView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/event/123',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails.vue'),
  }
]

const router = createRouter(
{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router