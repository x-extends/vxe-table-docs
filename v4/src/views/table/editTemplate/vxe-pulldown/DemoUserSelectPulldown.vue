<template>
  <vxe-pulldown class="user-select-pulldown" v-model="showPopup" trigger="manual" show-popup-shadow>
    <template #default>
      <vxe-input :model-value="modelValue" prefix-icon="vxe-icon-user" @focus="focusEvent"></vxe-input>
    </template>
    <template #dropdown>
      <ul class="user-list">
        <li class="user-item" v-for="(item, index) in userList" :key="index" @click="selectUser(item)">
          <vxe-icon name="user"></vxe-icon>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </template>
  </vxe-pulldown>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

defineProps({
  modelValue: String
})

const emit = defineEmits([
  'update:modelValue'
])

const showPopup = ref(false)

const userList = ref([
  { label: 'test1', value: 'test1' },
  { label: 'test2', value: 'test2' },
  { label: 'test3', value: 'test3' },
  { label: 'test4', value: 'test4' },
  { label: 'test5', value: 'test5' },
  { label: 'test6', value: 'test6' },
  { label: 'test7', value: 'test7' },
  { label: 'test8', value: 'test8' },
  { label: 'test9', value: 'test9' },
  { label: 'test10', value: 'test10' },
  { label: 'test11', value: 'test11' },
  { label: 'test12', value: 'test12' },
  { label: 'test13', value: 'test13' }
])

const focusEvent = () => {
  nextTick(() => {
    showPopup.value = true
  })
}

const selectUser = (item: any) => {
  showPopup.value = false
  emit('update:modelValue', item.value)
}
</script>

<style lang="scss" scoped>
.user-select-pulldown {
  width: 100%;
}
.user-list {
  height: 200px;
  overflow: auto;
  .user-item {
    line-height: 28px;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
