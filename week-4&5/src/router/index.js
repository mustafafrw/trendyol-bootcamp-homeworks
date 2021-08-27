import Vue from 'vue'
import VueRouter from 'vue-router'
import Starships from '../views/Starships/index.vue'
import Starship from '../views/Starship/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Starship/:id',
    name: 'Starship',
    component: Starship
  },
  {
    path: '/',
    name: 'Starships',
    component: Starships
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
