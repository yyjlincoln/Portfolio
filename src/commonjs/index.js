import axios from "axios"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let endpoint = "https://apis.yyjlincoln.com"

let common = {
  getEndpoint: (path) => {
    axios.get(`${endpoint}${path}`).then(res => {
      console.log(res)
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
}

let data = {
  projects: {
    nowaskme: {
      name: "Nowask.me",
      description: ["Anonymous Q&A Platform", "SDD HSC Major Work", "Python3 & Vue PWA"],
      link: "/portfolio/nowaskme",
      image: "https://static.nowask.me/yyjlincoln/nam-logo.png",
      github: "",
      nametype: "nam_primary_color",
      descriptiontype: "nam_secondary_color",
      bg: "",
      bgstyle: "background: linear-gradient(90deg,#DBDAF9,#EBD5EB)",
    },
    documentx: {
      name: "DocumentX DMS",
      description: [
        "A document management system. Manages scanned documents.",
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
    },
    documentxios: {
      name: "DocumentX for iOS, iPadOS & MacOS",
      description: ["Manage your document on the move. Securely distribute App-Only documents.", "Python3 & Swift"],
      link: "/portfolio/documentx-ios",
      image: "https://static.nowask.me/yyjlincoln/documentx-ios-logo.png",
      github: "",
      nametype: "white",
      descriptiontype: "white",
      bg: "",
      bgstyle: "background-color: #0e141b",
    },
    wishes: {
      name: "COVID Wishes",
      description: [
        "Make a wish & Get it when COVID is over. Or simply write something to your future self.",
        "Coming early 2021.",
      ],
      link: "/portfolio/wishes",
      github: "",
      nametype: "primary_color",
      descriptiontype: "secondary_color",
      bg: "",
      bgstyle: "background-color: #e2f3e8",
      fullimage: "https://static.nowask.me/covidwishes-bg.jpg",
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
    }
  })
}


export default {
  install
}