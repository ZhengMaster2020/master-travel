<template>
  <div class="travel-header">
    <a-carousel
      :auto-play="true"
      class="travel-header-carousel"
      show-arrow="never"
      direction="vertical"
      indicator-position="never"
      animation-name="fade"
    >
      <a-carousel-item v-for="image in images">
        <img :src="image" class="img" />
      </a-carousel-item>
    </a-carousel>

    <div class="travel-header-content">
      <div class="left">
        <icon-qq-circle-fill></icon-qq-circle-fill>
        <span>QQ-TRAVEL</span>
      </div>

      <div class="search">search</div>

      <div class="right">
        <a-button class="btn-1" shape="round" type="text">
          Become a Host
        </a-button>
        <a-button class="btn-2" shape="circle" type="text">
          <IconApps class="icon"></IconApps>
        </a-button>
        <a-button class="btn-3" shape="round">
          <icon-unordered-list class="icon"></icon-unordered-list>
          <icon-github class="icon"></icon-github>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageBg from '../assets/images/bg.webp'
import ImageBg1 from '../assets/images/bg.png'
import {
  IconGithub,
  IconQqCircleFill,
  IconUnorderedList,
  IconApps
} from '@arco-design/web-vue/es/icon'

const images = [ImageBg, ImageBg1]
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin';

.travel-header {
  position: relative;
  color: #fff;

  &-carousel {
    width: 100vw;
    height: 800px;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  &-content {
    @include flex(space-between);
    position: absolute;
    top: 0;
    left: 0;
    // background-color: #fff;
    height: 80px;
    width: calc(100% - 160px);
    z-index: 1;
    padding: 0 80px;
    border-bottom: 1px solid #f0f5f5;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.116);

    .right {
      @include flex;
      .btn-1 {
        color: #fff;
        &:hover {
          color: #666;
        }
      }
      .btn-2 {
        margin: 0 10px;
        cursor: pointer;

        .icon {
          margin-top: 4px;
          color: #fff;
          font-size: 18px;
        }
        &:hover .icon {
          color: #666;
        }
      }

      .btn-3 {
        @include flex(space-between, center, row, inline-flex);
        width: 77px;
        height: 42px;

        .icon {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
