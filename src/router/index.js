import VueRouter from 'vue-router'
import Vue from 'vue'
import GlobalFrame from '@/views/global-frame.vue'
import Home from '@/views/home/home.vue'
import Portfolio from '@/views/portfolio/portfolio.vue'
import NotFound from '@/views/not-found.vue'
import CurriculumVitae from '@/views/cv/curriculum-vitae.vue'

Vue.use(VueRouter)

const MAIN_ROOTS = [
    {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
            nav: {
                available: false,
                name: "Lincoln Yan"
            }
        }
    },
    {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio,
        meta: {
            nav: {
                available: true,
                name: "Portfolio"
            }
        }
    },
    {
        path: 'curriculum-vitae',
        name: 'Curriculum Vitae',
        component: CurriculumVitae,
        meta: {
            nav: {
                available: true,
                name: "Curriculum Vitae"
            }
        }
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
            name: 'Error',
            component: NotFound,
        }
    ],
    mode: 'history',
    scrollBehavior: () => ({ y: 0 })
})

export default router