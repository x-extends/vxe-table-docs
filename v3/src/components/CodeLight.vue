<template>
  <div class="code-light">
    <div class="example-tip">
      <p class="tip">
        <slot name="tip"></slot>
      </p>
    </div>

    <div class="example-demo">
      <AsyncDemo :path="path" :key="path" />
    </div>

    <div class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.body.button.fixDocTip')">
          <vxe-button type="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.body.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button type="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showTsCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button type="text" :loading="loading" :icon="showTsCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleVisible">{{ $t(showTsCode ? 'app.body.button.hideCode' : 'app.body.button.showJsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showTsCode">
        <pre v-for="(item, index) in importCodes" :key="index">
          <code class="javascript" ref="importRef">{{ item.text }}</code>
          <div class="example-code-title">{{ item.name }}</div>
        </pre>
        <pre>
          <code class="html" ref="codeRef">{{ tsCodeText }}</code>
          <div class="example-code-title">{{ getFileName(`${path}.vue`) }}</div>
        </pre>
      </div>
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
    extraImports: Array
  },
  components: {
    AsyncDemo
  },
  data () {
    return {
      tsCodeText: '',
      showTsCode: false,
      loading: false,
      importCodes: []
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
          Promise.all([
            fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
              if (response.status >= 200 && response.status < 400) {
                return response.text()
              }
              return '暂无示例'
            }),
            ...(this.extraImports?.map(impPath => {
              return fetch(`${process.env.BASE_URL}example/${impPath}.ts?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
                if (response.status >= 200 && response.status < 400) {
                  return response.text().then(text => {
                    return {
                      path: `${impPath}.ts`,
                      name: this.getFileName(`${impPath}.ts`),
                      text
                    }
                  })
                }
                return {
                  path: `${impPath}.ts`,
                  name: this.getFileName(`${impPath}.ts`),
                  text: ''
                }
              })
            }) || [])
          ]).then(([text1, ...impTexts]) => {
            this.tsCodeText = text1 || ''
            codeMaps[compPath] = this.tsCodeText
            this.importCodes = impTexts
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
    getFileName  (path) {
      return path.split('/').slice(-1)[0]
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

.example-describe {
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
  pre {
    position: relative;
  }
}
.example-code-title {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
}
</style>
