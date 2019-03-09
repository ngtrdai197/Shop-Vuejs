import Product from "./components/Product/Product.vue"
import Homepage from "./components/Homepage.vue"
import ProductDetail from './components/Product/ProductDetail'
import Contact from './components/Contact'
import Service from './components/Service'
import Cart from './components/Cart'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from './components/NotFound'

export const routes = [
    { path: '/', component: Homepage },
    { path: '/home', redirect: '/' },
    { path: '/product', component: Product },
    { path: '/product/:product_name/:id.html', component: ProductDetail },
    { path: '/contact', component: Contact },
    { path: '/service', component: Service },
    { path: '/cart', component: Cart },
    { path: '/auth/login', component: Login },
    { path: '/auth/register', component: Register },
    { path: '/**', component: NotFound },
]