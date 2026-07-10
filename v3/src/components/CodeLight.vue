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
          <vxe-image :key="previewUrl" :src="previewUrl" max-height="560" max-width="100%" mask-closable></vxe-image>
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
        <vxe-button class="example-btn" mode="text" :status="showOptionJS ? 'primary' : ''" :loading="optionJsLoading" icon="vxe-icon-code" @click="toggleOptionJsVisible">{{ $t('app.docs.button.showOptionJS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showOptionTS ? 'primary' : ''" :loading="optionTsLoading" icon="vxe-icon-code" @click="toggleOptionTsVisible">{{ $t('app.docs.button.showOptionTS') }}</vxe-button>
        <vxe-button v-if="showOnLineRun" mode="text" icon="vxe-icon-link" @click="runEvent">{{ $t('app.docs.button.runDemo') }}</vxe-button>
        </div>
      <div class="example-code-wrapper" v-show="showOptionJS">
        <vxe-collapse v-model="collapseList" padding border>
          <vxe-collapse-pane v-for="(item, i) in importOptionJsCodes" :key="item.path" :title="item.name" :name="item.path">
            <template #title>
              <vxe-tag status="primary" class="example-code-tag">第 {{ i + 1 }} 步</vxe-tag>
              <span>{{ item.name }}</span>
            </template>
            <template #default>
              <CodeRender :language="item.lang" :code="item.text" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
          <vxe-collapse-pane :title="getFileName(`${path}.vue`)" name="demo">
            <template #title>
              <vxe-tag v-if="importOptionJsCodes.length" status="primary" class="example-code-tag">第 {{ importOptionJsCodes.length + 1 }} 步</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">使用</vxe-tag>
              <span>{{ getFileName(`${path}.vue`) }}</span>
            </template>
            <template #default>
              <CodeRender language="html" :code="optionJsCodeText" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
        </vxe-collapse>
      </div>
      <div class="example-code-wrapper" v-show="showOptionTS">
        <vxe-collapse v-model="collapseList" padding border>
          <vxe-collapse-pane v-for="(item, i) in importOptionTsCodes" :key="item.path" :title="item.name" :name="item.path">
            <template #title>
              <vxe-tag status="primary" class="example-code-tag">第 {{ i + 1 }} 步</vxe-tag>
              <span>{{ item.name }}</span>
            </template>
            <template #default>
              <CodeRender :language="item.lang" :code="item.text" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
          <vxe-collapse-pane :title="getFileName(`${path}.vue`)" name="demo">
            <template #title>
              <vxe-tag v-if="importOptionTsCodes.length" status="primary" class="example-code-tag">第 {{ importOptionTsCodes.length + 1 }} 步</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">使用</vxe-tag>
              <span>{{ getFileName(`${path}.vue`) }}</span>
            </template>
            <template #default>
              <CodeRender language="html" :code="optionTsCodeText" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
        </vxe-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { codeCacheMaps } from '@/common/cache'
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
      showOnLineRun: process.env.VUE_APP_IS_ONLINE_RUN === 'true',
      optionJsCodeText: '',
      optionTsCodeText: '',
      showOptionJS: false,
      showOptionTS: false,
      optionJsLoading: false,
      optionTsLoading: false,
      collapseList: ['demo'],
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
        if (previewPath.startsWith('http')) {
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
          debugger
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
      this.collapseList = ['demo']
      if (this.showOptionJS) {
        this.loadOptionJsCode()
      }
    },
    toggleOptionTsVisible  (this: any) {
      this.showOptionJS = false
      this.showOptionTS = !this.showOptionTS
      this.collapseList = ['demo']
      if (this.showOptionTS) {
        this.loadOptionTsCode()
      }
    },
    toggleItemExpand (item: ImportItemVO) {
      item.isExpand = !item.isExpand
    },
    openDocs () {
      open(`${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${this.path}.vue`)
    },
    runEvent () {
      const compPath = this.path
      const exampleBaeUrl = `${this.siteBaseUrl}${process.env.BASE_URL}`
      open(`${process.env.VUE_APP_ONLINE_RUN_URL}?files=${btoa('@' + encodeURIComponent(`${exampleBaeUrl}example/js/${compPath}.vue`))}`)
    }
  }
})
</script>

<style lang="scss">
.code-light {
  margin: 30px 0;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  border-radius: 4px;
  .tip {
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
}
.example-code-wrapper {
  margin: 0;
  .example-copy-btn {
    display: none;
    position: absolute;
    top: 0.1em;
    right: 0.1em;
    font-size: 20px;
  }
  pre {
    display: flex;
    margin: 0;
    code {
      flex-grow: 1;
    }
  }
  .vxe-collapse--item-inner {
    &:hover {
      .example-copy-btn {
          display: block;
      }
    }
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
  padding: 0 24px;
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
