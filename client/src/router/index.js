import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";



Vue.use(Router)

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/scent',
      name: 'scent',
      component: () => import('../views/Scent.vue')
    },
    {
      path: '/chargeshare',
      name: 'chargeshare',
      component: () => import('../views/Chargeshare.vue')
    },
    {
      path: '/astroboy',
      name: 'astroboy',
      component: () => import('../views/Astroboy.vue')
    },

    {
      path: '/contact/index',
      name: 'index',
      component: () => import('../views/indexContact.vue'),
      beforeEnter: authGuard //require authentication for contact details route
    }
    // {
    //   path: '/event/:id',
    //   name: 'eventSingle',
    //   component: () => import('../views/EventSingle.vue'),
    //   beforeEnter: authGuard  //require authentication for event details route
    // }
  ]
})


