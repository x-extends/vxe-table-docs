<template>
  <div class="code-light">
    <div class="example-tip">
      <p class="tip">
        <slot name="tip"></slot>
      </p>
    </div>

    <div v-if="$slots.use" class="example-use">
      <slot name="use"></slot>
    </div>

    <div class="example-demo">
      <AsyncDemo :path="path" :key="path" />
    </div>

    <div v-if="$slots.describe" class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.body.button.fixDocTip')">
          <vxe-button mode="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.body.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button mode="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showJsCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button mode="text" :loading="loading" :status="showJsCode ? 'primary' : ''" :icon="showJsCode ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleVisible">{{ $t(showJsCode ? 'app.body.button.hideCode' : 'app.body.button.showJsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showJsCode">
        <div v-for="(item, index) in importCodes" :key="index" class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${item.name}`" title="点击查看" target="_blank">{{ item.name }}</a>
          </div>
          <CodeRender language="javascript" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank">{{ getFileName(`${path}.vue`) }}</a>
          </div>
          <CodeRender language="html" :code="jsCodeText"></CodeRender>
        </div>
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

const gitBaseUrl = 'https://github.com/x-extends/vxe-table-docs/tree/main/v3'

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
      jsCodeText: '',
      showJsCode: false,
      loading: false,
      importCodes: []
    }
  },
  computed: {
    compDir () {
      const paths = this.path?.split('/') || []
      return `${gitBaseUrl}/src/views/${paths.slice(0, paths.length - 1).join('/')}`
    }
  },
  methods: {
    loadJsCode () {
      const compPath = this.path
      if (compPath) {
        if (codeMaps[compPath]) {
          this.jsCodeText = codeMaps[compPath]
          this.buildCode()
          this.loading = false
        } else {
          this.loading = true
          Promise.all([
            fetch(`${process.env.BASE_URL}example/js/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
              if (response.status >= 200 && response.status < 400) {
                return response.text()
              }
              return '暂无示例'
            }),
            ...(this.extraImports?.map(impPath => {
              return fetch(`${process.env.BASE_URL}example/js/${impPath}.ts?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
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
            this.jsCodeText = text1 || ''
            codeMaps[compPath] = this.jsCodeText
            this.importCodes = impTexts || '暂无'
            this.buildCode()
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      } else if (this.jsCodeText) {
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
      this.showJsCode = !this.showJsCode
      if (this.showJsCode) {
        this.loadJsCode()
      }
    },
    copyCode  () {
      if (this.jsCodeText) {
        if (XEClipboard.copy(this.jsCodeText)) {
          VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
      } else {
        this.loadJsCode().then(() => {
          if (XEClipboard.copy(this.jsCodeText)) {
            VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
          }
        })
      }
    },
    openDocs  () {
      open(`${gitBaseUrl}/src/views/${this.path}.vue`)
    }
  }
}
</script>

<style lang="scss" scoped>
.code-light {
  margin: 60px 0;
  border: 1px solid var(--vxe-table-docs-layout-border-color);
  border-radius: 4px;
  ::v-deep(.tip) {
    margin: 0;
  }
}
.example-tip {
  padding: 30px 30px 0 30px;
}
.example-use {
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
  border-top: 1px dashed var(--vxe-table-docs-layout-border-color);
}
.example-code-warpper {
  padding: 0 30px;
  margin: 0;
  pre {
    margin: 0;
    padding: 0;
  }
}
.example-code-item {
  display: block;
  position: relative;
}
.example-code-file {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  .link {
    color: #666666;
  }
}
</style>
