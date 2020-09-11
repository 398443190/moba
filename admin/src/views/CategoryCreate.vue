<template>
  <div class="create">
    <h1>{{id? '编辑分类': '新建分类'}}</h1>
    <el-form @submit.native.prevent="save"  label-width="120px">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parent" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
        name: '',
        parent: ''
      },
      parent: []
    }
  },
  mounted () {
    this.id && this.fetch()
    this.fetchparent()
  },
  methods: {
    async fetchparent () {
      const res = await this.$http.get('rest/categories')
      this.parent = res.data.data
    },
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/categories/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '创建帖子成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data.data
    }
  }
}
</script>

<style>
</style>
