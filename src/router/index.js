import VueRouter from 'vue-router'
import Vue from 'vue'
import GlobalFrame from '@/views/global-frame.vue'
import Home from '@/views/home/home.vue'
import Portfolio from '@/views/portfolio/portfolio.vue'
import NotFound from '@/views/not-found.vue'
Vue.use(VueRouter)

const MAIN_ROOTS = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
]


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: '_GlobalFrame',
            component: GlobalFrame,
            children: MAIN_ROOTS
        },
        {
            path: '*',
            name:'Error',
            component: NotFound,
        }
    ],
    mode: 'history'
})

export default router