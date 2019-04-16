import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Toasted)
Vue.use(VueRouter, {
  iconPack: 'fontawesome'
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['AuthModule/GET_IS_LOGIN']) {
      next({ name: 'login' })
    }
    else {
      next()
    }
  } else {
    next()
  }
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
