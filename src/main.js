import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'tailwindcss/dist/tailwind.css'
import 'boxicons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
