<template>
  <div class="create">
    <h1>{{id? '编辑文章': '新建文章'}}</h1>
    <el-form @submit.native.prevent="save"  label-width="120px">
      <el-form-item label="所属分类">
        <el-select v-model="model.category" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor v-model="model.description" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">完成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {
        title: '',
        category: '',
        description: ''
      },
      categories: []
    }
  },
  components: {
    VueEditor
  },
  mounted () {
    this.id && this.fetch()
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data.data
    },
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '创建帖子成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data.data
    },
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  }
}
</script>

<style>
</style>
