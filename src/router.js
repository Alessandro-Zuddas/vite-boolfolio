import { createRouter, createWebHistory } from 'vue-router';

import ProjectsList from './pages/ProjectsList.vue';

import AboutUs from './pages/AboutUs.vue';

import ChiSiamo from './pages/ChiSiamo.vue';

import ContactUs from "./pages/ContactUs.vue";

import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'projects',
        component: ProjectsList
    },
    {
        path: '/about-us',
        name: 'about',
        component: AboutUs
    },
    {
        path: '/chi-siamo',
        name: 'staff',
        component: ChiSiamo
    },
    {
        path: '/contattaci',
        name: 'contact-us',
        component: ContactUs
    },
    {
        path: '/blog/:slug',
        name: 'single-project',
        component: SingleProject
    },
    ]
});

export default router;
