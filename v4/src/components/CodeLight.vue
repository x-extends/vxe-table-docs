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
      <DemoCode />
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
        <vxe-button class="example-btn" mode="text" :status="showSetupJS ? 'primary' : ''" :loading="setupJsLoading" :icon="showSetupJS ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleSetupJsVisible">{{ $t('app.docs.button.showSetupJS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showSetupTS ? 'primary' : ''" :loading="setupTsLoading" :icon="showSetupTS ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleSetupTsVisible">{{ $t('app.docs.button.showSetupTS') }}</vxe-button>
      </div>
      <div class="example-code-wrapper" v-show="showOptionJS">
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
      <div class="example-code-wrapper" v-show="showOptionTS">
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
      <div class="example-code-wrapper" v-show="showSetupJS">
        <div v-for="(item, index) in importSetupJsCodes" :key="index" class="example-code-item">
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
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(setupJsCodeText)" :disabled="!setupJsCodeText">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender language="html" :code="setupJsCodeText"></CodeRender>
        </div>
      </div>
      <div class="example-code-wrapper" v-show="showSetupTS">
        <div v-for="(item, index) in importSetupTsCodes" :key="index" class="example-code-item">
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
            <vxe-button class="example-copy-btn" status="success" mode="text" icon="vxe-icon-copy" @click.stop="copyCode(setupTsCodeText)" :disabled="!setupTsCodeText">{{ $t('app.docs.button.copyCode') }}</vxe-button>
          </div>
          <CodeRender language="html" :code="setupTsCodeText"></CodeRender>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineAsyncComponent, PropType } from 'vue'
import { codeCacheMaps } from '@/common/cache'
import { useAppStore } from '@/store/app'
import { VxeUI } from 'vxe-pc-ui'
import i18n from '@/i18n'

interface ImportItemVO {
  path: string
  name: string
  lang: string
  text: string
  isExpand: boolean
}

const props = defineProps({
  path: String,
  previewPath: String,
  extraImports: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})

const appStore = useAppStore()
const isPluginDocs = computed(() => appStore.isPluginDocs)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const showInstall = ref(false)
const showPreview = ref(true)

const optionJsCodeText = ref('')
const optionTsCodeText = ref('')
const setupJsCodeText = ref('')
const setupTsCodeText = ref('')

const showOptionJS = ref(false)
const showOptionTS = ref(false)
const showSetupJS = ref(false)
const showSetupTS = ref(false)

const optionJsLoading = ref(false)
const optionTsLoading = ref(false)
const setupJsLoading = ref(false)
const setupTsLoading = ref(false)

const importOptionJsCodes = ref<ImportItemVO[]>([])
const importOptionTsCodes = ref<ImportItemVO[]>([])
const importSetupJsCodes = ref<ImportItemVO[]>([])
const importSetupTsCodes = ref<ImportItemVO[]>([])

const DemoCode = props.path ? defineAsyncComponent(() => import(`@/views/${props.path}`)) : null

const gitDir = computed(() => {
  return `${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${compDir.value}`
})

const compDir = computed(() => {
  const paths = props.path?.split('/') || []
  return paths.slice(0, paths.length - 1).join('/')
})

const previewUrl = computed(() => {
  const { previewPath } = props
  if (previewPath) {
    if (/^http/.test(previewPath)) {
      return previewPath
    }
    return `${siteBaseUrl.value}${previewPath}?v=${appStore.systemConfig.previewVersion}`
  }
  return ''
})

const getFileName = (path: string) => {
  return path.split('/').slice(-1)[0]
}

const transformFilePath = (path: string) => {
  return path.replace(/^\.\//, `${compDir.value}/`)
}

const parseFilePath = (path: string) => {
  const [, filePath, fileType] = path.match(/(.*)\.(vue|js|jsx|ts|tsx)$/) || [path, '.vue', 'vue']
  return {
    filePath: transformFilePath(filePath),
    codeLang: ['js', 'ts', 'jsx', 'tsx'].includes(fileType) ? 'javascript' : 'html',
    fileType: fileType
  }
}

const parseJsFilePath = (path: string) => {
  const rest = parseFilePath(path)
  rest.fileType = rest.fileType.replace('ts', 'js')
  return rest
}

const parseTsFilePath = (path: string) => {
  const rest = parseFilePath(path)
  rest.fileType = rest.fileType.replace('js', 'ts')
  return rest
}

const getExampleText = (url: string) => {
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
}

const loadOptionJsCode = () => {
  const compPath = props.path
  if (compPath) {
    optionJsLoading.value = true
    const exampleBaeUrl = `${siteBaseUrl.value}${process.env.BASE_URL.replace('4', '3')}`
    Promise.all([
      getExampleText(`${exampleBaeUrl}example/js/${compPath}.vue`),
      ...(props.extraImports?.map(impPath => {
        const { filePath, fileType, codeLang } = parseJsFilePath(impPath)
        return getExampleText(`${exampleBaeUrl}example/js/${filePath}.${fileType}`).then(text => {
          return {
            path: `${filePath}.${fileType}`,
            name: getFileName(`${filePath}.${fileType}`),
            lang: codeLang,
            text,
            isExpand: false
          }
        })
      }) || [])
    ]).then(([text1, ...impTexts]) => {
      optionJsCodeText.value = text1 || i18n.global.t('app.docs.button.noExample')
      importOptionJsCodes.value = impTexts || i18n.global.t('app.docs.button.noExample')
      optionJsLoading.value = false
    }).catch(() => {
      optionJsLoading.value = false
    })
  } else {
    optionJsLoading.value = false
  }
  return Promise.resolve()
}

const loadOptionTsCode = () => {
  const compPath = props.path
  if (compPath) {
    optionTsLoading.value = true
    const exampleBaeUrl = `${siteBaseUrl.value}${process.env.BASE_URL.replace('4', '3')}`
    Promise.all([
      getExampleText(`${exampleBaeUrl}example/ts/${compPath}.vue`),
      ...(props.extraImports?.map(impPath => {
        const { filePath, fileType, codeLang } = parseTsFilePath(impPath)
        return getExampleText(`${exampleBaeUrl}example/ts/${filePath}.${fileType}`).then(text => {
          return {
            path: `${filePath}.${fileType}`,
            name: getFileName(`${filePath}.${fileType}`),
            lang: codeLang,
            text,
            isExpand: false
          }
        })
      }) || [])
    ]).then(([text1, ...impTexts]) => {
      optionTsCodeText.value = text1 || i18n.global.t('app.docs.button.noExample')
      importOptionTsCodes.value = impTexts || i18n.global.t('app.docs.button.noExample')
      optionTsLoading.value = false
    }).catch(() => {
      optionTsLoading.value = false
    })
  } else {
    optionTsLoading.value = false
  }
  return Promise.resolve()
}

const loadSetupJsCode = () => {
  const compPath = props.path
  if (compPath) {
    setupJsLoading.value = true
    const exampleBaeUrl = `${siteBaseUrl.value}${process.env.BASE_URL}`
    Promise.all([
      getExampleText(`${exampleBaeUrl}example/js/${compPath}.vue`),
      ...(props.extraImports?.map(impPath => {
        const { filePath, fileType, codeLang } = parseJsFilePath(impPath)
        return getExampleText(`${exampleBaeUrl}example/js/${filePath}.${fileType}?v=${process.env.VUE_APP_DATE_NOW}`).then(text => {
          return {
            path: `${filePath}.${fileType}`,
            name: getFileName(`${filePath}.${fileType}`),
            lang: codeLang,
            text,
            isExpand: false
          }
        })
      }) || [])
    ]).then(([text1, ...impTexts]) => {
      setupJsCodeText.value = text1 || i18n.global.t('app.docs.button.noExample')
      importSetupJsCodes.value = impTexts || i18n.global.t('app.docs.button.noExample')
      setupJsLoading.value = false
    }).catch(() => {
      setupJsLoading.value = false
    })
  } else {
    setupJsLoading.value = false
  }
  return Promise.resolve()
}

const loadSetupTsCode = () => {
  const compPath = props.path
  if (compPath) {
    setupTsLoading.value = true
    const exampleBaeUrl = `${siteBaseUrl.value}${process.env.BASE_URL}`
    Promise.all([
      getExampleText(`${exampleBaeUrl}example/ts/${compPath}.vue`),
      ...(props.extraImports?.map(impPath => {
        const { filePath, fileType, codeLang } = parseTsFilePath(impPath)
        return getExampleText(`${exampleBaeUrl}example/ts/${filePath}.${fileType}`).then(text => {
          return {
            path: `${filePath}.${fileType}`,
            name: getFileName(`${filePath}.${fileType}`),
            lang: codeLang,
            text,
            isExpand: false
          }
        })
      }) || [])
    ]).then(([text1, ...impTexts]) => {
      setupTsCodeText.value = text1 || i18n.global.t('app.docs.button.noExample')
      importSetupTsCodes.value = impTexts || i18n.global.t('app.docs.button.noExample')
      setupTsLoading.value = false
    }).catch(() => {
      setupTsLoading.value = false
    })
  } else {
    setupTsLoading.value = false
  }
  return Promise.resolve()
}

const toggleOptionJsVisible = () => {
  showOptionJS.value = !showOptionJS.value
  showOptionTS.value = false
  showSetupJS.value = false
  showSetupTS.value = false
  if (showOptionJS.value) {
    loadOptionJsCode()
  }
}

const toggleOptionTsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = !showOptionTS.value
  showSetupJS.value = false
  showSetupTS.value = false
  if (showOptionTS.value) {
    loadOptionTsCode()
  }
}

const toggleSetupJsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = false
  showSetupJS.value = !showSetupJS.value
  showSetupTS.value = false
  if (showSetupJS.value) {
    loadSetupJsCode()
  }
}

const toggleSetupTsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = false
  showSetupJS.value = false
  showSetupTS.value = !showSetupTS.value
  if (showSetupTS.value) {
    loadSetupTsCode()
  }
}

const copyCode = (content: string) => {
  if (content) {
    if (VxeUI.clipboard.copy(content)) {
      VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
    }
  }
}

const toggleItemExpand = (item: ImportItemVO) => {
  item.isExpand = !item.isExpand
}

const openDocs = () => {
  open(`${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${props.path}.vue`)
}
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
.example-code-wrapper {
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
