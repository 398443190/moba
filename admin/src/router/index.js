import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate'
import CategoryList from '../views/CategoryList'
import ItemCreate from '../views/ItemCreate'
import ItemList from '../views/ItemList'
import HeroCreate from '../views/HeroCreate'
import HeroList from '../views/HeroList'
import ArticleCreate from '../views/ArticleCreate'
import ArticleList from '../views/ArticleList'

import AdCreate from '../views/AdCreate'
import AdList from '../views/AdList'

import AdminUserCreate from '../views/AdminUserCreate'
import AdminUserList from '../views/AdminUserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryCreate },
      { path: '/categories/edit/:id', component: CategoryCreate, props: true },
      { path: '/categories/list', component: CategoryList },

      { path: '/items/create', component: ItemCreate },
      { path: '/items/edit/:id', component: ItemCreate, props: true },
      { path: '/items/list', component: ItemList },

      { path: '/heroes/create', component: HeroCreate },
      { path: '/heroes/edit/:id', component: HeroCreate, props: true },
      { path: '/heroes/list', component: HeroList },

      { path: '/articles/create', component: ArticleCreate },
      { path: '/articles/edit/:id', component: ArticleCreate, props: true },
      { path: '/articles/list', component: ArticleList },

      { path: '/ads/create', component: AdCreate },
      { path: '/ads/edit/:id', component: AdCreate, props: true },
      { path: '/ads/list', component: AdList },

      { path: '/admin_users/create', component: AdminUserCreate },
      { path: '/admin_users/edit/:id', component: AdminUserCreate, props: true },
      { path: '/admin_users/list', component: AdminUserList }
    ]
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
  routes
})
router.beforeEach((to, form, next) => {
  console.log(to, 'to')
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
