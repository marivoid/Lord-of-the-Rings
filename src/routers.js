import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddTrivia from './components/AddTrivia.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddTrivia',
        component: AddTrivia,
        path: '/addTrivia'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;