import {
    createRouter,
    createWebHashHistory,

} from "vue-router";

const routes = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
}, {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/regist/regist.vue')
}, {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue')
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router