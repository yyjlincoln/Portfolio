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

function install(Vue) {
  Vue.prototype.$api = {
    common
  }
  Vue.prototype.$func = {
    ...func
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