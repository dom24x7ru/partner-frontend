import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueLodash, { name: 'custom', lodash: lodash })
Vue.component('PaginatePlug', Paginate)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import '@/assets/css/bootstrap.min.css'
import '@/assets/css/nifty.min.css'
import '@/assets/css/demo-purpose/demo-icons.min.css'
import '@/assets/css/demo-purpose/demo-settings.min.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
