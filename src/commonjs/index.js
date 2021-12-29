import axios from "axios"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'
import ProductData from "../product-data.json"

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
  ...ProductData
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