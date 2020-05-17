<template lang="pug">
.home
    .home-middle
        .home-middle-top
            .home-middle-top-left
                //后期优化.加上插槽,遍历4次,向插槽插入数据,避免重复代码太多
                home-card(:option="{backgroundColor: '#178FFF',top: 'ORDERS',middle: userObj.file,bottom: `近日新增${userObj.file}篇文章`,icon: 'iconfont icon-wenjian',marginShow: true}")
                home-card(:option="{backgroundColor: '#F5BE11',top: 'VISITORS',middle: userObj.favorite, bottom: `近日新增${userObj.favorite}个喜欢`,icon: 'iconfont icon-tongji',marginShow: false}")
            .home-middle-top-right
                home-card(:option="{backgroundColor: '#22B678',top: 'ORDERS',middle: userObj.people, bottom: `近日新增${userObj.people}位粉丝`,icon: 'iconfont icon-fl-renyuan',marginShow: true}")
                home-card(:option="{backgroundColor: '#EB3838',top: 'ORDERS',middle: userObj.message, bottom: `近日新增${userObj.message}条通知`,icon: 'iconfont icon-xiaoxi',marginShow: false,animationShow: true}")
        .home-middle-bottom
            .home-bottom-left
                .home-bottom-left-top 统计图
                home-dashboard(setHeight="425px",:id="1")
            .home-bottom-right
                .home-pie-left
                    .home-bottom-left-top 性别
                    home-dashboard(setHeight="425px",:id="2")
                .home-pie-right
                    .home-bottom-left-top 环状图
                    home-dashboard(setHeight="425px",:id="3")
</template>
<script>
import HomeDashboard from './components/home-dashboard'
import HomeCard from './components/home-card'
import { getHomeMessage } from 'api/home'
export default {
  name: 'home',
  components: {
    HomeCard,
    HomeDashboard
  },
  data () {
    return {
      userObj: {}
    }
  },
  async mounted () {
    await this.getData()
  },
  methods: {
    getData () {
      return Promise.all([this.getHomeMessage()]).catch(err => console.warn(err))
    },
    getHomeMessage () {
      return new Promise(async (resolve, reject) => {
        this.$loadingStart()
        try {
          const { file, favorite, people, message } = await getHomeMessage()
          this.userObj = { file, favorite, people, message }
          resolve()
        } catch (e) {
          reject(e)
        }
        this.$loadingEnd()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~styles/_color.sass'
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
            .home-bottom-left,.home-pie-left,.home-pie-right
                width: 50%
                height: 100%
                margin-right: 25px
                border-radius: 6px
                // background-color: rgba(0,0,0,0.3)
                .home-bottom-left-top
                    width: 100%
                    height: 80px
                    // background-color: rgba(0,0,0,.03)
            .home-bottom-right
                flex: 1
                height: 100%
                display: flex
                .home-pie-right
                    margin-right: 0

</style>
