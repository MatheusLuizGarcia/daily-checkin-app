import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import Info from '../pages/Info.vue'
import NotFound from '../pages/NotFound.vue'
import Activities from '../pages/Activities.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router