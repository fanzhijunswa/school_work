export const dashboard1 = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
      { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
      { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
      { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#32C4E8'
        }
      }
    },
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#FA7192'
        }
      }
    },
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#FEDA5E'
        }
      }
    }
  ]
}
export const dashboard2 = {

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    data: ['男', '女'],
    x: 'center',
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
    y: '10px',
    itemWidth: 24, // 设置图例图形的宽
    itemHeight: 18, // 设置图例图形的高
    textStyle: {
      color: '#666' // 图例文字颜色
    },
    // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
    itemGap: 30,
    backgroundColor: '#eee' // 设置整个图例区域背景颜色

  },
  color: ['#11EEEE', '#ff66cc'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '男' },
        { value: 1548, name: '女' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        normal: {
          label: {
            show: false // 隐藏标示文字
          },
          labelLine: {
            show: false // 隐藏标示线
          }
        }
      }
    }
  ]

}

export const dashboard3 = {

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    data: ['男', '女', 'asd', 'adasd', 'asdasd'],
    x: 'center',
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
    y: '10px',
    itemWidth: 24, // 设置图例图形的宽
    itemHeight: 18, // 设置图例图形的高
    textStyle: {
      color: '#666' // 图例文字颜色
    }
    // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔

  },
  color: ['#11EEEE', '#ff66cc', '#FF4040', '#FFA500', '#32CD32'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['30%', '80%'],
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '男' },
        { value: 1548, name: '女' },
        { value: 1548, name: 'asd' },
        { value: 1548, name: 'adasd' },
        { value: 1548, name: 'asdasd' }
      ],
      emphasis: {
        itemStyle: {
          // shadowBlur: 10,
          // shadowOffsetX: 0
          // shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 1,
          borderColor: '#fff',
          label: {
            show: false // 隐藏标示文字
          },
          labelLine: {
            show: false // 隐藏标示线
          }
        }
      }
    }
  ]

}
