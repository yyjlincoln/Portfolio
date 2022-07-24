import AboutMe from "@/views/about-me/about-me.vue";
import Acknowledgements from "@/views/acknowledgements/acknowledgements.vue";
import Connect from "@/views/connect/connect.vue";
import CurriculumVitae from "@/views/cv/curriculum-vitae.vue";
import GlobalFrame from "@/views/global-frame.vue";
import GoFrame from "@/views/go/go-frame.vue";
import GoEALD from "@/views/go/hsc-eald.vue";
import Home from "@/views/home/home.vue";
import Journey from "@/views/journey/journey.vue";
import NotFound from "@/views/not-found.vue";
import DocumentXIOS from "@/views/portfolio/documentx-ios.vue";
import DocumentX from "@/views/portfolio/documentx.vue";
import lincolnScript from "@/views/portfolio/lincolnscript.vue";
import NowAskMe from "@/views/portfolio/nowaskme.vue";
import Portfolio_Frame from "@/views/portfolio/portfolio-frame.vue";
import Portfolio from "@/views/portfolio/portfolio.vue";
import requestMap from "@/views/portfolio/requestmap.vue";
import vueAlerts from "@/views/portfolio/vuealerts.vue";
import yyjlincoln from "@/views/portfolio/yyjlincoln.vue";
import ScholarshipsFrame from "@/views/scholarship/scholarship-frame.vue";
import Scholarships from "@/views/scholarship/scholarship.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function productInPortfolio(products) {
  var Prod = [];
  Prod = products;
  for (let i = 0; i < Prod.length; i++) {
    Prod[i].name = Prod[i].name + "-portfolio";
  }
  return Prod;
}

const Products = [
  {
    path: "",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      nav: {
        available: true,
        name: "Portfolio",
      },
      title: "Portfolio",
    },
  },
  {
    path: "documentx",
    name: "documentx",
    component: DocumentX,
    meta: {
      nav: {
        available: true,
        name: "DocumentX",
      },
      title: "DocumentX",
    },
  },
  {
    path: "documentx-ios",
    name: "documentx-ios",
    component: DocumentXIOS,
    meta: {
      nav: {
        available: true,
        name: "DocumentX for iOS, iPadOS & MacOS",
        translucent: true,
      },
      title: "DocumentX for iOS, iPadOS & MacOS",
    },
  },
  {
    path: "nowaskme",
    name: "nowaskme",
    component: NowAskMe,
    meta: {
      nav: {
        available: true,
        name: "NowAsk.Me",
      },
      title: "NowAsk.Me",
    },
  },
  {
    path: "yyjlincoln",
    name: "yyjlincoln",
    component: yyjlincoln,
    meta: {
      nav: {
        available: true,
        name: "NowAsk.Me",
      },
      title: "NowAsk.Me",
    },
  },
  {
    path: "lincolnscript",
    name: "LincolnScript",
    component: lincolnScript,
    meta: {
      nav: {
        available: true,
        name: "LincolnScript",
        translucent: false,
      },
      title: "LincolnScript",
    },
  },
  {
    path: "vue-alerts",
    name: "vue-alerts",
    component: vueAlerts,
    meta: {
      nav: {
        available: true,
        name: "vue-alerts",
        translucent: false,
      },
      title: "vue-alerts",
    },
  },
  {
    path: "requestMap",
    name: "RequestMap",
    component: requestMap,
    meta: {
      nav: {
        available: true,
        name: "RequestMap",
        translucent: false,
      },
      title: "RequestMap",
    },
  },
];

const MAIN_ROOTS = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: {
      nav: {
        available: false,
        name: "Lincoln Yan",
      },
      title: "Hi, I'm Lincoln Yan.",
    },
  },
  {
    path: "go",
    name: "_Go-Frame",
    component: GoFrame,
    meta: {
      nav: {
        available: false,
        name: "Go:Frame",
      },
    },
    children: [
      {
        path: "",
        name: "Go-Frame",
        component: NotFound,
        meta: {
          nav: {
            available: false,
            name: "Go:Frame",
          },
          title: "Go:Frame",
        },
      },
      {
        path: "usyd",
        name: "usyd",
        component: Scholarships,
        meta: {
          nav: {
            available: false,
            name: "Additional Information & Supporting Evidence for the Scholarship Application",
          },
          title:
            "YIJUN YAN - Additional Information & Supporting Evidence for the Scholarship Application",
        },
      },
      {
        path: "unsw",
        name: "unsw",
        component: Scholarships,
        meta: {
          nav: {
            available: false,
            name: "Additional Information & Supporting Evidence for the Scholarship Application",
          },
          title:
            "YIJUN YAN - Additional Information & Supporting Evidence for the Scholarship Application",
        },
      },
      {
        path: "eald",
        name: "eald",
        component: GoEALD,
        meta: {
          nav: {
            available: false,
            name: "HSC English EAL/D ",
          },
          title: "Lincoln's HSC English EAL/D - Essays",
        },
      },
    ],
  },
  {
    path: "portfolio",
    name: "_Portfolio-Frame",
    component: Portfolio_Frame,
    meta: {
      nav: {
        available: true,
        name: "Portfolio",
      },
      title: "Portfolio",
    },
    children: productInPortfolio(Products),
  },
  {
    path: "curriculum-vitae",
    name: "Curriculum Vitae",
    component: CurriculumVitae,
    meta: {
      nav: {
        available: true,
        name: "Curriculum Vitae",
      },
      title: "My Curriculum Vitae",
    },
  },
  {
    path: "about-me",
    name: "About Me",
    component: AboutMe,
    meta: {
      nav: {
        available: true,
        name: "About Me",
      },
    },
  },
  {
    path: "connect",
    name: "Connect",
    component: Connect,
    meta: {
      nav: {
        available: true,
        name: "Connect with me",
      },
      title: "Connect with me",
    },
  },
  {
    path: "journey",
    name: "Journey",
    component: Journey,
    meta: {
      nav: {
        available: true,
        name: "My Coding Journey",
      },
      title: "My Coding Journey",
    },
  },
  {
    path: "acknowledgements",
    name: "Acknowledgements",
    component: Acknowledgements,
    meta: {
      nav: {
        available: true,
        name: "Open-source Software Acknowledgements",
      },
      title: "Open-source Software Acknowledgements",
    },
  },
  {
    path: "scholarship",
    name: "scholarship-frame",
    component: ScholarshipsFrame,
    meta: {
      nav: {
        available: true,
        name: "Scholarship:Frame",
      },
      title: "Scholarship:Frame",
    },
    children: [
      {
        path: "",
        name: "scholarship",
        component: Scholarships,
        meta: {
          nav: {
            available: true,
            name: "Scholarship",
          },
          title: "Scholarship",
        },
      },
    ],
  },
  ...Products,
];

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "_GlobalFrame",
      component: GlobalFrame,
      children: MAIN_ROOTS,
    },
    {
      path: "*",
      name: "Error",
      component: NotFound,
    },
  ],
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
