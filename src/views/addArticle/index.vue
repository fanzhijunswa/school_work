<template lang="pug">
.addArticle
    el-card(class="box-card")
      div(slot="header" class="clearfix")
        span 发表文章
      div(class="text item")
        el-form(ref="addFormRef" :model="articleForm" label-width="120px" :rules="addFormRules")
            el-form-item(label="标题" prop="title" label-width="70px")
                el-input(v-model="articleForm.title")
            el-form-item(label="内容" prop="content" label-width="70px")
                quill-editor(v-model="articleForm.content")
            el-form-item(label="封面" label-width="70px" prop="imgArr")
                el-radio-group(v-model="articleForm.imgArr" @change="articleForm.selectData.length = $event")
                    el-radio(:label="1") 单图
                    el-radio(:label="2") 双图
                    el-radio(:label="3") 三图
                    el-radio(:label="0") 无图
                ul.image-arr
                    li.image-single(v-for="(item,index) in articleForm.imgArr" :key="item" @click="(showDialog = true) && (no = index)")
                        .show-pic(v-if="articleForm.selectData[index]")
                            img(:src="articleForm.selectData[index].imgUrl")
                        .no-show-pic(v-else)
                            .img-title 点击请选择图片
                            .img-bottom
                                i.icon-tupian(class="iconfont")
            el-form-item(label="频道" label-width="70px" prop="channelId")
                channel-select(@changeSelect="articleForm.channel = $event" :clear.sync="clearAll" v-model="articleForm.channelId")
            el-form-item(label-width="70px")
                el-button(type="primary" @click="addArticleRequest('addFormRef')") 提交
                el-button(type="danger" @click="(articleForm = {}) && (clearAll = true)") 清空已选条件
    el-dialog(title="选择图片" :visible.sync="showDialog" width="50%" custom-class="dialog-father")
        .dialog-footer(slot="footer")
            el-button(@click="showDialog = false") 取 消
            el-button(type="primary" @click="!(showDialog = false) && (sendDataFlag = true)") 确 定
        showPicDialog(:sendDataFlag.sync="sendDataFlag" @sendData="articleForm.selectData[no] = $event" :showDialog="showDialog")
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import ChannelSelect from '@/components/channel-select'
import showPicDialog from './components/show-pic-dialog'
import { addArticle } from 'api/article'
export default {
  name: 'addArticle',
  components: {
    quillEditor,
    ChannelSelect,
    showPicDialog
  },
  data () {
    return {
      articleForm: {
        title: '',
        content: '',
        imgArr: 1,
        channelId: '',
        selectData: []
      },
      showDialog: false,
      sendDataFlag: false,
      clearAll: false,
      no: 0
    }
  },
  methods: {
    addArticleRequest (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          this.$message.error('请你填写完整')
          return false
        }
        await addArticle(this.articleForm)
        this.$message.success('文章发布成功')
        this.$router.push({ name: 'articleList' })
      })
    }
  },
  computed: {
    addFormRules () {
      return {
        // 这里是发布文章指定的校验规则
        title: [
          { required: true, message: '内容不能为空' },
          { min: 5, max: 30, message: '标题长度介于5-30个字符' }
        ],
        content: [{ required: true, message: '内容必填' }],
        channelId: [{ required: true, message: '频道必选' }],
        imgArr: [{ required: true, message: '选项必选', trigger: 'change' }]
      }
    }
  }
}
</script>

<style lang="sass">
.dialog-father
    margin-top: 8vh!important
    width: 870px!important
</style>

<style style="scss" scoped>
.quill-editor /deep/ .ql-editor {
    height: 500px
}
</style>

<style lang="sass" scoped>
.box-card
    // height: 1000px
    .el-form-item
        margin-bottom: 30px
        .image-arr
            margin-top: 20px
            display: flex
            .image-single
                border-radius: 4px
                border: 1px solid #eee
                height: 200px
                width: 200px
                margin-right: 20px
                display: flex
                flex-direction: column
                cursor: pointer
                .show-pic
                    width: 100%
                    height: 100%
                    img
                        @extend .show-pic
                .no-show-pic
                    width: 100%
                    height: 100%
                    display: flex
                    flex-direction: column
                    .img-title
                        font-size: 14px
                        text-align: center
                    .img-bottom
                        overflow: hidden
                        flex: 1
                        display: flex
                        justify-content: center
                        align-items: center
                        i
                            font-size: 70px

</style>
