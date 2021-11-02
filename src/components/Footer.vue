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
        <span>© 2021 Airbnb, Inc.</span>
        <div class="link-wrap">
          <router-link to="/">Privacy</router-link>
          <router-link to="/">Terms</router-link>
          <router-link to="/">Sitemap</router-link>
        </div>
      </div>
      <div class="right">
        <img :src="sphere" class="img" />
        <router-link to="/">English(US)</router-link>
        <div style="margin-left: 10px">
          <span style="margin-right: 5px">￥</span>
          <router-link to="/">CNY</router-link>
        </div>
        <icon-weibo-circle-fill style="margin-left: 10px" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconWeiboCircleFill } from '@arco-design/web-vue/es/icon'
import sphere from '../assets/images/sphere.png'
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
  color: #222;

  .link-wrap {
    margin-left: 10px;
    a {
      position: relative;
      color: #222;
      margin-left: 10px;
      padding-left: 10px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &::before {
        content: '.';
        position: absolute;
        top: -4px;
        left: -2px;
      }
    }
  }

  .left,
  .right,
  .link-wrap {
    @include flex;
    color: #222;
  }

  .right {
    a {
      color: #222;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #666;
      }
    }

    .img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      cursor: pointer;
    }
  }
}
</style>
