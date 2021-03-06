import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Card from './components/Card'
import ListCard from './components/ListCard'
import axios from 'axios'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)
Vue.prototype.$http = axios.create({ baseURL: process.env.VUE_APP_API_URL || '/web/api' })
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
