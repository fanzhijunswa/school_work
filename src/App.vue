<template lang="pug">
.container
    el-container
        el-header Header
        el-container
            el-aside
                //开启路由
                el-menu(router)
                    //这里的这个就是下拉效果
                    el-menu-item-group
                        el-menu-item(index="/home" ref="home") 我的首页
                        el-menu-item(index="/channel") 选项2
                        el-menu-item(index="1-3") 选项3
                        el-menu-item(index="1-4") 选项3
                        el-menu-item(index="1-5") 选项3
                        el-menu-item(index="1-6") 选项3
                    el-submenu(index="1-7")
                        template(slot="title") 选项4
                        el-menu-item(index="1-7-1") 选项4-1
            el-main
                router-view
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    // 手动触发点击事件，默认展示第一个
    this.$refs.home.$el.click()
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.container
    width: 100%
    height: 100%
    &>.el-container
        height: 100%
        &>.el-header
            background-color: $color-orange
        &>.el-container
            &>.el-aside
                width: 200px!important
                &>.el-menu
                    border-right: 0
                    background-color: $color-white
                    height: 100%
                    .el-menu-item,.is-active,.el-submenu
                        transition: 0s
                        ::v-deep .el-submenu__title //深度选择器,sass必须使用 ::v-deep才可以
                            transition: 0s
                    .is-active
                        background-color: $color-purple
                        color: red

            &>.el-main
                background: linear-gradient(to right,#feac5e,#c779d0,#4bc0c8)
                padding-right: 0
</style>
