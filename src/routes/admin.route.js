export const admin = [
    {
        path: '/admin', component: () => import('../components/Admin/Admin.vue'), children: [
            { path: '', redirect: 'user' },
            { path: 'user', name: 'user', component: () => import('../components/Admin/User.vue') },
            { path: 'product', name: 'product-manager', component: () => import('../components/Admin/M_Product.vue') }
        ]
    },
]