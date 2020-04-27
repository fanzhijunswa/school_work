<template lang="pug">
.home
    .el-container(class="big-home-container")
        .el-header Header
        .el-container(class="small-home-container")
            .el-aside(width="200px") Aside
            .el-main Main
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
.home
    width: 100%
    height: 100%
    &>.big-home-container
        width: 100%
        height: 100%
        &>.el-header
            width: 100%
            background-color: #B3C0D1
            color: #333
            text-align: center
            height: 60px
        &>.small-home-container
            height: 100%
            width: 100%
            &>.el-aside
                width: 20%
                height: 100%
                background-color: #222
                color: #333
                text-align: center

</style>
