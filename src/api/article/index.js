import { request } from '../../utils/auth'
const BASIC_URL = '/article'
// 获取当前用户的文章
export const getArticleList = () => request({ url: `${BASIC_URL}/getArticleList` })
// 获取频道
export const getChannel = () => request({ url: `${BASIC_URL}/getChannel` })
// 新增文章
export const addArticle = data => request({ method: 'post', url: `${BASIC_URL}`, data })
// 获取用户素材
export const getUserPic = () => request({ url: `${BASIC_URL}/getUserPic` })
// 删除用户文章
export const delArticle = id => request({ url: `${BASIC_URL}/delArticle/${id}` })
