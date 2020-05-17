<template lang="pug">
.app-container
    router-view
</template>

<script>
import login from '@/views/login'
export default {
  name: 'app',
  components: {
    login
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="sass" scoped>
.app-container
    min-height: 100%
</style>
