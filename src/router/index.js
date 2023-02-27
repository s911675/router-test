import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/home/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {requiresAuth: true, menuId: 1},
    }, {
        path: '/about',
        name: 'About',
        component: () => import('@/about/AboutView.vue'),
        meta: {requiresAuth: true, menuId: 2},

    }, {
        path: '/brazil',
        name: 'Brazil',
        component: () => import('@/home/BrazilView.vue'),
    }, {
        path: '/destination/:id',
        name: 'Destination',
        component: () => import('@/about/DestinationView.vue'),
        beforeEnter(to) {
            const exist = false;
            if (!exist) {
                return {
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash,
                };
            }
        },
    }, {path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/etc/NotFound.vue')},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // linkActiveClass: 'router-active-link',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0}), 300);
        });
    },
});

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !window.user) {
        return {name: 'login', query: {redirect: to.fullPath}};
    }
});

export default router;
