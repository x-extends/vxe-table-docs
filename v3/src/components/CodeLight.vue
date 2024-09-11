<template>
  <div class="code-light">
    <div class="example-tip">
      <div class="tip">
        <slot name="tip"></slot>
      </div>
    </div>

    <div v-if="$slots.install" class="example-install">
      <h2 class="example-install-header" :class="{active: showInstall}" @click="showInstall = !showInstall">
        <vxe-icon class="example-install-icon" name="arrow-right"></vxe-icon>
        <span class="example-install-title">安装&使用</span>
      </h2>
      <div v-show="showInstall" class="example-install-body">
        <slot name="install"></slot>
      </div>
    </div>

    <div v-if="$slots.use" class="example-use">
      <slot name="use"></slot>
    </div>

    <div v-if="$slots.preview" class="example-preview">
      <h2 class="example-preview-header" :class="{active: showPreview}" @click="showPreview = !showPreview">
        <vxe-icon class="example-preview-icon" name="arrow-right"></vxe-icon>
        <span class="example-preview-title">操作&预览</span>
      </h2>
      <div v-show="showPreview" class="example-preview-body">
        <slot name="preview"></slot>
      </div>
    </div>

    <div v-if="path" class="example-demo">
      <AsyncDemo :path="path" :key="path" />
    </div>

    <div v-if="$slots.describe" class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div v-if="path" class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.docs.button.fixDocTip')">
          <vxe-button class="example-btn" mode="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.docs.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button class="example-btn" mode="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showJsCode && !showTsCode">{{ $t('app.docs.button.copyCode') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showJsCode ? 'primary' : ''" :loading="jsLoading" :icon="showJsCode ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleJsVisible">{{ $t(showJsCode ? 'app.docs.button.hideCode' : 'app.docs.button.showJsCode') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showTsCode ? 'primary' : ''" :loading="tsLoading" :icon="showTsCode ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleTsVisible">{{ $t(showTsCode ? 'app.docs.button.hideCode' : 'app.docs.button.showTsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showJsCode">
        <div v-for="(item, index) in importJsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
          </div>
          <CodeRender language="html" :code="jsCodeText"></CodeRender>
        </div>
      </div>
      <div class="example-code-warpper" v-show="showTsCode">
        <div v-for="(item, index) in importTsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
          </div>
          <CodeRender language="html" :code="tsCodeText"></CodeRender>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState } from 'vuex'
import { codeJsMaps, codeTsMaps } from '@/common/cache'
import { VxeUI } from 'vxe-pc-ui'
import AsyncDemo from './AsyncDemo.vue'

interface ImportItemVO {
  path: string
  name: string
  lang: string
  text: string
  isExpand: boolean
}

export default Vue.extend({
  props: {
    path: String,
    extraImports: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  components: {
    AsyncDemo
  },
  data () {
    return {
      showInstall: false,
      showPreview: true,
      jsCodeText: '',
      tsCodeText: '',
      showJsCode: false,
      showTsCode: false,
      jsLoading: false,
      tsLoading: false,
      importTsCodes: [] as ImportItemVO[],
      importJsCodes: [] as ImportItemVO[]
    }
  },
  computed: {
    ...mapState([
      'siteBaseUrl'
    ]),
    gitDir () {
      return `${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${(this as any).compDir}`
    },
    compDir () {
      const paths = this.path?.split('/') || []
      return paths.slice(0, paths.length - 1).join('/')
    }
  },
  methods: {
    getFileName  (path: string) {
      return path.split('/').slice(-1)[0]
    },
    transformFilePath  (path: string) {
      return path.replace(/^\.\//, `${this.compDir}/`)
    },
    parseFilePath  (this: any, path: string) {
      const [fullPath, filePath, fileType] = path.match(/(.*)\.(vue|js|jsx|ts|tsx)$/) || [path, '.vue', 'vue']
      return {
        filePath: this.transformFilePath(filePath),
        codeLang: ['js', 'ts', 'jsx', 'tsx'].includes(fileType) ? 'javascript' : 'html',
        fileType: fileType
      }
    },
    parseJsFilePath  (this: any, path: string) {
      const rest = this.parseFilePath(path)
      rest.fileType = rest.fileType.replace('ts', 'js')
      return rest
    },
    parseTsFilePath (this: any, path: string) {
      const rest = this.parseFilePath(path)
      rest.fileType = rest.fileType.replace('js', 'ts')
      return rest
    },
    loadJsCode (this: any) {
      const compPath = this.path
      if (compPath) {
        if (codeJsMaps[compPath]) {
          this.jsCodeText = codeJsMaps[compPath]
          this.jsLoading = false
        } else {
          this.jsLoading = true
          Promise.all([
            fetch(`${this.siteBaseUrl}${process.env.BASE_URL}example/js/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
              if (response.status >= 200 && response.status < 400) {
                return response.text()
              }
              return '暂无示例'
            }),
            ...(this.extraImports?.map(impPath => {
              const { filePath, fileType, codeLang } = this.parseJsFilePath(impPath)
              return fetch(`${this.siteBaseUrl}${process.env.BASE_URL}example/js/${filePath}.${fileType}?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
                if (response.status >= 200 && response.status < 400) {
                  return response.text().then(text => {
                    return {
                      path: `${filePath}.${fileType}`,
                      name: this.getFileName(`${filePath}.${fileType}`),
                      lang: codeLang,
                      text,
                      isExpand: false
                    }
                  })
                }
                return {
                  path: `${filePath}.${fileType}`,
                  name: this.getFileName(`${filePath}.${fileType}`),
                  lang: codeLang,
                  text: '',
                  isExpand: false
                }
              })
            }) || [])
          ]).then(([text1, ...impTexts]) => {
            this.jsCodeText = text1 || ''
            codeJsMaps[compPath] = this.jsCodeText
            this.importJsCodes = impTexts || '暂无'
            this.jsLoading = false
          }).catch(() => {
            this.jsLoading = false
          })
        }
      } else if (this.jsCodeText) {
        this.jsLoading = false
      }
      return Promise.resolve()
    },
    loadTsCode (this: any) {
      const compPath = this.path
      if (compPath) {
        if (codeTsMaps[compPath]) {
          this.tsCodeText = codeTsMaps[compPath]
          this.tsLoading = false
        } else {
          this.tsLoading = true
          Promise.all([
            fetch(`${this.siteBaseUrl}${process.env.BASE_URL}example/ts/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
              if (response.status >= 200 && response.status < 400) {
                return response.text()
              }
              return '暂无示例'
            }),
            ...(this.extraImports?.map(impPath => {
              const { filePath, fileType, codeLang } = this.parseTsFilePath(impPath)
              return fetch(`${this.siteBaseUrl}${process.env.BASE_URL}example/ts/${filePath}.${fileType}?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
                if (response.status >= 200 && response.status < 400) {
                  return response.text().then(text => {
                    return {
                      path: `${filePath}.${fileType}`,
                      name: this.getFileName(`${filePath}.${fileType}`),
                      lang: codeLang,
                      text,
                      isExpand: false
                    }
                  })
                }
                return {
                  path: `${filePath}.${fileType}`,
                  name: this.getFileName(`${filePath}.${fileType}`),
                  lang: codeLang,
                  text: '',
                  isExpand: false
                }
              })
            }) || [])
          ]).then(([text1, ...impTexts]) => {
            this.tsCodeText = text1 || ''
            codeTsMaps[compPath] = this.tsCodeText
            this.importTsCodes = impTexts || '暂无'
            this.tsLoading = false
          }).catch(() => {
            this.tsLoading = false
          })
        }
      } else if (this.tsCodeText) {
        this.tsLoading = false
      }
      return Promise.resolve()
    },
    toggleJsVisible  (this: any) {
      this.showTsCode = false
      this.showJsCode = !this.showJsCode
      if (this.showJsCode) {
        this.loadJsCode()
      }
    },
    toggleTsVisible  (this: any) {
      this.showJsCode = false
      this.showTsCode = !this.showTsCode
      if (this.showTsCode) {
        this.loadTsCode()
      }
    },
    copyCode () {
      let codeContent = ''
      if (this.showJsCode) {
        codeContent = this.jsCodeText
      } else if (this.showTsCode) {
        codeContent = this.tsCodeText
      }
      if (codeContent) {
        if (VxeUI.clipboard.copy(codeContent)) {
          VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
      }
    },
    toggleItemExpand (item: ImportItemVO) {
      item.isExpand = !item.isExpand
    },
    openDocs () {
      open(`${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${this.path}.vue`)
    }
  }
})
</script>

<style lang="scss">
.code-light {
  margin: 30px 0;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  border-radius: 4px;
  ::v-deep(.tip) {
    margin: 0;
  }
}
.example-tip {
  padding: 8px 24px 8px 24px;
}
.example-use {
  padding: 0 24px 0 24px;
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
  border-top: 1px dashed var(--vxe-ui-docs-layout-border-color);
  .example-btn {
    min-width: 100px;
  }
}
.example-code-warpper {
  padding: 0 30px;
  margin: 0;
  pre {
    display: flex;
    margin: 0;
    padding: 0 0 30px 0;
    code {
      flex-grow: 1;
    }
  }
}
.example-code-item {
  display: block;
  position: relative;
}
.example-code-file {
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  margin: 6px 0;
  &.is-expand {
    .example-code-file-icon {
      transform: rotate(90deg);
    }
  }
  .example-code-file-icon {
    display: inline-block;
    transition: transform 0.2s ease-in-out;
    margin-right: 8px;
  }
}

.example-use-header {
  line-height: 2em;
  font-size: 1.4em;
  cursor: pointer;
  .example-use-icon,
  .example-use-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .example-use-icon {
    transition: transform 0.2s ease-in-out;
  }
  .example-use-title {
    padding-left: 10px;
  }
  &.active {
    .example-use-icon {
      transform: rotate(90deg);
    }
  }
}
.example-use-body {
  padding: 20px 64px 0 64px;
  & > img {
    max-width: 100%;
    max-height: 300px;
  }
}

.example-preview-header {
  line-height: 2em;
  font-size: 1.4em;
  cursor: pointer;
  .example-preview-icon,
  .example-preview-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .example-preview-icon {
    transition: transform 0.2s ease-in-out;
  }
  .example-preview-title {
    padding-left: 10px;
  }
  &.active {
    .example-preview-icon {
      transform: rotate(90deg);
    }
  }
}
.example-preview-body {
  padding: 20px 64px 0 64px;
  text-align: center;
  & > img {
    max-width: 100%;
    max-height: 300px;
  }
}

.example-install {
  padding: 8px 24px 8px 24px;
}
.example-install-header {
  cursor: pointer;
  margin: 30px 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
  .example-install-icon,
  .example-install-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .example-install-icon {
    transition: transform 0.2s ease-in-out;
  }
  .example-install-title {
    padding-left: 10px;
  }
  &.active {
    .example-install-icon {
      transform: rotate(90deg);
    }
  }
}
.example-install-body {
  padding: 20px 64px 0 64px;
  & > img {
    max-width: 100%;
    max-height: 300px;
  }
}
</style>
