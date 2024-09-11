<template>
  <div>
    <CodeLight path="icon/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="字体图标">
          <div>支持通过组件方式渲染，也支持直接使用 class 方式</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <div>
      <ul class="icon-list">
        <li class="icon-item" v-for="name in iconList" :key="name">
          <div class="icon-preview"  @click="copyEvent(`${prefixClass}${name}`)" title="点击复制内容">
            <vxe-icon :name="name"></vxe-icon>
          </div>
          <div class="icon-title">
            <vxe-button mode="text" status="info" size="mini" @click="copyEvent(name)" title="点击复制内容">{{ name }}</vxe-button>
          </div>
          <div class="icon-name">
            <vxe-button mode="text" status="info" size="mini" @click="copyEvent(`${prefixClass}${name}`)" title="点击复制内容">{{ prefixClass }}{{ name }}</vxe-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      prefixClass: 'vxe-icon-',
      iconList: [
        'add', 'add-sub', 'add-user', 'add-users', 'align-center', 'align-left', 'align-right', 'alipay', 'arrow-double-left', 'arrow-double-right', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-down', 'arrows-left', 'arrows-right', 'arrows-up', 'association-form', 'bell', 'bell-fill', 'calendar', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'carousel', 'chart-bar-x', 'chart-bar-y', 'chart-line', 'chart-pie', 'chart-radar', 'chat', 'chat-fill', 'check', 'checkbox-checked', 'checkbox-checked-fill', 'checkbox-indeterminate-fill', 'checkbox-unchecked', 'click-button', 'close', 'cloud-download', 'cloud-upload', 'cloudy', 'comment', 'company', 'copy', 'custom-column', 'cut', 'delete', 'delete-fill', 'dot', 'download', 'drag-handle', 'edit', 'ellipsis-h', 'ellipsis-v', 'end-page', 'envelope', 'envelope-fill', 'envelope-open', 'envelope-open-fill', 'error-circle', 'error-circle-fill', 'exclamation', 'eye-fill', 'eye-fill-close', 'feedback', 'file', 'file-excel', 'file-image', 'file-markdown', 'file-pdf', 'file-ppt', 'file-txt', 'file-word', 'file-zip', 'fixed-left', 'fixed-left-fill', 'fixed-right', 'fixed-right-fill', 'flag', 'flag-fill', 'flow-branch', 'folder', 'folder-open', 'fullscreen', 'funnel', 'funnel-clear', 'goods', 'goods-fill', 'heavy-rain', 'home', 'home-fill', 'home-page', 'indicator', 'info-circle', 'info-circle-fill', 'information', 'input', 'layout', 'lightning', 'link', 'location', 'location-fill', 'lock', 'lock-fill', 'maximize', 'menu', 'menu-fold', 'menu-unfold', 'merge-cells', 'message-fill', 'microphone', 'microphone-fill', 'minimize', 'minus', 'mobile', 'moon', 'num-list', 'number', 'paste', 'pc', 'pct-1-1', 'pct-full', 'picture', 'picture-fill', 'platform', 'print', 'print-batch', 'question', 'question-circle', 'question-circle-fill', 'radio-checked', 'radio-checked-fill', 'radio-unchecked', 'recover', 'refresh', 'repeat', 'rmb', 'rotate-left', 'rotate-right', 'row-col', 'save', 'search', 'search-zoom-in', 'search-zoom-out', 'select', 'send', 'send-fill', 'setting', 'setting-fill', 'share', 'share-fill', 'signature', 'sort', 'sort-alpha-asc', 'sort-alpha-desc', 'sort-asc', 'sort-desc', 'sort-numeric-asc', 'sort-numeric-desc', 'spinner', 'square', 'square-caret-right', 'square-caret-right-fill', 'square-checked', 'square-checked-fill', 'square-close', 'square-close-fill', 'square-down', 'square-down-fill', 'square-fill', 'square-left', 'square-left-fill', 'square-minus', 'square-minus-fill', 'square-plus', 'square-plus-fill', 'square-plus-square', 'square-right', 'square-right-fill', 'square-square', 'square-up', 'square-up-fill', 'star', 'star-fill', 'star-half', 'subtable', 'success-circle', 'success-circle-fill', 'sunny', 'swap', 'swap-down', 'swap-left', 'swap-right', 'swap-up', 'switch', 'table', 'tabs', 'text', 'textarea', 'time', 'tree-select', 'undo', 'unlock', 'unlock-fill', 'upload', 'usd', 'user', 'user-fill', 'voice', 'voice-fill', 'warning-circle', 'warning-circle-fill', 'warning-triangle', 'warning-triangle-fill', 'wechat', 'zoom-in', 'zoom-out'
      ]
    }
  },
  methods: {
    copyEvent  (name: string) {
      if (VxeUI.clipboard.copy(name)) {
        VxeUI.modal.message({ content: `${name} 已复制到剪贴板！`, status: 'success' })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  border-top: 1px solid var(--vxe-ui-docs-layout-border-color);
  border-left: 1px solid var(--vxe-ui-docs-layout-border-color);
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  max-width: 1000px;
  &:after {
    content: "";
    clear: both;
  }
  .icon-item {
    display: flex;
    flex-direction: column;
    width: 14.15%;
    height: 120px;
    border-right: 1px solid var(--vxe-ui-docs-layout-border-color);
    border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
    cursor: pointer;
    .icon-title,
    .icon-name {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .icon-name {
      padding-bottom: 6px;
    }
    .icon-preview {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      font-size: 34px;
    }
  }
}
</style>
