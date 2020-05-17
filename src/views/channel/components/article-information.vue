<template lang="pug">
.body
    .title
        h2 {{ message.title }}
    .small-title
        .small-title-write {{ message.smallTitle }}
        .small-title-count {{ message.peopleCount }}{{ '次' }}
    .container
        .article {{  message.container }}
        template(v-if="isArray(message.container_img)")
            .img
                img(:src="message.container_img[0].imgUrl")
        .img(v-else)
            img(:src="message.container_img || message.imgArr")
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    message: Object
  },
  watch: {
    message: {
      handler (newV) {
        console.log(newV)
      },
      deep: true
    }
  },
  methods: {
    isArray: _.isArray
  }
}
</script>

<style lang="sass">
.body
    .title
        text-align: center
        margin-bottom: 20px
    .small-title
        display: flex
        justify-content: flex-end
        margin-right: 90px
        margin-bottom: 10px
        font-size: 12px
    .container
        .article
            margin-bottom: 20px
            line-height: 25px
        .img
            display: flex
            justify-content: center
            img
                width: 500px
                height: 300px
</style>
