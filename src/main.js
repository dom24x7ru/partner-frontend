import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/assets/style.css'

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/nifty.min.css'
import '@/assets/css/demo-purpose/demo-icons.min.css'
import '@/assets/css/demo-purpose/demo-settings.min.css'

// import ‘bootstrap/dist/js/bootstrap.bundle.min

// import '@/assets/vendors/popperjs/popper.min'

// import '@/assets/js/nifty.js'

// import '@/assets/vendors/bootstrap/bootstrap.min'


// import '@/assets/vendors/popperjs/popper.min.js'

// import '@/assets/vendors/bootstrap/bootstrap.min.js'

/* <script src="./assets/js/nifty.js" defer></script>

<script src="./assets/js/demo-purpose-only.js" defer></script>

<script src="./assets/pages/dashboard-1.js" defer></script> */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
