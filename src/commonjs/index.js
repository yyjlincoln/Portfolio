import axios from "axios"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'

let endpoint = "https://apis.yyjlincoln.com"
let version = "1.4.2@" + String(new Date().getTime())

let LAST_PATH = ""

let common = {
  getEndpoint: async (path, params) => {
    return axios.get(`${endpoint}${path}`, {
      params: params
    }).then(res => res.data)
  },
  getPageUpdate(currentPage) {
    this.getEndpoint("/getPageUpdates", {
      page: currentPage,
      version: version
    }).then(data => {
      if (data.code < 0) {
        let actions = [
          {
            title: "Home",
            type: "normal",
            handler: () => {
              window.app.$router.push("/")
            }
          },
          {
            title: "Cancel",
            type: "cancel",
            handler: () => {
              // Do nothing
            }
          }
        ]
        if (data.link) {
          actions.splice(0, 0, {
            title: "Continue",
            type: "normal",
            handler: () => {
              window.location = data.link
            },
          })
        } else {
          actions.splice(0, 0, {
            title: "Refresh",
            type: "destructive",
            handler: () => {
              location.reload(true);
            },
          })
        }

        window.app.$alert.present(data.title, data.message, actions, {
          defaultAction: 0
        })
      }
    }).catch(err => {
      console.warn("Could not fetch for page updates. The current content may not be up to date.", err)
    })
  }

}

let func = {
  reverseAnimation(that) {
    return new Promise((resolve) => {
      gsap.to(window, {
        scrollTo: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      document.body.classList.add("cursor-wait");
      that.timeline.eventCallback("onReverseComplete", () => {
        document.body.classList.remove("cursor-wait");
        resolve();
      });
      that.timeline.reverse();
    })
  },
  processPath(path) {
    if (path != LAST_PATH) {
      LAST_PATH = path
      Vue.prototype.$api.getPageUpdate(path)
    }
  },
  utils: {
    scrollTo(destination) {
      gsap.to(window, {
        scrollTo: destination,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    inlineScrollTo(destination) {
      return function () {
        Vue.prototype.$func.utils.scrollTo(destination)
      }
    },
    openInNewWindow(url) {
      window.open(url, '_blank').focus();
    },
    inlineOpenInNewWindow(url) {
      return function () {
        Vue.prototype.$func.utils.openInNewWindow(url)
      }
    }
  }
}

let data = {
  projects: {
    nowaskme: {
      name: "Nowask.me",
      description: ["Anonymous Q&A Platform", "SDD HSC Major Work", "Python3 & Vue PWA"],
      link: "/portfolio/nowaskme",
      image: "https://static.yyjlincoln.com/yyjlincoln/nam-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/nam-stream.png",
      github: "",
      nametype: "nam_primary_color",
      descriptiontype: "nam_secondary_color",
      bg: "",
      bgstyle: "background: linear-gradient(90deg,#DBDAF9,#EBD5EB)",
      status: "Developement stopped (Good enough for a HSC major work)",
    },
    documentx: {
      name: "DocumentX DMS",
      description: [
        "A document management system.",
        "Python3 & Vue PWA",
      ],
      link: "/portfolio/documentx",
      image: "https://static.yyjlincoln.com/yyjlincoln/documentx-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/documentx-dashboard.png",
      github: "",
      nametype: "documentx_primary_color",
      descriptiontype: "documentx_secondary_color",
      bg: "",
      bgstyle: "background-color: #EBF2FF",
      status: "Activitely being developed. Looking to rewrite it in the future.",
    },
    documentxios: {
      name: "DocumentX for iOS, iPadOS & MacOS",
      description: ["Manage your document on the move. Securely distribute App-Only documents.", "Python3 & Swift"],
      link: "/portfolio/documentx-ios",
      image: "https://static.yyjlincoln.com/yyjlincoln/documentx-ios-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/documentx-ios-main.png",
      github: "",
      nametype: "white",
      descriptiontype: "light_gray",
      bg: "",
      bgstyle: "background-color: #0e141b",
      status: "Actively being developed.",
    },
    wishes: {
      name: "COVID Wishes",
      description: [
        "Make a wish & Get it emailed to you when COVID is over. Or simply write something to your future self.",
        "Coming early 2022.",
      ],
      link: "/portfolio/wishes",
      github: "",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      image: "https://static.yyjlincoln.com/yyjlincoln/covidwishes-logo.png",
      fullimage: "https://static.yyjlincoln.com/covidwishes-bg.jpg",
      status: "In the planning & preperation phase.",
    },
    yyjlincoln: {
      name: "yyjlincoln.com",
      description: [
        "This website.",
        "Vue PWA",
      ],
      link: "/portfolio/yyjlincoln",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      image: "https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png",
      status: "Actively being developed",
    },
    khhspsn: {
      name: "PushNotification",
      description: [
        "A smart notice board system for school TVs.",
        "Vue (non-PWA), Python3",
      ],
      link: "/portfolio/khhs-psn",
      nametype: "khhspsn_primary_color",
      descriptiontype: "khhspsn_secondary_color",
      bg: "",
      bgstyle: "background-color: #ebf2ff",
      image: "https://static.yyjlincoln.com/yyjlincoln/khhspsn-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo.png",
      status: "Discontinued due to maintenance concerns",
      photos: [
        'https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo-1.png',
        'https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo-2.png',
        'https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo-3.png',
        'https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo-4.png',
        'https://static.yyjlincoln.com/yyjlincoln/khhspsn-demo-5.png',
      ]
    },
  },
  utilities: {
    lincolnScript: {
      name: "LincolnScript",
      description: [
        "A simple, asynchronous and event-driven script implemented in Swift.",
      ],
      link: "/portfolio/lincolnscript",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      image: "https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/lincolnscript-main.png",
      status: "Under development. Coming soon.",
    },
    vueAlerts: {
      name: "Vue-Alerts",
      description: [
        "Vue-Alerts is a Vue 2.x plugin that delivers UIViewController-like alerts with customisable alert actions and more.",
      ],
      link: "/portfolio/vue-alerts",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      image: "https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/vue-alerts-main.png",
      status: "Version 0.2.0 is now available on npm.",
    },
    requestMap: {
      name: "RequestMap",
      description: [
        "RequestMap is a micro framework for API developments. Write once, run with multiple protocols (HTTPViaFlask, BatchRequestViaFlask, Socket and Websocket [coming soon])"
      ],
      link: "/portfolio/requestmap",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      image: "https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png",
      fullimage: "https://static.yyjlincoln.com/yyjlincoln/requestmap-main.png",
      status: "Under development.",
    },
  }
}


let runtime = {
  firstLaunch: true,
}

function install(Vue) {
  Vue.prototype.$api = {
    ...common
  }
  Vue.prototype.$func = {
    ...func
  }
  Vue.prototype.$commondata = {
    ...data
  }
  Vue.prototype.$runtime = {
    ...runtime
  }

  Vue.mixin({
    beforeDestroy() {
      if (this.timeline) {
        this.timeline.kill();
      }
      ScrollTrigger.getAll().forEach(function (trigger) {
        trigger.kill();
      });
    },
    watch: {
    }
  })
}


export default {
  install
}