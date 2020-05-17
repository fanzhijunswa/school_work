import Vue from 'vue'
import App from './App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
import axios from 'axios'
import echarts from 'echarts'
import { showLoading, hideLoading } from './utils/loading'
import 'nprogress/nprogress.css'
import '@/../sd-icon/style.css'
import '@/mock'
import '@/assets/styles/main.sass'

Vue.use(ElementUi)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$loadingStart = showLoading
Vue.prototype.$loadingEnd = hideLoading
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
new Vue({
  router,
  render: createElement => createElement(App)
}).$mount('#app')
