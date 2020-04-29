import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import channel from './channel'
import classRoom from './classRoom'
import information from './information'
import _ from 'lodash'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'index'
  }
]

_.forEach([home, channel, information, classRoom], item => {
  _.isArray(item) ? routes = [...routes, ...item] : routes.push(item)
})

export default new VueRouter({
  routes
})

export { routes }
