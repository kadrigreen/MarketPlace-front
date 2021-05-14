import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace2 from '../views/Marketplace2.vue'
import NewAdvertisement from '../views/NewAdvertisement.vue'
import Category from '../views/Category.vue'
import Marketplace from "../views/Marketplace.vue"
import addAdvertisement from "../views/addAdvertisement.vue"
import Advertisement from "../views/Advertisement.vue"
import AboutPage from "../views/AboutPage";


Vue.use(VueRouter)

const routes = [

  {
    path: '/marketplace2',
    name: 'Marketplace2',
    component: Marketplace2
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
    path: '/marketplace',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/Advertisement/:id',
    name: 'Advertisement',
    component: Advertisement
  },
  {
    path: '/addAdvertisement',
    name: 'addAdvertisement',
    component: addAdvertisement,
  },
  {
    path: '/aboutPage',
    name: 'aboutPage',
    component: AboutPage,
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
