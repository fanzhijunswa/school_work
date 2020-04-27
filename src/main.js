import Vue from 'vue'
import App from './App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/main.sass'
import ElementUi from 'element-ui'
import axios from 'axios'
import '@/../sd-icon/style.css'

Vue.use(ElementUi)
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'

new Vue({
  router,
  render: createElement => createElement(App)
}).$mount('#app')
