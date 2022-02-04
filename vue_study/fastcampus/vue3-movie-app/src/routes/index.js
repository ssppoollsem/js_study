import { createRouter, createWebHashHistory } from 'vue-router'
import About from './About'
import Home from './Home'
import Movie from './Movie'

export default createRouter({
    // hash
    history: createWebHashHistory(),
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/movie/:id',
            component: Movie
        }
    ] 
})