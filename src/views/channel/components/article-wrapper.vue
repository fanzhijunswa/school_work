<template lang="pug">
.xyfc
    .xyfc-top
        h2.write {{ articleName }}
    .xyfc-container
        .xyfc-box(v-for="(item,index) in gdywArr" :key="item.gid")
            .top(@mouseenter="idNow = item.gid" @mouseleave ="idNow = false")
                img(:src="item.imgUrl || imgArr[index]", :class="[idNow === item.gid ? 'showYep' : 'showNo']")
                .channel-rgba(v-if="idNow === item.gid")
                    i(class="iconfont icon-xihuan" @click="(dialogVisible = true) && (childArtilce = Object.assign({imgArr: imgArr[index]},item.message))")
            .bottom
                .title {{ item.title }}
                .container
                    .left {{ '浏览' }}{{ item.peopleCount }}
                    .right {{ '发布时间' }}{{ item.createDate }}
            //通过设置class属性，可以为当前的这个el-dialog设置父级，避免全局被覆盖
    el-dialog(
        class="el-dialog-father"
        append-to-body
        :show-close="false"
        close-on-click-modal
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose")
        .title(slot="title")
            .left {{ '文章详情' }}
            .right(@click="dialogVisible = false")
                i(class="iconfont icon-guanbi")
        //el-dialog 中的组件传值
        articleInformation(:message="childArtilce")
</template>
<script>
import articleInformation from './article-information'
export default {
  name: 'channel',
  props: {
    gdywArr: Array,
    articleName: String
  },
  components: {
    articleInformation
  },
  data () {
    return {
      idNow: '',
      dialogVisible: false,
      childArtilce: {},
      imgArr: ['/img/timg (1).64fa5e0d.jpg', '/img/timg (2).9237cfa9.jpg', '/img/timg (3).65a114f3.jpg', '/img/timg.4b027d27.jpg']
    }
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.xyfc
    width: 100%
    display: flex
    flex-direction: column
    .xyfc-top
        display: flex
        margin-bottom: 15px
        .write
            margin-right: 20px
    .xyfc-container
        display: flex
        flex-wrap: wrap
        .xyfc-box
            height: 300px
            width: 330px
            margin-bottom: 40px
            margin-right: 30px
            border-radius: 6px
            overflow: hidden
            box-shadow: 5px 5px 5px #888888
            .top
                margin-bottom: 10px
                position: relative
                height: 200px
                overflow: hidden
                img
                    width: 100%
                    height: 200px
                .channel-rgba
                    width: 100%
                    height: 200px
                    background: rgba(0, 0, 0,0.6 )
                    position: absolute
                    top: 0
                    left: 0
                    pointer: cursor
                    display: flex
                    justify-content: center
                    align-items: center
                    .icon-xihuan
                        font-size: 30px
                        color: $color-red
                        cursor: pointer
                        animation-name: shake
                        animation-duration: 1s
                        animation-iteration-count: infinite
                        text-shadow: 5px 2px 6px #000

            .bottom
                padding: 10px 20px
                font-size: 14px
                .title
                    margin-bottom: 20px
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                .container
                    display: flex
                    justify-content: space-between
                    font-size: 12px
                    color: $color-icon-lime
                    letter-spacing: 0.5px

</style>
<style lang="sass">
.showYep
    transform: scale(1.2)
    transition: all 1s
.showNo
    transform: scale(1)
    transition: all 1s

@keyframes shake
    0%
        transform: scale(0.9,0.9)
    100%
        transform: scale(1.1,1.1)

.el-dialog-father
    .el-dialog
        margin-top: 5vh!important
        border-radius: 8px
        overflow: hidden
        .el-dialog__header
            .title
                display: flex
                justify-content: space-between
                font-size: 14px
                .right
                    cursor: pointer
        .el-dialog__body
            padding-top: 20px!important
            overflow: hidden
</style>
