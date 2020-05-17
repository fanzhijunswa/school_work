import home from '../home'
import channel from '../channel'
import classRoom from '../classRoom'
import information from '../information'
import addArticle from '../addArticle'
import articleList from '../articleList'
import _ from 'lodash'

const children = [
  {
    path: '/',
    redirect: '/home'
  }
]

_.forEach([home, channel, classRoom, information, addArticle, articleList], item => {
  _.isArray(item) ? children.push.apply(children, item) : children.push(item)
})

export const menu = {
  path: '/menu',
  name: 'menu',
  component: () => import('@/views/menu'),
  children
}
