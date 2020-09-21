<template>
  <div class="create">
    <h1>{{id? '编辑英雄': '新建英雄'}}</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :headers="getAuthHeader()"
              :on-success="res => $set(model, 'avatar', res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :headers="getAuthHeader()"
              :on-success="res => $set(model, 'banner', res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="model.category" multiple>
              <el-option
                v-for="(item, index) in categories"
                :key="index"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate v-model="model.scories.difficult" :max="9" show-score style="margin-top: 10px"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate v-model="model.scories.skill" :max="9" show-score style="margin-top: 10px"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate v-model="model.scories.attack" :max="9" show-score style="margin-top: 10px"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate v-model="model.scories.survice" :max="9" show-score style="margin-top: 10px"></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.itemssucc" multiple>
              <el-option
                v-for="(item, index) in items"
                :key="index"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.itemdefeat" multiple>
              <el-option
                v-for="(item, index) in items"
                :key="index"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.useageTips"></el-input>
          </el-form-item>
          <el-form-item label="对战思路">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能信息" name="attack">
          <el-button @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>

              <el-form-item label="名称">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-file-list="false"
                  :headers="getAuthHeader()"
                  :on-success="res => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>

              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>

              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>

              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="英雄关系" name="partner">
          <el-button @click="model.partners.push({})">
            <i class="el-icon-plus"></i>添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, index) in model.partners" :key="index">
              <el-form-item label="名称">
                <el-select v-model="item.hero" filterable>
                  <el-option v-for="(item, index) in partnerdata" :key="index" :label="item.name" :value="item._id"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger" @click="model.partners.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

      </el-tabs>
      <!-- <el-form-item label="英雄关系">
        <el-rate v-model="model.partners" :max="9" show-score style="margin-top: 10px"></el-rate>
      </el-form-item>-->

      <el-form-item>
        <el-button style="margin-top: 1rem" type="primary" native-type="submit">完成</el-button>
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
      activeName: 'attack',
      model: {
        name: '',
        avatar: '',
        title: '',
        category: [],
        scories: {
          difficult: 0,
          skill: 0,
          attack: 0,
          survice: 0
        },
        skills: [],
        partners: [],
        itemssucc: [],
        itemdefeat: []
      },
      categories: [],
      items: [],
      partnerdata: []
    }
  },
  mounted () {
    this.id && this.fetch()
    this.fetchCategories()
    this.fetchItems()
    this.fetchPartnerData()
  },
  methods: {
    async fetchPartnerData () {
      const res = await this.$http.get('rest/heroes')
      this.partnerdata = res.data.data
      console.log(this.partnerdata, 'this.partnerdata')
    },
    async fetchItems () {
      const res = await this.$http.get('rest/items')
      this.items = res.data.data
    },
    async fetchCategories () {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data.data.filter(item => { return item.parent })
    },
    async save () {
      let res
      if (this.id) {
        res = this.$http.put(`rest/heroes/${this.id}`, this.model)
      } else {
        res = this.$http.post('rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: this.id ? '修改英雄信息成功' : '创建英雄成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      this.model = Object.assign(this.model, res.data.data)
      console.log(this.model, 'this.model')
    }
  }
}
</script>

<style>
</style>
