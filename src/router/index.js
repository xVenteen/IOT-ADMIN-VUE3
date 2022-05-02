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
}, {
    path: '/temperature',
    name: 'temperature',
    component: () => import('@/views/temperature/temperature.vue')
}, {
    path: '/light',
    name: 'light',
    component: () => import('@/views/light/light.vue')
}, {
    path: '/humidity',
    name: 'humidity',
    component: () => import('@/views/humidity/humidity.vue')

}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router