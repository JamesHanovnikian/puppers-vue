import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newPuppies from '../views/newPuppies.vue'
import editPuppies from '../views/editPuppies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/puppies/new',
    name: 'newPuppies',
    component: newPuppies
  },
  {
    path: '/puppies/:id/edit',
    name: 'editPuppies',
    component: editPuppies
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
