import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../layouts/Home.vue'),
            children: [
                {

                    path: '',
                    name: 'users',
                    component: () => import('../views/Users.vue'),
                }
            ]
        }
    ]
})

export default router
