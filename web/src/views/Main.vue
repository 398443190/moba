<template>
  <div class="main">
    <div class="topbar d-flex ai-center bg-black py-2 px-3">
      <img src="../assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <div class="text-white">英雄联盟</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <router-link tag="div" class="nav-link" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.topbar {
  top: 0;
  position: sticky;
  z-index: 999;

}
</style>
