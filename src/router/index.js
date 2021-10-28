import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue"

const router = [
    {
        path: '/',
        name: 'index',
        component: HelloWorld 
    },
];

export default createRouter({
    history: createWebHistory(),
    router,
});