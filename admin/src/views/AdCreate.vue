<template>
  <div class="create">
    <h1>{{id? '编辑广告位': '新建广告位'}}</h1>
    <el-form @submit.native.prevent="save"  label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告名称">
            <el-button @click="model.items.push({})">
              <i class="el-icon-plus"></i>添加广告
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap">
              <el-col :md="24" v-for="(item, index) in model.items" :key="index">
              <el-form-item label="跳转链接URL" style="margin-top:0.5rem">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片" style="margin-top:0.5rem">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-file-list="false"
                  :headers="getAuthHeader()"
                  :on-success="res => $set(item, 'img', res.url)"
                >
                  <img v-if="item.img" :src="item.img" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.items.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
        items: []
      },
      parent: []
    }
  },
  mounted () {
    this.id && this.fetch()
  },
  methods: {
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/ads/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '创建广告位成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({}, this.model, res.data.data)
    }
  }
}
</script>

<style>
</style>
