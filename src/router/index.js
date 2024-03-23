import {createRouter, createWebHistory} from "vue-router";

export const routes = [
    {
        path: '/address-form',
        name: 'Address Form',
        component: () => import("~/pages/AddressPage.vue")
    },
    {
        path: '/gsap-transition',
        name: 'Gsap',
        component: () => import("~/pages/Gsap.vue")
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'text-cyan-400'
})

export default router
