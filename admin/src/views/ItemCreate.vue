<template>
  <div class="create">
    <h1>{{id? '编辑分类': '新建分类'}}</h1>
    <el-form @submit.native.prevent="save"  label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :headers="getAuthHeader()"
            :on-success="handleAvatarSuccess">
            <img v-if="model.icon" :src="model.icon" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
        icon: ''
      }
    }
  },
  mounted () {
    this.id && this.fetch()
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.model.icon = res.url
    },
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '创建物品成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data.data
    }
  }
}
</script>

<style>
</style>
