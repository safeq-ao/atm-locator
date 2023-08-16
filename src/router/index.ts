import { createRouter, createWebHistory } from 'vue-router'
import FeedbackViewVue from '@/views/FeedbackView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: import('@/views/HomeView.vue')
        },
        {
            path: '/feedback',
            component: import('@/views/FeedbackView.vue')
        },
        {
            path: '/about',
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/help',
            component: () => import('../views/HelpView.vue')
        }
    ]
})

export default router
