import axios from "axios"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'

let endpoint = "https://apis.yyjlincoln.com"
let version = "1.3.0@" + String(new Date().getTime())

let LAST_PATH = ""

let common = {
  getEndpoint: async (path, params) => {
    let res = await axios.get(`${endpoint}${path}`, {
      params: params
    })
    return res.data
  },
  getPageUpdate(currentPage) {
    this.getEndpoint("/getPageUpdates", {
      page: currentPage,
      version: version
    })
    // TODO
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
    }
  }
}

let data = {
  projects: {
    nowaskme: {
      name: "Nowask.me",
      description: ["Anonymous Q&A Platform", "SDD HSC Major Work", "Python3 & Vue PWA"],
      link: "/portfolio/nowaskme",
      image: "https://static.nowask.me/yyjlincoln/nam-logo.png",
      fullimage: "https://static.nowask.me/yyjlincoln/nam-stream.png",
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
      image: "https://static.nowask.me/yyjlincoln/documentx-logo.png",
      fullimage: "https://static.nowask.me/yyjlincoln/documentx-dashboard.png",
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
      image: "https://static.nowask.me/yyjlincoln/documentx-ios-logo.png",
      fullimage: "https://static.nowask.me/yyjlincoln/documentx-ios-main.png",
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
      image: "https://static.nowask.me/yyjlincoln/covidwishes-logo.png",
      fullimage: "https://static.nowask.me/covidwishes-bg.jpg",
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
      image: "https://static.nowask.me/yyjlincoln/yyjlincoln-logo.png",
      fullimage: "https://static.nowask.me/yyjlincoln/yyjlincoln-logo.png",
      status: "Activaly being developed",
    },
  }
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