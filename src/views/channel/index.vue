<template lang="pug">
.channel
    article-wrapper(:gdywArr="gdywArr" articleName="工大要闻")
    article-wrapper(:gdywArr="xyfcArr" articleName="校园风采")

</template>
<script>
import articleWrapper from './components/article-wrapper'
import vueWaterFallEasy from 'vue-waterfall-easy'
import _ from 'lodash'
export default {
  name: 'channel',
  components: {
    vueWaterFallEasy,
    articleWrapper
  },
  data () {
    return {
      imgsArr: [],
      gdywArr: [],
      xyfcArr: [],
      bmdtArr: [],
      idNow: '',
      imgArr: ['/img/timg (1).64fa5e0d.jpg', '/img/timg (2).9237cfa9.jpg', '/img/timg (3).65a114f3.jpg', '/img/timg.4b027d27.jpg'],
      dialogVisible: false,
      childArtilce: {}
    }
  },
  async created () {
    await this.getData()
  },
  computed: {
    singleNewsTitle () {
      return this.gdywArr.length ? this.gdywArr[0].title : null
    }
  },
  methods: {

    getData () {
      return Promise.all([this.getSingleNews(), this.getXyfc(), this.getBmdt()]).catch(e => console.warn(e))
    },
    getBmdt () {
      return new Promise((resolve, reject) => {
        this.$http.get('/information/bmdt', { params: { start: 1, page: 10 } }).then(resp => {
          this.bmdtArr = _.get(resp, 'data.data', [])
        //   this.imgsArr = this.bmdtArr[0].message.container_img.map(item => { return { src: item.imgUrl, info: 'ceshi' } })
        //   console.log(this.bmdtArr)
        }, e => reject(e))
      })
    },
    getXyfc () {
      return new Promise((resolve, reject) => {
        this.$http.get('/information/xyfc', { params: { start: 1, page: 100 } }).then(resp => {
          this.xyfcArr = _.get(resp, 'data.data', [])
          console.log(this.xyfcArr)
        //   this.imgsArr = this.xyfcArr.map(item => { return { info: item.title, src: _.isArray(item.message.container_img) ? item.message.container_img[0].imgUrl : item.message.container_img === '' ? 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%BE%BD%E5%AE%81%E5%B7%A5%E7%A8%8B%E6%8A%80%E6%9C%AF%E5%A4%A7%E5%AD%A6&step_word=&hs=0&pn=3&spn=0&di=176000&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2971030911%2C1246910721&os=1598829879%2C8005780&simid=4127176462%2C789986386&adpicid=0&lpn=0&ln=1685&fr=&fmq=1588419326168_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fappfile.100xuexi.com%2FUpload%2FXuexiWeb%2FImages%2F2016%2F07%2F08%2F1709445465_750_502.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzxx_z%26e3B8aax7jxt_z%26e3Bv54AzdH3FetjoAzdH3Fjxw41wpwAzdH3Fda8ma0abAzdH3F19vdmmkl-udvv-9w9w-baja-l10k0bbvkkkc_z%26e3Bip4s&gsm=4&rpstart=0&rpnum=0&islist=&querylist=&force=undefined' : item.message.container_img } })
        }, e => reject(e))
      })
    },
    getSingleNews () {
      return new Promise((resolve, reject) => {
        this.$http.get('/information/singleNews', { params: { start: 1, page: 10 } }).then(resp => {
          this.gdywArr = _.get(resp, 'data.singleNews', [])
          //   console.log(this.gdywArr)
          //   this.imgsArr = this.gdywArr.map(item => { return { info: item.title, src: _.isArray(item.message.container_img) ? item.message.container_img[0] : item.message.container_img === '' ? 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%BE%BD%E5%AE%81%E5%B7%A5%E7%A8%8B%E6%8A%80%E6%9C%AF%E5%A4%A7%E5%AD%A6&step_word=&hs=0&pn=3&spn=0&di=176000&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2971030911%2C1246910721&os=1598829879%2C8005780&simid=4127176462%2C789986386&adpicid=0&lpn=0&ln=1685&fr=&fmq=1588419326168_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fappfile.100xuexi.com%2FUpload%2FXuexiWeb%2FImages%2F2016%2F07%2F08%2F1709445465_750_502.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzxx_z%26e3B8aax7jxt_z%26e3Bv54AzdH3FetjoAzdH3Fjxw41wpwAzdH3Fda8ma0abAzdH3F19vdmmkl-udvv-9w9w-baja-l10k0bbvkkkc_z%26e3Bip4s&gsm=4&rpstart=0&rpnum=0&islist=&querylist=&force=undefined' : item.message.container_img } })
          resolve()
        }, e => reject(e))
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.channel
    display: flex
    flex-direction: column

</style>
