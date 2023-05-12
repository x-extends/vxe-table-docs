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
        <vxe-tooltip :content="$t('app.body.button.fixDocTip')">
          <vxe-button type="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.body.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button type="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showTsCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button type="text" :loading="loading" :icon="showTsCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleVisible">{{ $t(showTsCode ? 'app.body.button.hideCode' : 'app.body.button.showTsCode') }}</vxe-button>
      </div>
      <pre class="example-code-warpper" v-show="showTsCode">
        <code ref="codeRef">{{ tsCodeText }}</code>
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
    path: String
  },
  components: {
    AsyncDemo
  },
  data () {
    return {
      tsCodeText: '',
      showTsCode: false,
      loading: false
    }
  },
  methods: {
    loadCode () {
      const compPath = this.path
      if (compPath) {
        if (codeMaps[compPath]) {
          this.tsCodeText = codeMaps[compPath]
          this.buildCode()
          this.loading = false
        } else {
          this.loading = true
          return fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
            if (response.status >= 200 && response.status < 400) {
              return response.text()
            }
            return '暂无示例'
          }).then(text => {
            this.tsCodeText = text || ''
            codeMaps[compPath] = this.tsCodeText
            this.buildCode()
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      } else if (this.tsCodeText) {
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
      this.showTsCode = !this.showTsCode
      if (this.showTsCode) {
        this.loadCode()
      }
    },
    copyCode  () {
      if (this.tsCodeText) {
        if (XEClipboard.copy(this.tsCodeText)) {
          VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
      } else {
        this.loadCode().then(() => {
          if (XEClipboard.copy(this.tsCodeText)) {
            VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
          }
        })
      }
    },
    openDocs  () {
      open(`https://github.com/x-extends/vxe-table-docs/tree/main/v3/src/views/${this.path}.vue`)
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
