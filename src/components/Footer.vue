<template>
  <footer class="travel-footer-wrap">
    <div class="travel-footer">
      <div class="travel-footer-help">
        <div class="title">ABOUT</div>
        <router-link to="/" class="link">How Airbnb works</router-link>
        <router-link to="/" class="link">Newsroom</router-link>
        <router-link to="/" class="link">Airbnb 2021</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">ABOUT</div>
        <router-link to="/" class="link">How Airbnb works</router-link>
        <router-link to="/" class="link">Newsroom</router-link>
        <router-link to="/" class="link">Airbnb 2021</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">ABOUT</div>
        <router-link to="/" class="link">How Airbnb works</router-link>
        <router-link to="/" class="link">Newsroom</router-link>
        <router-link to="/" class="link">Airbnb 2021</router-link>
      </div>
      <div class="travel-footer-help">
        <div class="title">ABOUT</div>
        <router-link to="/" class="link">How Airbnb works</router-link>
        <router-link to="/" class="link">Newsroom</router-link>
        <router-link to="/" class="link">Airbnb 2021</router-link>
      </div>
    </div>

    <a-divider class="travel-footer-divider" />

    <div class="travel-footer-bottom">
      <div class="left">
        <span>© 2021 Airbnb, Inc.·</span>
        <router-link to="/">Privacy</router-link>
        <span>.</span>
        <router-link to="/">Terms</router-link>
        <span>.</span>
        <router-link to="/">Sitemap</router-link>
      </div>
      <div class="right">
        <icon-apps />
        <router-link to="/">English(US)</router-link>
        <div>
          <span>￥</span>
          <router-link to="/">CNY</router-link>
        </div>
        <icon-weibo-circle-fill />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconApps, IconWeiboCircleFill } from '@arco-design/web-vue/es/icon'
</script>

<style scoped lang="scss">
@import '../assets/scss/mixin.scss';

.travel-footer-wrap {
  width: calc(100vw - 160px);
  padding: 48px 80px;
  background-color: #f7f7f7;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
}

.travel-footer {
  display: grid;
  grid-template-columns: repeat(4, 25%);

  &-help {
    @include flex(center, flex-start, column);

    .title {
      color: rgb(34, 34, 34);
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .link {
      line-height: 20px;
      color: #222;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 16px;
    }
  }
}

.travel-footer-divider {
  width: 100%;
}

.travel-footer-bottom {
  @include flex(space-between);

  .right {
    @include flex;
  }
}
</style>
