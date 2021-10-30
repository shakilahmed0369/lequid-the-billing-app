import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Flat from "../components/Flat.vue"
const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/flats',
        name: 'flat.index',
        component: Flat 
    },
    {
        path: '/shops',
        name: 'shop.index',
        component: Home
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});