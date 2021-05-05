import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Marketplace from '../views/Marketplace.vue'
import NewAdvertisement from '../views/NewAdvertisement.vue'
import Category from '../views/Category.vue'
import Main from "../views/Main.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/newAdvertisement',
    name: 'newAdvertisement',
    component: NewAdvertisement
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
