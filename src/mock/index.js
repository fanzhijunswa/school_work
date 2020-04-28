import Mock from 'mockjs'
import { dashboard1, dashboard2, dashboard3 } from './status'
Mock.mock(/^\/api\/getDashboardId\?/, 'get', (req) => {
  const id = /^.+=(\w+)$/.exec(req.url)[1] - 0
  if (id === 1) {
    return Mock.mock({
      code: 200,
      msg: '响应成功',
      data: dashboard1
    })
  } else if (id === 2) {
    return Mock.mock({
      code: 200,
      msg: '响应成功',
      data: dashboard2
    })
  } else if (id === 3) {
    return Mock.mock({
      code: 200,
      msg: '响应成功',
      data: dashboard3
    })
  }
})
