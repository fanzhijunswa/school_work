import { request } from '../../utils/auth'

export const getHomeMessage = () => request({ method: 'get', url: '/home' })
