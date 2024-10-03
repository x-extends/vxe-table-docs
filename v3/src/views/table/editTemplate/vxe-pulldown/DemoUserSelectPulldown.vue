<template>
  <vxe-pulldown class="user-select-pulldown" v-model="showPopup" trigger="manual" show-popup-shadow>
    <template #default>
      <vxe-input :value="value" prefix-icon="vxe-icon-user" @focus="focusEvent"></vxe-input>
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: String
  },
  data () {
    const userList = [
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
    ]

    return {
      showPopup: false,
      userList
    }
  },
  methods: {
    focusEvent  () {
      this.$nextTick(() => {
        this.showPopup = true
      })
    },
    selectUser  (item: any) {
      this.showPopup = false
      this.$emit('input', item.value)
    }
  }
})
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
