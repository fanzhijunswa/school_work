const addArticle = [
  {
    path: '/addArticle',
    component: () => import('@/views/addArticle'),
    name: 'addArticle'
  },
  {
    path: '/user-pic',
    component: () => import('@/views/addArticle/components/user-pic.vue'),
    name: 'userPic'
  }
]

export default addArticle
