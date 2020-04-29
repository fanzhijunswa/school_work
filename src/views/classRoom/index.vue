<template lang="pug">
.classRoom
    .class-room-child
        .text(v-for="(item,index) in rowArr" :key="index") {{ item }}
        template(v-for="item in circleArr")
            .text {{ item.name }}
            .row(
                v-for="value in item.obj",
                :class="value.opt",
                :style="{cursor: value.use && 'auto',border: value.use ? 0 : '1px solid #CCCCCC'}",
                @mouseover="showYep({value: value.opt,flag:true,use: value.use})",
                @mouseleave="showYep({value: value.opt,flag:false,use: value.use})",
                @click="sureClick({value: value.opt,use: value.use})"
            )
                //每个row都有一个唯一标志位,只要我们点击后,数组就会有这个标识,所以存在的话,那么就让这个圆圈内的对号显示出来
                .content(v-if="classRoomArr.findIndex(item => item === value.opt) !== -1")
                    img(src="../../assets/images/right_mark.jpg", alt="alt" class="iconfont icon-duihao")
                .row-success(v-if="value.use")
                  i(class="iconfont icon-zuowei1")
                .row-pic(:id="value.opt")
                    img(src="../../assets/images/right_mark.jpg", alt="alt")
</template>
<script>
import _ from 'lodash'
export default {
  name: 'classRoom',
  components: {

  },
  data () {
    return {
      classRoomArr: [],
      circleArr: [],
      rowArr: [
        '', 1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    getData () {
      return Promise.all([this.getClassRoom()]).catch(e => console.log(e))
    },
    getClassRoom () {
      return new Promise((resolve, reject) => {
        this.$http.get('/getClassRoom').then(resp => {
          this.circleArr = _.get(resp, 'data.data', [])
        }, e => reject(e))
      })
    },
    showYep ({ value, flag, use }) {
      const showYepFlag = _.findIndex(this.classRoomArr, item => item === value)
      //   避免选中后的指标，鼠标悬停上面还会触发的情况
      /**
      * 业务逻辑 :
      * 1. use 代表的是 后台返回的已经被选中的数据,那么不可以触发
      * 2. classRoomArr 是我们选中的指标数组，如果数据一旦包含当前悬停项，那么不做处理
       */
      if (use || showYepFlag !== -1) {
        return false
      }
      document.querySelector('.' + value).style.cursor = flag ? 'pointer' : 'default'
      document.getElementById(value).style.display = flag ? 'block' : 'none'
      document.querySelector('.' + value).style.border = flag ? '1px dashed #22B678' : '1px solid #CCCCCC'
    },
    sureClick ({ value, use }) {
      /**
        * 业务逻辑
        * 1.这个flag判断当前我们点击的时候，指标是否存在，如果存在则取消，反之添加
        */
      if (use) {
        return false
      }
      const flag = _.findIndex(this.classRoomArr, item => item === value)
      // document.querySelector('.' + value).style.backgroundColor = flag !== -1 ? 'white' : '#22B678'
      document.querySelector('.' + value).style.border = flag !== -1 ? '1px solid #CCCCCC' : 0
      document.getElementById(value).style.display = flag !== -1 ? 'block' : 'none'
      flag !== -1 ? this.classRoomArr.splice(flag, 1) : this.classRoomArr.push(value)
      console.log(this.classRoomArr)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.classRoom
    width: 100%
    height: 1680px
    overflow: hidden
    .class-room-child
        font-size: 14px
        color: #666
        border-radius: 8px
        float: left
        width: 23%
        height: 20%
        background-color: $color-white
        margin-right: 25px
        margin-bottom: 25px
        padding: 10px
        display: flex
        flex-wrap: wrap
        align-content: flex-start
        .text
            text-align: center
            line-height: 24px
            width: 24px
            height: 24px
            margin-right: 7px
            margin-bottom: 10px
            &:nth-child(1)
                margin-right: 6px
        .row
            line-height: 20px
            width: 20px
            height: 20px
            margin-left: 1px
            margin-right: 10px
            margin-bottom: 10px
            border: 1px solid #CCCCCC
            border-radius: 50%
            vertical-align: middle
            text-align: right
            position: relative
            .icon-duihao
              position: absolute
              top: -1px
              left: 3px
              font-size: 12px
              color: $color-green
              font-weight: 700
            .content
                width: 60%
                position: relative
                img
                    position: absolute
                    width: 80%
                    left: 5px
                    top: 5px
            .row-success
                text-align: center
                color: $color-white
                .icon-zuowei1
                  color: $color-red
            .row-pic
                display: none
                width: 60%
                position: relative
                img
                    position: absolute
                    width: 80%
                    left: 5px
                    top: 5px

</style>
