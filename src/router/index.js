import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingString.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtml.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInput.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckbox',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckbox.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadio.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelect.vue')
  },
  {
    path: '/databinding/textarea',
    name: 'DataBindingTextarea',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingTextarea.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttribute.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClass.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyle.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingList.vue')
  },
  {
    path: '/databinding/listserver',
    name: 'DataBindingListServer',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListServer.vue')
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventClick.vue')
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventChange.vue')
  },
  {
    path: '/event/blur',
    name: 'EventBlur',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventBlur.vue')
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventKey.vue')
  },
  {
    path: '/extra/renderingif',
    name: 'RenderingIf',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/RenderingIf.vue')
  },
  {
    path: '/extra/renderingshow',
    name: 'RenderingShow',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/RenderingShow.vue')
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/Computed.vue')
  },
  {
    path: '/extra/watch',
    name: 'Watch',
    component: () => import(/* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/Watch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
