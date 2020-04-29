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

Mock.mock('/api/getClassRoom', 'get', {
  code: 200,
  msg: '响应成功',
  data: [
    {
      floor: 1,
      name: 'A',
      obj: [
        {
          use: true,
          opt: '1-A-101'
        },
        {
          use: true,
          opt: '1-A-102'
        },
        {
          use: false,
          opt: '1-A-103'
        },
        {
          use: true,
          opt: '1-A-104'
        },
        {
          use: false,
          opt: '1-A-105'
        },
        {
          use: true,
          opt: '1-A-106'
        },
        {
          use: false,
          opt: '1-A-107'
        },
        {
          use: true,
          opt: '1-A-108'
        },
        {
          use: true,
          opt: '1-A-109'
        }
      ]
    }, {
      name: 'B',
      obj: [
        {
          use: true,
          opt: 'B-1'
        },
        {
          use: false,
          opt: 'B-2'
        },
        {
          use: false,
          opt: 'B-3'
        },
        {
          use: true,
          opt: 'B-4'
        },
        {
          use: true,
          opt: 'B-5'
        },
        {
          use: true,
          opt: 'B-6'
        },
        {
          use: true,
          opt: 'B-7'
        },
        {
          use: true,
          opt: 'B-8'
        },
        {
          use: true,
          opt: 'B-9'
        }
      ]
    },
    {
      name: 'C',
      obj: [
        {
          use: true,
          opt: 'C-1'
        },
        {
          use: true,
          opt: 'C-2'
        },
        {
          use: true,
          opt: 'C-3'
        },
        {
          use: true,
          opt: 'C-4'
        },
        {
          use: true,
          opt: 'C-5'
        },
        {
          use: true,
          opt: 'C-6'
        },
        {
          use: true,
          opt: 'C-7'
        },
        {
          use: true,
          opt: 'C-8'
        },
        {
          use: true,
          opt: 'C-9'
        }
      ]
    },
    {
      name: 'D',
      obj: [
        {
          use: true,
          opt: 'D-1'
        },
        {
          use: true,
          opt: 'D-2'
        },
        {
          use: true,
          opt: 'D-3'
        },
        {
          use: true,
          opt: 'D-4'
        },
        {
          use: true,
          opt: 'D-5'
        },
        {
          use: true,
          opt: 'D-6'
        },
        {
          use: true,
          opt: 'D-7'
        },
        {
          use: true,
          opt: 'D-8'
        },
        {
          use: true,
          opt: 'D-9'
        }
      ]
    },
    {
      name: 'E',
      obj: [
        {
          use: true,
          opt: 'E-1'
        },
        {
          use: true,
          opt: 'E-2'
        },
        {
          use: true,
          opt: 'E-3'
        },
        {
          use: true,
          opt: 'E-4'
        },
        {
          use: true,
          opt: 'E-5'
        },
        {
          use: true,
          opt: 'E-6'
        },
        {
          use: true,
          opt: 'E-7'
        },
        {
          use: true,
          opt: 'E-8'
        },
        {
          use: true,
          opt: 'E-9'
        }
      ]
    },
    {
      name: 'F',
      obj: [
        {
          use: true,
          opt: 'F-1'
        },
        {
          use: true,
          opt: 'F-2'
        },
        {
          use: true,
          opt: 'F-3'
        },
        {
          use: true,
          opt: 'F-4'
        },
        {
          use: true,
          opt: 'F-5'
        },
        {
          use: false,
          opt: 'F-6'
        },
        {
          use: true,
          opt: 'F-7'
        },
        {
          use: true,
          opt: 'F-8'
        },
        {
          use: true,
          opt: 'F-9'
        }
      ]
    },
    {
      name: 'G',
      obj: [
        {
          use: true,
          opt: 'G-1'
        },
        {
          use: true,
          opt: 'G-2'
        },
        {
          use: true,
          opt: 'G-3'
        },
        {
          use: true,
          opt: 'G-4'
        },
        {
          use: true,
          opt: 'G-5'
        },
        {
          use: true,
          opt: 'G-6'
        },
        {
          use: true,
          opt: 'G-7'
        },
        {
          use: true,
          opt: 'G-8'
        },
        {
          use: true,
          opt: 'G-9'
        }
      ]
    },
    {
      name: 'H',
      obj: [
        {
          use: true,
          opt: 'H-1'
        },
        {
          use: true,
          opt: 'H-2'
        },
        {
          use: true,
          opt: 'H-3'
        },
        {
          use: true,
          opt: 'H-4'
        },
        {
          use: true,
          opt: 'H-5'
        },
        {
          use: true,
          opt: 'H-6'
        },
        {
          use: true,
          opt: 'H-7'
        },
        {
          use: true,
          opt: 'H-8'
        },
        {
          use: true,
          opt: 'H-9'
        }
      ]
    }
  ]
})
