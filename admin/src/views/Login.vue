<template>
  <div class="login">
    <el-card class="login-card">
      <div slot="header" class="clearfix">
        <span>请先登陆</span>
      </div>
      <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" @submit.native.prevent="save">
      <el-form-item label="用户名" prop="pass">
        <el-input v-model="model.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="model.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
        <el-button native-type="reset">重置</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async save () {
      const res = await this.$http.post('/login', this.model)
      if (res) {
        localStorage.token = res.data.token
        this.$router.push('/')
        this.$message({
          type: 'success',
          message: '登录成功'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-card {
  width: 50rem;
  margin: 20rem auto;
}
</style>
