export const dashboard = [
    {
        path: '/', component: () => import('../components/Layout.vue'), children: [
            { path: '', redirect: 'home' },
            { path: 'home', component: () => import('../components/Homepage.vue') },
            { path: 'product/:product_name/:id.html', component: () => import('../components/Product/ProductDetail.vue'), meta: { title: 'Product Details' } },
            { path: 'contact', name: 'contact', component: () => import('../components/Contact.vue') },
            { path: 'service', name: 'service', component: () => import('../components/Service.vue') },
            { path: 'cart', name: 'cart', component: () => import('../components/Cart.vue'), meta: { requiresAuth: true } },
        ]
    },
    { path: '*', component: () => import('../components/NotFound.vue') },
]