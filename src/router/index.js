import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import _ from 'lodash'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  }
]

_.forEach([home], item => {
  _.isArray(item) ? routes = [...routes, ...item] : routes.push(item)
})

export default new VueRouter({
  routes
})
