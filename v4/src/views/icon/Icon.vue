<template>
  <div>
    <h2>{{ $t('app.aside.nav.icon') }}</h2>
    <p class="tip">内置轻量级的 css 图标，可以通过 <router-link class="link" :to="{name: 'StartIcons'}">setup</router-link> 替换为 font 图标</p>

    <h3>{{ $t('使用方法') }}</h3>
    <p class="">直接通过设置类名为 vxe-icon-edit 来使用即可。例如：</p>
    <demo-block>
      <template v-slot:source>
        <div>
          <i class="vxe-icon-edit"></i>
          <i class="vxe-icon-refresh roll"></i>
          <i class="vxe-icon-print"></i>
          <vxe-button status="primary" icon="vxe-icon-search">图标按钮</vxe-button>
        </div>
      </template>
      <template v-slot:highlight>
        <pre><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre>
      </template>
    </demo-block>

    <h3>{{ $t('图标集合') }}</h3>
    <ul class="vxe-row icon-list" title="点击复制内容">
      <li class="vxe-col--4" v-for="name in iconList" :key="name" @click="copyEvent(name)">
        <i :class="`${prefixClass}${name}`"></i>
        <div class="title">{{ prefixClass }}{{ name }}</div>
      </li>
    </ul>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
    </pre> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VXETable } from 'vxe-table'
import XEClipboard from 'xe-clipboard'

export default defineComponent({
  setup () {
    const prefixClass = 'vxe-icon-'
    const copyEvent = (name: string) => {
      if (XEClipboard.copy(`${prefixClass}${name}`)) {
        VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
      }
    }
    return {
      prefixClass,
      iconList: ['fullscreen', 'minimize', 'print', 'upload', 'download', 'cloud-upload', 'cloud-download', 'spinner', 'close', 'custom-column', 'edit', 'refresh', 'zoom-in', 'caret-down', 'caret-up', 'caret-right', 'caret-left', 'square-checked-fill', 'square-close', 'square-down', 'square-left', 'square-caret-right', 'square-minus', 'square-plus', 'square-right', 'square-up', 'square-checked', 'square-down-fill', 'square-minus-fill', 'square-close-fill', 'square-left-fill', 'square-caret-right-fill', 'square-up-fill', 'square-right-fill', 'square-plus-fill', 'square-plus-square', 'square-fill', 'square-square', 'sort-alpha-desc', 'sort-alpha-asc', 'sort-numeric-asc', 'sort-numeric-desc', 'star-fill', 'star', 'star-half', 'lock-fill', 'unlock-fill', 'question', 'exclamation', 'information', 'ellipsis-h', 'ellipsis-v', 'save', 'setting', 'setting-fill', 'user-fill', 'link', 'user', 'sort', 'chart-pie', 'chart-line', 'swap', 'num-list', 'copy', 'company', 'swap-right', 'swap-left', 'table', 'merge-cells', 'paste', 'cut', 'lock', 'unlock', 'chart-bar', 'fixed-fill', 'fixed', 'square', 'check', 'question-circle-fill', 'info-circle-fill', 'error-circle-fill', 'delete', 'dot', 'success-circle', 'delete-fill', 'minus', 'maximize', 'info-circle', 'question-circle', 'warning-circle', 'warnion-circle-fill', 'eye-fill', 'search', 'funnel', 'eye-fill-close', 'search-zoom-in', 'arrow-right', 'arrow-left', 'arrow-up', 'calendar', 'arrow-down', 'warning-triangle', 'add', 'arrow-double-left', 'arrow-double-right', 'menu', 'repeat', 'warning-triangle-fill', 'error-circle', 'zoom-out', 'success-circle-fill', 'radio-checked', 'checkbox-unchecked', 'checkbox-checked', 'checkbox-indeterminate', 'radio-unchecked'],
      copyEvent,
      demoCodes: [
        `
        <i class="vxe-icon-edit"></i>
        <i class="vxe-icon-refresh roll"></i>
        <i class="vxe-icon-print"></i>
        <vxe-button status="primary" icon="vxe-icon-search">图标按钮</vxe-button>
        `
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.source{
  i{
    color: #606266;
    margin-right:40px;
    font-size: 26px;
    vertical-align: middle;
  }
}

.icon-list {
  font-size: 26px;
  text-align: center;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  overflow: hidden;
  margin: 0;
  padding: 0;
  &:after {
    content: "";
    clear: both;
  }
  & > li {
    height: 100px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    padding-top: 10px;
    & > i {
      color: #606266;
      border-color: #606266;
    }
    &:hover {
      & > i {
        color: #5CB6FF;
        border-color: #5CB6FF;
      }
    }
    .title {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
