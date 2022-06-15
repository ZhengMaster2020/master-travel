<script lang="ts" setup>
const props = defineProps({
  visible: {
    type: Boolean,
    defalut: false
  }
})

const emit = defineEmits(['change'])

const handleOk = () => {
  emit('change', false)
}

const handleCancel = () => {
  emit('change', false)
}
</script>

<template>
  <a-modal
    draggable
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title> Title </template>
    <div>
      You can cusstomize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </a-modal>
</template>
