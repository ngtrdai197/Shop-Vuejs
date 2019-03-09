import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
