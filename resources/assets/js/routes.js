import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        name: 'home',
        component:require('./components/post/index')
    }
];


const router = new VueRouter({
    routes
});

export default router
