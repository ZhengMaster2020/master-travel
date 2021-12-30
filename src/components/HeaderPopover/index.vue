<!--
 * @Author: your name
 * @Date: 2021-12-30 22:05:30
 * @LastEditTime: 2021-12-31 00:25:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts/master-travel/src/components/HeaderPopover/index.vue
-->
<script setup lang="ts"></script>

<template>
  <div class="header-popover">
    <a-list :bordered="false">
      <template #header>
        <div class="header-popover-list-item">Sign up</div>
      </template>
      <a-list-item class="header-popover-list-item">login in </a-list-item>
      <a-divider class="header-popover-divider" />
      <a-list-item class="header-popover-list-item">Host your home</a-list-item>
      <a-list-item class="header-popover-list-item"
        >Host your experience</a-list-item
      >
      <a-list-item class="header-popover-list-item">Help</a-list-item>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
.header-popover {
  width: 220px;

  &-list-item {
    cursor: pointer;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out;
    background-color: #fff;

    &:hover {
      font-size: 16px;
      font-weight: 500;
      background-color: #f5f5f5;
    }

    &:last-child {
      margin: 0;
    }
  }

  &-divider {
    margin: 10px 0;
  }

  :deep(.arco-list) {
    .arco-list-header {
      padding: 0;
    }

    .arco-list-item {
      padding: 10px 20px;
    }
  }
}
</style>
