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
        height: 325px
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
                background-color: yellow
            .home-bottom-right
                flex: 1
                height: 100%
                background-color: purple

</style>
