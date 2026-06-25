import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/HomePage.vue';
import About from '@/pages/AboutPage.vue';
import Cinematography from '@/pages/CinematographyPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/cinematography', name: 'Cinematography', component: Cinematography },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;