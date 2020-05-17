import Vue from 'vue'
import VueRouter from 'vue-router'
import { login } from './login'
import { menu } from './menu'
import NProgress from 'nprogress'
import _ from 'lodash'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/login'
  }
]

_.forEach([menu, login], item => {
  _.isArray(item) ? routes.push.apply(routes, item) : routes.push(item)
})

const router = new VueRouter({
  routes
})

/* 业务逻辑
如果当前处于注册状态,那么就不应该展示注册页面
如果当前是一打开浏览器的话,那么默认的地址是/,然后重定向到login,那么这种的就直接转到首页
如果当前不处于注册状态,但是访问的是login页面的话,就直接放行
如果当前不处于注册状态,目前处于login页面，但是还是想要访问别的页面的话,那么还是给他返回到login页面,必须注册才可以访问
如果当前不处于注册状态，还想访问别的页面的话,一律返回到login页面
*/

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (window.localStorage.getItem('user_id')) {
    if (to.path === '/login') {
      Message.error('您目前处于登录状态')
      if (from.path === '/') {
        next('/home')
        return false
      }
      next(from.path)
      return false
    }
    next()
  } else if (to.path === '/login') {
    next()
  } else {
    if (from.path === '/login') {
      Message({
        type: 'error',
        message: '您已处于注册页面'
      })
      next('/login')
    } else {
      Message({
        type: 'error',
        message: '您还未注册,3秒钟之后为您跳转到注册页'
      })
      window.setTimeout(() => {
        next('/login')
      }, 3000)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
