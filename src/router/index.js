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
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router