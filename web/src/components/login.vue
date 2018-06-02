
<template>
      <el-form :model="ruleForm" :rules="rules" label-position="right" ref="ruleForm" label-width="4rem">
      <el-row :gutter="10"  style="margin: 0; margin-top: 10%">
          <el-col :sm="7" :xs="18" class="border el-col-sm-offset-9 el-col-xs-offset-3 ">
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
  @import '~@static/common/common.less';
  .border{ .border; background-color: var(--white); padding: .5rem 1.5rem 2rem 1.5rem !important; .border-radius;}
  .h2{ .text-align; color: @text-color;}
  .button{.width; .font-size; .margin-top;}
  .form-item{.margin-btm !important;}
  .el-form-item.is-required .el-form-item__label:before{content:'';}
</style>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      loading: false,
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
      // 跳转
      this.$router.push('/home')
    }
  },
  components: {}
}
</script>
