import Product from "./components/Product/Product.vue"
import Homepage from "./components/Homepage.vue"
import ProductDetail from './components/Product/ProductDetail'
import Contact from './components/Contact'
import Service from './components/Service'
import Cart from './components/Cart'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from './components/NotFound'
import Admin from './components/Admin/Admin'
import M_Product from './components/Admin/Manager_Product/M_Product'
import User from './components/Admin/User/User'

export const routes = [
    { path: '/', component: Homepage },
    { path: '/home', name: 'home', redirect: '/', meta: { title: 'Home' } },
    { path: '/product', name: 'product', component: Product },
    { path: '/product/:product_name/:id.html', component: ProductDetail, meta: { title: 'Product Details' } },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/service', name: 'service', component: Service },
    {
        path: '/auth/admin', name: 'admin', component: Admin, children: [
            {
                path: 'product/product-manager', name: 'product-manager', component: M_Product,
            },
            {
                path: 'user/user-manager', name: 'user', component: User,
            }
            
        ]
    },
    { path: '/cart', name: 'cart', component: Cart, meta: { requiresAuth: true } },
    { path: '/auth/login', name: 'login', component: Login },
    { path: '/auth/register', name: 'register', component: Register },
    { path: '/**', component: NotFound },
]