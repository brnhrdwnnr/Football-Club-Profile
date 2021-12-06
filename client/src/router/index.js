import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team-area/:id',
    name: 'TeamArea',
    component: () => import('../views/TeamArea.vue')
  },
  {
    path: '/team/:id',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
