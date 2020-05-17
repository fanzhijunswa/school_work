<template lang="pug">
.login-container
    .login-box
        .login-up
            .login-header
                h3 注册
            .login-middle
                el-form(:model="loginForm" :rules="loginRules" ref="loginForm" class="demo-ruleForm")
                    el-form-item(label="用户名" prop="userName")
                        el-input(v-model="loginForm.userName")
                    el-form-item(label="密码" prop="userPassword" class="eyes-input")
                        el-input(v-model="loginForm.userPassword" :type="!passwordFlag && 'password'" )
                        .eyes(@click="passwordFlag = !passwordFlag")
                            i.iconfont(:class="[!passwordFlag ? 'icon-jurassic_openeyes' : 'icon-jurassic_loseeyes']")
                    el-form-item(label="手机号" prop="userPhone")
                        el-input(v-model="loginForm.userPhone")
                    el-form-item(label="学号" prop="userCard")
                        el-input(v-model="loginForm.userCard")
                    el-form-item(label="头像" prop="pic")
                        .upload-box(@click="$refs.inputFile.click()" ref="upload-box")
                            input.upload(type="file" ref="inputFile" @change="uploadImg")
                            .icon-box(v-if="!showPic")
                                i.icon-xinzeng(class="iconfont")
                            .pic(v-else)
                                img(ref="user_pic" class="user_pic")
                    el-form-item
                        el-button(type="primary" @click="userInfo('loginForm')") 注册
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      loginForm: {
        userPhone: '13147944665',
        userPassword: 'junge1998925',
        userName: '可爱的小军军鸭',
        userCard: '1621540102',
        userSex: 1
      },
      showPic: false,
      formData: new FormData(),
      nextPage: false,
      passwordFlag: false
    }
  },
  mounted () {
    const radioAll = [...document.querySelectorAll('.el-radio')]
    radioAll.forEach(item => {
      item.onclick = function () {
        radioAll.forEach(i => {
          i.children[0].children[0].style.backgroundColor = '#fff'
        })
        const color = item.attributes[item.attributes.length - 1].value
        item.children[0].children[0].style.backgroundColor = color
        item.children[0].children[0].style.borderColor = color
      }
    })
  },
  methods: {
    userInfo (loginForm) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _.forEach(this.loginForm, (v, k) => {
            this.formData.append(k, v)
          })
          this.$http.post('/user', this.formData).then(resp => {
            if (resp.data.code) {
              // 将cookie的值保存到了本地,可以随时调用,但是仍需要优化,后期需要封装好
              _.forEach(resp.data.cookie, (v, k) => window.localStorage.setItem(k, v))
              this.$message.success('注册成功')
              this.$router.push('/menu')
            }
          })
        } else {
          this.$message({ type: 'error', message: '信息未填写完整', duration: 2000 })
        }
      })
    },
    uploadImg () {
      this.showPic = true
      const file = event.target.files[0]
      try {
        if (!/(.gif)|(.png)|(.jpg)|(.jpeg)$/.test(file.name)) {
          throw '文件上传类型错误,只能是图片格式'
        }
      } catch (e) {
        this.$message.error(e)
        this.showPic = false
        this.$refs['upload-box'].style.border = '1px dashed #666'
        return false
      }
      const reader = new FileReader()
      /* 这里的reader.readAsDataUrl方法的参数是一个Files对象,就是我们上传的文件对象,这个方法就是在读取这个FIle对象,
      然后读取完毕后,就会自动调用loadend事件,这个事件处理函数的参数会有一个result属性,这个属性就是base64编码格式的
      字符串,表示读取文件的内容 */
      reader.readAsDataURL(file)
      reader.onloadend = e => {
        this.$refs.user_pic.src = e.target.result
        this.$refs['upload-box'].style.border = 0
        // e.target.result就是最后的路径地址
      }
      // 每次点击加号上传的时候,都要清空上次选择的
      this.formData.delete('imageFile')
      //   想要使用上传文件,需要给input(type="files")加上change事件,事件处理函数event中的target的files就是上传的内容
      this.formData.append('imageFile', file)
    },
    login (loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (!valid) {
          return this.$message({ type: 'error', message: '信息填写不完整，请重新填写', duration: 2000 })
        }
        this.$message.success('登录成功')
      })
    }
  },
  computed: {
    userNameRule () {
      const userName = (rule, value, callback) => {
        if (!value.trim()) {
          callback(new Error('用户名不能为空'))
        } else if (!/^(\w|[\u4e00-\u9fa5])+$/.test(value)) {
          callback(new Error('只能由数字、字母、下划线、中文组成'))
        } else if (value.length < 4 || value.length > 8) {
          callback(new Error('用户名不能少于4位或高于8位'))
        } else {
          callback()
        }
      }
      return userName
    },
    userCardRule () {
      const userCard = (rule, value, callback) => {
        if (!value.trim()) {
          callback(new Error('学号不能为空'))
        } else if (!/^\d+$/.test(value)) {
          callback(new Error('学号只能是数字'))
        } else if (value.length !== 10) {
          callback(new Error('学号位数不对'))
        } else {
          callback()
        }
      }
      return userCard
    },
    userPhoneRule () {
      const userPhone = (rule, value, callback) => {
        if (!value.trim()) {
          callback(new Error('手机号不能为空'))
        } else if (!/^1[3579]\d{9}$/.test(value)) {
          callback(new Error('手机号格式不正确'))
        } else {
          callback()
        }
      }
      return userPhone
    },
    userPasswordRule () {
      const userPassword = (rule, value, callback) => {
        if (!value.trim()) {
          callback(new Error('学号不能为空'))
        } else if (!/^\w+$/.test(value)) {
          callback(new Error('只能由数字、字母、下划线、中文组成'))
        } else if (value.length < 6 || value.length > 12) {
          callback(new Error('密码的长度不能少于6位或高于12位'))
        } else {
          callback()
        }
      }
      return userPassword
    },
    loginRules () {
      return {
        userPhone: [{ validator: this.userPhoneRule, required: true }],
        userPassword: [{ validator: this.userPasswordRule, required: true }],
        userCard: [{ validator: this.userCardRule, required: true }],
        userName: [{ validator: this.userNameRule, required: true }]
      }
    }
  }
}
</script>

<style lang="sass">
@import '~styles/_color.sass'
.el-form-item
    .el-form-item__label
        width: 70px!important
        color: #222!important
    .el-form-item__content
        width: 70%!important
        margin-left: 70px!important
    .el-radio
        .icon-nan
            color: skyblue!important
            font-size: 18px
        .icon-nv
            color: pink!important
</style>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'
.login-container
    height: 100vh
    background: url('./images/68e08bb6dd052d6457e30722b159f6ca.jpg') no-repeat center top
    background-size: 100% 100%
    display: flex
    justify-content: center
    align-items: center
    .login-box
        width: 400px
        height: 526px
        position: relative
        perspective: 800px
        .login-up,.login-down
            backface-visibility: hidden
            // perspective: 800px
            z-index: 999
            width: 100%
            position: absolute
            top: 0
            left: 0
            box-shadow:2px 2px 20px 2px rgba(0,0,0,0.3)
            display: flex
            flex-direction: column
            border-radius: 6px
            overflow: hidden
            background-color: white
            // background-color: rgba(0,0,0,.8)
            .login-header
                height: 50px
                text-align: center
                line-height: 50px
            .login-middle
                flex: 1
                box-sizing: border-box
                padding: 30px
                .upload-box
                    position: relative
                    width:80px
                    height: 80px
                    border: 1px dashed #666
                    text-align: center
                    line-height: 80px
                    .upload
                        width: 0
                        height: 0
                    .icon-box,.pic
                        position: absolute
                        top: 0
                        left: 0
                        width: 100%
                        height: 100%
                        cursor: pointer
                        font-size: 20px
                        font-weight: 700
                        img
                            width: 100%
                            height: 100%
.eyes-input
    position: relative
    .eyes
        position: absolute
        top: 0
        right: 13px
        cursor: pointer
</style>
