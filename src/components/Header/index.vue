<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderPopover from '@components/HeaderPopover/index.vue'

import ImageBg from '@assets/images/bg.webp'
import ImageBg1 from '@assets/images/bg.png'
import airbnbRed from '@assets/images/airbnb-red.png'
import airbnbWhite from '@assets/images/airbnb-white.png'

import {
  IconGithub,
  IconUnorderedList,
  IconApps,
  IconSearch
} from '@arco-design/web-vue/es/icon'

const images = [ImageBg, ImageBg1]
const headerBar = ref(null)
const backgroundColor = ref('transparent')
let scrollTop = ref(0)
let rootDom: HTMLElement | null

const dialogVisible = ref(false)

const getScrollTop = () => {
  scrollTop.value = rootDom?.scrollTop || 0
}

onMounted(() => {
  rootDom = document.getElementById('app')
  rootDom?.addEventListener('scroll', getScrollTop)
})

onBeforeUnmount(() => {
  rootDom?.removeEventListener('scroll', getScrollTop)
})
</script>

<template>
  <div class="travel-header">
    <a-carousel
      :auto-play="true"
      class="travel-header-carousel"
      show-arrow="never"
      direction="vertical"
      animation-name="fade"
    >
      <a-carousel-item v-for="image in images">
        <img :src="image" class="img" />
      </a-carousel-item>
    </a-carousel>

    <div
      ref="headerBar"
      class="travel-header-content"
      :style="{
        backgroundColor: scrollTop > 100 ? '#fff' : 'transparent',
        boxShadow:
          scrollTop > 100 ? '2px 4px 10px rgba(0, 0, 0, 0.116)' : 'none'
      }"
    >
      <div class="left">
        <img class="img" :src="scrollTop > 100 ? airbnbRed : airbnbWhite" />
      </div>

      <div class="search">
        <a-input
          class="search-input"
          placeholder="Start your search"
          allow-clear
        >
          <template #suffix>
            <a-button status="danger" type="primary" shape="circle">
              <icon-search></icon-search>
            </a-button>
          </template>
        </a-input>
      </div>

      <div class="right">
        <a-button
          class="btn-1"
          shape="round"
          type="text"
          :style="{ color: scrollTop > 100 ? '#222' : '#fff' }"
        >
          Become a Host
        </a-button>

        <a-button class="btn-2" shape="circle" type="text">
          <icon-apps
            :class="['icon', scrollTop > 100 ? 'icon-grid' : '']"
          ></icon-apps>
        </a-button>
        <a-popover trigger="click" position="lt">
          <a-button class="btn-3" shape="round">
            <icon-unordered-list class="icon"></icon-unordered-list>
            <icon-github class="icon"></icon-github>
          </a-button>
          <template #content>
            <HeaderPopover />
          </template>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@assets/scss/mixin';

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
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 80px;
    width: calc(100% - 160px);
    z-index: 1;
    padding: 0 80px;

    .left {
      @include flex;
      cursor: pointer;

      .img {
        width: 120px;
        height: auto;
      }

      .logo {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .right {
      @include flex;
      .btn-1 {
        color: #fff;

        &:hover {
          color: #222 !important;
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
        .icon-grid {
          color: #222;
        }

        &:hover .icon {
          color: #222;
        }
      }

      .btn-3 {
        @include flex(space-between, center, row, inline-flex);
        width: 77px;
        height: 42px;
        background-color: #fff;
        border: 1px solid #ddd;

        .icon {
          font-size: 18px;
        }
      }
    }

    .search {
      &-input {
        width: 300px;
        height: 48px;
        align-items: center;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 40px;
        box-shadow: 0 1px 2px rgb(0, 0, 0, 0.08), 0 4px 12px rgb(0, 0, 0, 0.05);
        color: #222;
        max-width: 100%;
        transition: box-shadow 0.2s ease;
        vertical-align: middle;
      }
    }
  }
}
</style>
