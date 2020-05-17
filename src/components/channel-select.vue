<template lang="pug">
.select
    el-select(:value="channel" clearable placeholder="请选择" @change="$emit('changeChannel', $event)")
        el-option(
            v-for="{label,_id : id} in selectData"
            :key="id"
            :label="label"
            :value="id")
</template>

<script>
import { getChannel } from 'api/article'
export default {
  data () {
    return {
      selectData: []
    }
  },
  model: {
    prop: 'channel',
    event: 'changeChannel'
  },
  props: {
    channel: String,
    clear: Boolean
  },
  watch: {
    clear (newV) {
      if (newV) {
        this.$emit('changeChannel', '')
        this.$emit('update:clear', false)
      }
    }
  },
  async created () {
    await this.getData()
  },
  methods: {
    getData () {
      return Promise.all([this.getChannelData()]).catch(e => console.warn(e))
    },
    getChannelData () {
      return new Promise(async (resolve, reject) => {
        try {
          this.selectData = await getChannel()
          resolve()
        } catch (e) {
          this.selectData = []
          reject(e)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
