<!--
 * @Description: 
 * @Date: 2022-06-15
-->

<template>
  <div class="header-popover">
    <a-list :bordered="false">
      <template #header>
        <div
          class="header-popover-list-item"
          @click="changeDialogVisible('sign')"
        >
          Sign up
        </div>
      </template>
      <a-list-item
        class="header-popover-list-item"
        @click="changeDialogVisible('login')"
        >login in
      </a-list-item>
      <a-divider class="header-popover-divider" />
      <a-list-item class="header-popover-list-item">Host your home</a-list-item>
      <a-list-item class="header-popover-list-item"
        >Host your experience</a-list-item
      >
      <a-list-item class="header-popover-list-item">Help</a-list-item>
    </a-list>
  </div>
  <Login :visible="visible" @change="visibleChange" />
</template>

<script setup lang="ts">
import { ref, unref, Ref } from 'vue'
import Login from '@/pages/Login/index.vue'

const visible = ref(false)

const changeDialogVisible = (type: String) => {
  console.log(type, 'sdssd')
  visible.value = true
}

const visibleChange = (visible: Ref<Boolean>) => {
  visible.value = unref(visible)
}
</script>

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
