<template>
  <div class="create">
    <h1>{{id? '编辑管理员': '新建管理员'}}</h1>
    <el-form @submit.native.prevent="save"  label-width="120px">
      <el-form-item label="管理员名称">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">完成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {
        username: '',
        parpasswordent: ''
      }
    }
  },
  mounted () {
    this.id && this.fetch()
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data.data
    },
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/admin_users/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '创建成功'
      })
    }
  }
}
</script>

<style>
</style>
