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

    <div v-if="previewUrl || $slots.preview" class="example-preview">
      <h2 class="example-preview-header" :class="{active: showPreview}" @click="showPreview = !showPreview">
        <vxe-icon class="example-preview-icon" name="arrow-right"></vxe-icon>
        <span class="example-preview-title">操作&预览</span>
      </h2>
      <div v-show="showPreview" class="example-preview-body">
        <slot name="preview">
          <vxe-image :key="previewUrl" :src="previewUrl" mask-closable></vxe-image>
        </slot>
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
        <vxe-tooltip v-if="!isPluginDocs" :content="$t('app.docs.button.fixDocTip')">
          <vxe-button class="example-btn" mode="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.docs.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button class="example-btn" mode="text" :status="showOptionJS ? 'primary' : ''" :loading="optionJsLoading" :icon="showOptionJS ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleOptionJsVisible">{{ $t('app.docs.button.showOptionJS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showOptionTS ? 'primary' : ''" :loading="optionTsLoading" :icon="showOptionTS ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleOptionTsVisible">{{ $t('app.docs.button.showOptionTS') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showOptionJS">
        <div v-for="(item, index) in importOptionJsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(item.text)" :disabled="!item.text">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(optionJsCodeText)" :disabled="!optionJsCodeText">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender language="html" :code="optionJsCodeText"></CodeRender>
        </div>
      </div>
      <div class="example-code-warpper" v-show="showOptionTS">
        <div v-for="(item, index) in importOptionTsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(item.text)" :disabled="!item.text">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(optionTsCodeText)" :disabled="!optionTsCodeText">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender language="html" :code="optionTsCodeText"></CodeRender>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { codeCacheMaps } from '@/common/cache'
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
    previewPath: String,
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
      optionJsCodeText: '',
      optionTsCodeText: '',
      showOptionJS: false,
      showOptionTS: false,
      optionJsLoading: false,
      optionTsLoading: false,
      importOptionTsCodes: [] as ImportItemVO[],
      importOptionJsCodes: [] as ImportItemVO[]
    }
  },
  computed: {
    isPluginDocs () {
      return this.$store.state.isPluginDocs as string
    },
    resBaseUrl () {
      return this.$store.state.resBaseUrl as string
    },
    siteBaseUrl () {
      return this.$store.state.siteBaseUrl as string
    },
    systemConfig () {
      return this.$store.state.systemConfig as string
    },
    gitDir () {
      return `${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${(this as any).compDir}`
    },
    compDir () {
      const paths = this.path?.split('/') || []
      return paths.slice(0, paths.length - 1).join('/')
    },
    previewUrl () {
      const { previewPath } = this
      if (previewPath) {
        if (/^http/.test(previewPath)) {
          return previewPath
        }
        return `${(this as any).resBaseUrl}${previewPath}?v=${(this as any).systemConfig.previewVersion}`
      }
      return ''
    }
  },
  methods: {
    getFileName  (path: string) {
      return path.split('/').slice(-1)[0]
    },
    transformFilePath  (path: string) {
      return path.replace(/^\.\//, `${(this as any).compDir}/`)
    },
    parseFilePath  (this: any, path: string) {
      const [, filePath, fileType] = path.match(/(.*)\.(vue|js|jsx|ts|tsx)$/) || [path, '.vue', 'vue']
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
    getExampleText (url: string) {
      if (!codeCacheMaps[url]) {
        codeCacheMaps[url] = fetch(`${url}?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
          if (response.status >= 200 && response.status < 400) {
            return response.text()
          } else {
            delete codeCacheMaps[url]
          }
          return ''
        })
      }
      return codeCacheMaps[url]
    },
    loadOptionJsCode (this: any) {
      const compPath = this.path
      if (compPath) {
        this.optionJsLoading = true
        const exampleBaeUrl = `${this.siteBaseUrl}${process.env.BASE_URL}`
        Promise.all([
          this.getExampleText(`${exampleBaeUrl}example/js/${compPath}.vue`),
          ...(this.extraImports?.map(impPath => {
            const { filePath, fileType, codeLang } = this.parseJsFilePath(impPath)
            return this.getExampleText(`${exampleBaeUrl}example/js/${filePath}.${fileType}`).then(text => {
              return {
                path: `${filePath}.${fileType}`,
                name: this.getFileName(`${filePath}.${fileType}`),
                lang: codeLang,
                text,
                isExpand: false
              }
            })
          }) || [])
        ]).then(([text1, ...impTexts]) => {
          this.optionJsCodeText = text1 || this.$t('app.docs.button.noExample')
          this.importOptionJsCodes = impTexts || this.$t('app.docs.button.noExample')
          this.optionJsLoading = false
        }).catch(() => {
          this.optionJsLoading = false
        })
      } else {
        this.optionJsLoading = false
      }
      return Promise.resolve()
    },
    loadOptionTsCode (this: any) {
      const compPath = this.path
      if (compPath) {
        this.optionTsLoading = true
        const exampleBaeUrl = `${this.siteBaseUrl}${process.env.BASE_URL}`
        Promise.all([
          this.getExampleText(`${exampleBaeUrl}example/ts/${compPath}.vue`),
          ...(this.extraImports?.map(impPath => {
            const { filePath, fileType, codeLang } = this.parseTsFilePath(impPath)
            return this.getExampleText(`${exampleBaeUrl}example/ts/${filePath}.${fileType}`).then(text => {
              return {
                path: `${filePath}.${fileType}`,
                name: this.getFileName(`${filePath}.${fileType}`),
                lang: codeLang,
                text,
                isExpand: false
              }
            })
          }) || [])
        ]).then(([text1, ...impTexts]) => {
          this.optionTsCodeText = text1 || this.$t('app.docs.button.noExample')
          this.importOptionTsCodes = impTexts || this.$t('app.docs.button.noExample')
          this.optionTsLoading = false
        }).catch(() => {
          this.optionTsLoading = false
        })
      } else {
        this.optionTsLoading = false
      }
      return Promise.resolve()
    },
    toggleOptionJsVisible  (this: any) {
      this.showOptionTS = false
      this.showOptionJS = !this.showOptionJS
      if (this.showOptionJS) {
        this.loadOptionJsCode()
      }
    },
    toggleOptionTsVisible  (this: any) {
      this.showOptionJS = false
      this.showOptionTS = !this.showOptionTS
      if (this.showOptionTS) {
        this.loadOptionTsCode()
      }
    },
    copyCode (content: string) {
      if (content) {
        if (VxeUI.clipboard.copy(content)) {
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
  position: relative;
  line-height: 28px;
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
  .example-copy-btn {
    position: absolute;
    right: 0;
    bottom: 0;
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
