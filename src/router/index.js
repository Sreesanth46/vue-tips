import { createRouter, createWebHistory } from "vue-router";

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
    {
        path: '/transition-group',
        name: 'Transition Group',
        component: () => import("~/pages/TransitionGroup.vue")
    },
    {
        path: '/stagger-transition',
        name: 'Stagger Transition',
        component: () => import("~/pages/StaggerTransition.vue")
    },
    {
        path: '/auto-animate',
        name: 'Auto Animate',
        component: () => import("~/pages/AutoAnimate.vue")
    },
    {
        path: '/vueuse-motion',
        name: 'VueUse Motion',
        component: () => import("~/pages/MotionPlugin.vue")
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'text-cyan-400'
})

export default router
