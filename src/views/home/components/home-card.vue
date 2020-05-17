<template lang="pug">
.home-top-child(:style="{'background-color': option.backgroundColor,'margin-right': option.marginShow ? '25px' : '0'}" @click="startAnimation")
    .home-display-none(:class="showAnimation && 'show-top'")
        ul.home-display-container
            li 1
            li 2
            li 3
    .home-top-child-left(:class="showAnimation && 'show-left'")
        h6.child-left-top {{ option.top }}
        h1.child-left-middle {{ option.middle }}
        .child-left-bottom {{ option.bottom }}
    .home-top-child-right(:class="showAnimation && 'show-right'")
        i(:class="[option.icon,option.animationShow ? 'animation-show' : '']")
</template>

<script>
export default {
  props: {
    option: Object
  },
  data () {
    return {
      showAnimation: false
    }
  },
  methods: {
    startAnimation () {
      this.showAnimation = true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~styles/_color.sass'

.home-top-child
    height: 100%
    width: 50%
    position: relative
    display: flex
    padding: 20px 40px
    border-radius: 6px
    overflow: hidden
    .home-display-none
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        background-color: green
        transform: translateY(-101%)
        .home-display-container
            width: 100%
            height: 100%
            display: flex
            flex-direction: column
            li
                flex: 25%
                background-color: purple
    .home-top-child-left
        width: 50%
        height: 100%
        padding-left: 5px

        .child-left-top
            color: $color-white
            font-weight: 600
            font-size: 14px
        .child-left-middle
            color: $color-white
            font-weight: 700
            font-size: 24px
            margin: 15px 0
        .child-left-bottom
            color: $color-white
            font-size: 12px
    .home-top-child-right
        width: 50%
        height: 100%
        text-align: right
        line-height: 110px

        .icon-wenjian,.icon-tongji,.icon-fl-renyuan,.icon-xiaoxi
            display: block
            font-size: 70px
            color: $color-white
.animation-show
    animation-name: shaky-slow
    animation-duration: 3s
    animation-iteration-count: infinite
    animation-timing-function: ease-in-out
    animation-delay: 0s
    animation-play-state: running
.show-left
    animation-name: leftShow
    animation-duration: 2s
    animation-fill-mode: forwards
    animation-timing-function: ease
    animation-delay: 0s
.show-right
    animation-name: rightShow
    animation-duration: 2s
    animation-fill-mode: forwards
    animation-timing-function: ease
    animation-delay: 0s
.show-top
    animation-name: topShow
    animation-duration: 2s
    animation-fill-mode: forwards
    animation-timing-function: ease
    animation-delay: 1s

@keyframes leftShow
    100%
        transform: translateX(-200px)

@keyframes rightShow
    100%
        transform: translateX(200px)

@keyframes topShow
    100%
        transform: translateY(0)

@keyframes shaky-slow
    10%, 90%
        transform: translate3d(-1px, 0, 0)
    20%, 80%
        transform: translate3d(+2px, 0, 0)
    30%, 70%
        transform: translate3d(-4px, 0, 0)
    40%, 60%
        transform: translate3d(+4px, 0, 0)
    50%
        transform: translate3d(-4px, 0, 0)

</style>
