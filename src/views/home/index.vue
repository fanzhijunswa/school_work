<template lang="pug">
.home
    .home-middle
        .home-middle-top
            .home-middle-top-left
                .home-top-child
                    .home-top-child-top
                        .home-top-opc
                        .home-top-word 关注数
                            .home-top-word-top
                            .home-top-word-bottom
                    .home-top-child-middle 我只是中间
                    .home-top-child-footer
                        .home-footer-opc
                        .home-footer-word 我只是尾部
                .home-top-child
                    .home-top-child-top
                        .home-top-opc
                        .home-top-word 粉丝数
                    .home-top-child-middle 我只是中间
                    .home-top-child-footer
                        .home-footer-opc
                        .home-footer-word 我只是尾部
            .home-middle-top-right
                .home-top-child
                    .home-top-child-top
                        .home-top-opc
                        .home-top-word 获赞数
                    .home-top-child-middle 我只是中间
                    .home-top-child-footer
                        .home-footer-opc
                        .home-footer-word 我只是尾部
                .home-top-child
                    .home-top-child-top
                        .home-top-opc
                        .home-top-word 评论数
                    .home-top-child-middle 我只是中间
                    .home-top-child-footer
                        .home-footer-opc
                        .home-footer-word 我只是尾部
        .home-middle-bottom
            .home-bottom-left
            .home-bottom-right

</template>
<script>
export default {
  name: 'home',
  components: {

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
        height: 500px
        display: flex
        flex-direction: column
        justify-content: space-between
        .home-middle-top
            width: 100%
            height: 50%
            margin-bottom: 25px
            display: flex
            .home-middle-top-left,.home-middle-top-right
                width: 50%
                height: 100%
                margin-right: 25px
                display: flex
                justify-content: space-between
                .home-top-child
                    width: 50%
                    height: 100%
                    margin-right: 25px
                    display: flex
                    flex-direction: column
                    &:nth-last-child(1)
                        margin-right: 0
                    .home-top-child-top
                        width: 100%
                        height: 40px
                        position: relative
                        .home-top-opc
                            width: 100%
                            height: 100%
                            opacity:0.5
                            background-color: #222
                            position: absolute
                            top: 0
                            left: 0
                            z-index: 2333
                        .home-top-word
                            text-align: center
                            color: $color-white
                            line-height: 40px
                            width: 100%
                            height: 100%
                            position: absolute
                            top: 0
                            left: 0
                            z-index: 2334
                    .home-top-child-middle
                        flex: 1
                        background-color: rgba(0, 0, 0, 1)
                        opacity: 0.3
                    .home-top-child-footer
                        width: 100%
                        height: 40px
                        position: relative
                        .home-footer-opc
                            width: 100%
                            height: 100%
                            opacity:0.7
                            background-color: #222
                            position: absolute
                            top: 0
                            left: 0
                            z-index: 2333
                        .home-footer-word
                            width: 100%
                            height: 100%
                            position: absolute
                            top: 0
                            left: 0
                            z-index: 2334
            .home-middle-top-right
                flex: 1
                margin-right: 0
        .home-middle-bottom
            width: 100%
            height: 50%
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
