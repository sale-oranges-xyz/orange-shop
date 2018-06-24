
<template>
  <el-form :model="ruleForm" :rules="rules" label-position="right" ref="ruleForm" label-width="4rem">
    <el-row :gutter="10"  style="margin: 0; margin-top: 10%">
        <el-col :sm="7" :xs="18" class="border el-col-sm-offset-8 el-col-xs-offset-3 ">
          <h2 class="h2">用户登录</h2>
          <el-form-item label="用户名" class="form-item" prop="name">
            <el-input v-model="ruleForm.name" type="text" ></el-input>
          </el-form-item>

          <el-form-item label="密码" class="form-item" prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>

          <el-button type="primary" class="button" :loading="loading" v-on:click="submit">登 录</el-button>

        </el-col>
    </el-row>
  </el-form>
</template>

<style lang="less">
  @import '~@static/common/var.less';
  .border{ .border; background-color: var(--white); padding: .5rem 1.5rem 2rem 1.5rem !important; .border-radius;}
  .h2{ .text-align; color: @text-color;}
  .button{.width; .font-size; .margin-top;}
  .form-item{.margin-btm !important;}
  .el-form-item.is-required .el-form-item__label:before{content:'';}
</style>

<script>
// apis
import SystemApi from '@/apis/system'
// vuex
import AuthTypes from '@/stores/system/auth-types'
import {LOGIN_PAGE, HOME_PAGE} from '@/router/system'

export default {
  data () {
    return {
      // 表单数据
      ruleForm: {
        name: '',
        password: ''
      },
      // 是否显示登陆状态
      loading: false,
      // 验证规则
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      // console.log('按钮点击')
      this.loading = true
      // 登陆
      const form = {
        loginName: this.ruleForm.name,
        password: this.ruleForm.password
      }

      SystemApi.login(form).then((res) => {
        // console.log('res1', res)
        if (res) {
          // console.log('token', res.token)
          // console.log('$store', this.$store)
          // token 存入vuex
          this.$store.commit(AuthTypes.LOGIN, this.token)
          // 跳转
          // 函数参考 http://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp
          // console.log('login query.redirect', this.$route.query.redirect)
          const redirectUrl = decodeURIComponent(this.$route.query.redirect || HOME_PAGE)
          if (LOGIN_PAGE === redirectUrl) { // 等于登录路由
            console.log('111')
            this.$router.push(HOME_PAGE)
          } else {
            console.log('222')
            this.$router.push(redirectUrl)
          }
        }
      }).catch((reason) => {
        // 登陆失败 , 显示 toast 弹窗
        console.log('login fail', reason)
        if (reason && reason.body) {
          this.$message.error(reason.body)
        }
        // console.log('this.$message', this.$message)
      })
    }
  },
  components: {}
}
</script>
