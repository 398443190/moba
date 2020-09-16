<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" class="w-100" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" class="w-100" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" class="w-100" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons d-flex bg-white mt-3 flex-wrap text-center pt-3 text-grey-1">
      <div class="nav-item mb-3" v-for="item in 10" :key="item">
        <i class="sprite sprite-news"></i>
        <div>爆料站</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  .nav-item {
    width: 25%;
  }
}
.sprite {
  background: url(../assets/images/index.png) no-repeat 0 0;
}
</style>
