import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'tailwindcss/dist/tailwind.css'
import 'boxicons'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import commonjs from "@/commonjs"
import vueAlerts from "vue-alerts"

gsap.registerPlugin(ScrollTrigger)
Vue.use(commonjs)
Vue.use(vueAlerts)

new Vue({
  render: h => h(App),
  router: router,
  commonjs
}).$mount('#app')
