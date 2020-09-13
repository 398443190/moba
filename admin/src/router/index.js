import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate'
import CategoryList from '../views/CategoryList'
import ItemCreate from '../views/ItemCreate'
import ItemList from '../views/ItemList'
import HeroCreate from '../views/HeroCreate'
import HeroList from '../views/HeroList'
import ArticleCreate from '../views/ArticleCreate'
import ArticleList from '../views/ArticleList'

Vue.use(VueRouter)

const routes = [
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
      { path: '/articles/list', component: ArticleList }
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

export default router
