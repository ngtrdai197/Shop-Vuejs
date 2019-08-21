import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
import { dashboard } from './routes/dashboard.route'
import { admin } from './routes/admin.route'
import { auth } from './routes/auth.route'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Toasted)
Vue.use(VueRouter, {
  iconPack: 'fontawesome'
})

const router = new VueRouter({
  routes: [
    ...dashboard,
    ...admin,
    ...auth
  ],
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
