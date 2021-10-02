import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'tailwindcss/dist/tailwind.css'
import 'boxicons'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline);

gsap.registerPlugin(ScrollTrigger)

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
