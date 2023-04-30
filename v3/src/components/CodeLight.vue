<template>
  <div class="code-light">
    <div class="example-tip">
      <slot name="tip"></slot>
    </div>

    <div class="example-demo">
      <AsyncDemo :path="path" :key="path" />
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-button type="text" icon="vxe-icon-copy" @click="copyCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button type="text" :loading="loading" :icon="showCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleVisible">{{ $t(showCode ? 'app.body.button.hideCode' : 'app.body.button.showCode') }}</vxe-button>
      </div>
      <pre class="example-code-warpper" v-show="showCode">
        <code ref="codeRef">{{ codeText }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import { codeMaps } from '@/common/cache'
import { VXETable } from 'vxe-table'
import hljs from 'highlight.js'
import XEClipboard from 'xe-clipboard'
import AsyncDemo from './AsyncDemo.vue'

export default {
  name: 'CodeLight',
  props: {
    path: String,
    content: String
  },
  components: {
    AsyncDemo
  },
  data () {
    return {
      codeText: '',
      showCode: false,
      loading: false
    }
  },
  watch: {
    content (val) {
      this.codeText = val || ''
      this.buildCode()
    }
  },
  created () {
    this.codeText = this.content || ''
  },
  methods: {
    loadCode () {
      const compPath = this.path
      if (compPath) {
        if (codeMaps[compPath]) {
          this.codeText = codeMaps[compPath]
          this.buildCode()
          this.loading = false
        } else {
          this.loading = true
          return fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => response.text()).then(text => {
            this.codeText = text || ''
            codeMaps[compPath] = this.codeText
            this.buildCode()
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      } else if (this.codeText) {
        this.buildCode()
        this.loading = false
      }
      return Promise.resolve()
    },
    buildCode () {
      this.$nextTick(() => {
        const blockEl = this.$refs.codeRef
        if (blockEl) {
          hljs.highlightBlock(blockEl)
        }
      })
    },
    toggleVisible () {
      this.showCode = !this.showCode
      if (this.showCode) {
        this.loadCode()
      }
    },
    copyCode  () {
      if (this.codeText) {
        if (XEClipboard.copy(this.codeText)) {
          VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
      } else {
        this.loadCode().then(() => {
          if (XEClipboard.copy(this.codeText)) {
            VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.code-light {
  margin: 60px 0;
  border: 1px solid #e8eaec;
  border-radius: 4px;
  ::v-deep(.tip) {
    margin: 0;
  }
}
.example-tip {
  padding: 30px 30px 0 30px;
}
.example-demo {
  margin: 30px;
}
.example-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px dashed #f0f0f0;
}
.example-code-warpper {
  padding: 0 30px;
  margin: 0;
}
</style>
