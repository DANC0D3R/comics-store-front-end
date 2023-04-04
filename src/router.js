import { createRouter, createWebHistory } from "vue-router";
import HomepageApp from "./pages/HomepageApp.vue";
import ShowComicApp from "./pages/ShowComicApp.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path:'/',
        name:'home',
        component: HomepageApp
    },
        {
            path: '/show/:id',
            name: 'show-comic',
            component: ShowComicApp
        }
    ]
});

export {router}