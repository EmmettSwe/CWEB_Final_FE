import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import SignUp from "@/components/SignUp.vue";
import { createRouter, createWebHistory} from 'vue-router'
import Login from '@/components/Login.vue';
import Feed from '@/components/Feed.vue';
import RecipePage from '@/components/RecipePage.vue';
import CreateRecipe from "@/components/CreateRecipe.vue";
import SearchProfiles from "@/components/SearchProfiles.vue";
import profile from "@/components/profile.vue";
import editProfile from "@/components/editProfile.vue";

const routes = [
    { path: '/signup', component: SignUp },
    { path: '/login', component: Login },
    { path: '/', component: Feed },
    { path: '/recipe/:id', component: RecipePage },
    { path: '/recipe/create', component: CreateRecipe },
    { path: '/profile/search', component: SearchProfiles },
    { path: '/profile/:id' , component: profile, props: true },
    { path: '/profile/edit/:id', component: editProfile, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')