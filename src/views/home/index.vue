<template lang="pug">
.home
    .home-middle
        .home-middle-top
            .home-middle-top-left
                home-card(:option="{backgroundColor: '#178FFF',top: 'ORDERS',middle: '1,587',bottom: '近日新增15条文件',icon: 'iconfont icon-wenjian',marginShow: true}")
                home-card(:option="{backgroundColor: '#F5BE11',top: 'VISITORS',middle: '234',bottom: '近日新增15条文件',icon: 'iconfont icon-tongji',marginShow: false}")
            .home-middle-top-right
                home-card(:option="{backgroundColor: '#22B678',top: 'ORDERS',middle: '1,587',bottom: '近日新增15条文件',icon: 'iconfont icon-fl-renyuan',marginShow: true}")
                home-card(:option="{backgroundColor: '#EB3838',top: 'ORDERS',middle: '1,587',bottom: '近日新增15条文件',icon: 'iconfont icon-xiaoxi',marginShow: false,animationShow: true}")
        .home-middle-bottom
            .home-bottom-left
                .home-bottom-left-top 统计图
                .home-bottom-middle(style="height: 425px")
            .home-bottom-right

</template>
<script>
import HomeCard from './components/home-card'
export default {
  name: 'home',
  components: {
    HomeCard
  },
  data () {
    return {}
  },
  mounted () {
    const myChart = this.$echarts.init(document.querySelector('.home-bottom-middle'))
    const option = {
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
    myChart.setOption(option)
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.home
    height: 100%
    width: 100%
    .home-middle
        width: 100%
        height: 680px
        display: flex
        flex-direction: column
        justify-content: space-between
        .home-middle-top
            width: 100%
            height: 150px
            margin-bottom: 25px
            display: flex
            .home-middle-top-left,.home-middle-top-right
                width: 50%
                height: 100%
                margin-right: 25px
                display: flex
                justify-content: space-between
            .home-middle-top-right
                flex: 1
                margin-right: 0
        .home-middle-bottom
            flex: 1
            display: flex
            justify-content: space-between
            .home-bottom-left
                width: 50%
                height: 100%
                margin-right: 25px
                border-radius: 6px
                background-color: #fff
                .home-bottom-left-top
                    width: 100%
                    height: 80px
                    background-color: rgba(0,0,0,.03)
            .home-bottom-right
                flex: 1
                height: 100%
                background-color: purple

</style>
