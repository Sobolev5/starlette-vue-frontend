
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios'
import VueLogger from 'vuejs-logger'
import VueMeta from 'vue-meta'

// ui kit
import './plugins/sb-admin-2/css/sb-admin-2.css'
import './plugins/sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import './plugins/sb-admin-2/vendor/bootstrap/js/bootstrap.js'
import './plugins/sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'


const isProduction = process.env.NODE_ENV === 'production';

const logger_options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};

Vue.use(VueLogger, logger_options)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.config.productionTip = false

Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

if (user && token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
