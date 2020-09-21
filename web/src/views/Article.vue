<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2">
      <div class="iconfont icon-Back" @click="$router.go(-1)"></div>
      <strong class="flex-1">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        {{model.createdAt}}
      </div>
    </div>
    <div class="px-3 py-3 body" v-html="model.description"></div>
    <div class="p-3 border-top">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg">相关资讯</strong>
      </div>
      <div class="pt-2">
      <router-link tag="div" :to="`/articles/${item._id}`" class="py-1" v-for="(item, index) in model.related" :key="index">
      {{item.title}}
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: null
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  watch: {
    id: 'fetchData'
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  }
}
</script>

<style lang="scss">
.page-article{
  icon-Bcak {
    font-size: 1.6932rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
