import VueRouter from 'vue-router'
import Vue from 'vue'
import GlobalFrame from '@/views/global-frame.vue'
import Home from '@/views/home/home.vue'
import Portfolio_Frame from '@/views/portfolio/portfolio-frame.vue'
import NotFound from '@/views/not-found.vue'
import CurriculumVitae from '@/views/cv/curriculum-vitae.vue'
import Connect from '@/views/connect/connect.vue'
import Journey from '@/views/journey/journey.vue'
import Acknowledgements from '@/views/acknowledgements/acknowledgements.vue'
import GoFrame from '@/views/go/go-frame.vue'
import GoUSYD from "@/views/go/usyd.vue"

import Portfolio from '@/views/portfolio/portfolio.vue'
import DocumentX from "@/views/portfolio/documentx.vue"
import DocumentXIOS from "@/views/portfolio/documentx-ios.vue"
import COVIDWishes from '@/views/portfolio/covidwishes.vue'
import NowAskMe from "@/views/portfolio/nowaskme.vue"
import yyjlincoln from "@/views/portfolio/yyjlincoln.vue"

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
            },
            title: "Hi, I'm Lincoln Yan."
        }
    },
    {
        path: 'go',
        name: '_Go-Frame',
        component: GoFrame,
        meta: {
            nav: {
                available: false,
                name: "Go:Frame"
            },
        },
        children: [
            {
                path: '',
                name: 'Go-Frame',
                component: NotFound,
                meta: {
                    nav: {
                        available: false,
                        name: "Go:Frame"
                    },
                    title: "Go:Frame"
                }
            },
            {
                path: 'usyd',
                name: 'usyd',
                component: GoUSYD,
                meta: {
                    nav: {
                        available: false,
                        name: "Additional Information & Supporting Evidence for the Schorlarship Application"
                    },
                    title: "YIJUN YAN - Additional Information & Supporting Evidence for the Schorlarship Application"
                }
            }
        ]
    },
    {
        path: 'portfolio',
        name: '_Portfolio-Frame',
        component: Portfolio_Frame,
        meta: {
            nav: {
                available: true,
                name: "Portfolio"
            },
            title: "Portfolio"
        },
        children: [
            {
                path: '',
                name: 'Portfolio',
                component: Portfolio,
                meta: {
                    nav: {
                        available: true,
                        name: "Portfolio"
                    },
                    title: "Portfolio"
                }
            },
            {
                path: 'wishes',
                name: 'COVID Wishes',
                component: COVIDWishes,
                meta: {
                    nav: {
                        available: true,
                        name: "COVID Wishes",
                        translucent: true
                    },
                    title: "COVID Wishes"
                }
            },
            {
                path: 'documentx',
                name: 'documentx',
                component: DocumentX,
                meta: {
                    nav: {
                        available: true,
                        name: "DocumentX",
                    },
                    title: "DocumentX"
                }
            },
            {
                path: 'documentx-ios',
                name: 'documentx-ios',
                component: DocumentXIOS,
                meta: {
                    nav: {
                        available: true,
                        name: "DocumentX for iOS, iPadOS & MacOS",
                        translucent: true
                    },
                    title: "DocumentX for iOS, iPadOS & MacOS"
                }
            },
            {
                path: 'nowaskme',
                name: 'nowaskme',
                component: NowAskMe,
                meta: {
                    nav: {
                        available: true,
                        name: "NowAsk.Me",
                    },
                    title: "NowAsk.Me"
                }
            },
            {
                path: 'yyjlincoln',
                name: 'yyjlincoln',
                component: yyjlincoln,
                meta: {
                    nav: {
                        available: true,
                        name: "NowAsk.Me",
                    },
                    title: "NowAsk.Me"
                }
            },

        ]

    },
    {
        path: 'curriculum-vitae',
        name: 'Curriculum Vitae',
        component: CurriculumVitae,
        meta: {
            nav: {
                available: true,
                name: "Curriculum Vitae"
            },
            title: "My Curriculum Vitae"
        }
    },
    {
        path: 'connect',
        name: 'Connect',
        component: Connect,
        meta: {
            nav: {
                available: true,
                name: "Connect with me"
            },
            title: "Connect with me"
        }

    },
    {
        path: 'journey',
        name: 'Journey',
        component: Journey,
        meta: {
            nav: {
                available: true,
                name: "My Coding Journey"
            },
            title: "My Coding Journey"
        }

    },
    {
        path: 'acknowledgements',
        name: 'Acknowledgements',
        component: Acknowledgements,
        meta: {
            nav: {
                available: true,
                name: "Open-source Software Acknowledgements"
            },
            title: "Open-source Software Acknowledgements"
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