import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import Flat from "../components/Flat.vue"
import Shop from "../components/Shop.vue"
import ShopPaidList from "../components/ShopPaidList.vue"
import FlatPaidList from "../components/FlatPaidList.vue"
import Create from "../components/Create.vue"
import AddBill from "../components/AddBill.vue"
import ShopView from "../components/ShopView.vue"
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
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/shops',
        name: 'shop.index',
        component: Shop
    },
    {
        path: '/shops/:id/list',
        name: 'shop.list',
        component: ShopPaidList,
        props: true
    },
    {
        path: '/shops/:id/view',
        name: 'shop.view',
        component: ShopView,
        props: true
    },
    {
        path: '/flats/:id/list',
        name: 'flat.paidlist',
        component: FlatPaidList,
        props: true
    },
    {
        path: '/addbill/:id',
        name: 'addbill',
        component: AddBill,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});