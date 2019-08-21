export const auth = [
    { path: '/auth/login', name: 'login', component: () => import('../components/Auth/Login.vue') },
    { path: '/auth/register', name: 'register', component: () => import('../components/Auth/Register.vue') },
]