<template>
  <div class="page-hero" v-if="model">
    <div class="topbar d-flex ai-center bg-black py-2 px-3 text-white">
      <img src="../assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <span class="text-white">英雄联盟</span>
        <span class="text-grey-1 fs-xxs ml-2">攻略战</span>
      </div>
      <router-link to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image':`url(${model.banner}` }">
      <div class="info text-white p-3 d-flex flex-column h-100 jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.category.map(item => item.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores  d-flex ai-center" v-if="model.scories">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scories.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scories.skill}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scories.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scories.survice}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm"> 皮肤:2 &gt;</router-link>
        </div>
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
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  }
}
</script>

<style lang="scss">
.page-hero {
  .top{
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255,255,255,0.2)
      }
    }
  }
}
</style>
