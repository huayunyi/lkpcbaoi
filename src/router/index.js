import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SimpleZoom from '../views/SimpleZoom.vue'
import OffectZoom from '../views/OffectZoom.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simple-zoom',
    name: 'SimpleZoom',
    component: SimpleZoom
  },
  {
    path: '/offect-zoom',
    name: 'OffectZoom',
    component: OffectZoom
  }
  // 其他页面可在此扩展
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
