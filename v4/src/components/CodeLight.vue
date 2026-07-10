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
        <vxe-button class="example-btn" mode="text" :status="showOptionJS ? 'primary' : ''" :loading="optionJsLoading" icon="vxe-icon-code" @click="toggleOptionJsVisible">{{ $t('app.docs.button.showOptionJS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showOptionTS ? 'primary' : ''" :loading="optionTsLoading" icon="vxe-icon-code" @click="toggleOptionTsVisible">{{ $t('app.docs.button.showOptionTS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showSetupJS ? 'primary' : ''" :loading="setupJsLoading" icon="vxe-icon-code" @click="toggleSetupJsVisible">{{ $t('app.docs.button.showSetupJS') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showSetupTS ? 'primary' : ''" :loading="setupTsLoading" icon="vxe-icon-code" @click="toggleSetupTsVisible">{{ $t('app.docs.button.showSetupTS') }}</vxe-button>
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
              <vxe-tag v-if="importOptionJsCodes.length" status="primary" class="example-code-tag">{{ $t(`app.docs.button.step${importOptionJsCodes.length + 1}`) }}</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">{{ $t('app.docs.button.useTitle') }}</vxe-tag>
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
              <vxe-tag v-if="importOptionTsCodes.length" status="primary" class="example-code-tag">{{ $t(`app.docs.button.step${importOptionTsCodes.length + 1}`) }}</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">{{ $t('app.docs.button.useTitle') }}</vxe-tag>
              <span>{{ getFileName(`${path}.vue`) }}</span>
            </template>
            <template #default>
              <CodeRender language="html" :code="optionTsCodeText" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
        </vxe-collapse>
      </div>
      <div class="example-code-wrapper" v-show="showSetupJS">
        <vxe-collapse v-model="collapseList" padding border>
          <vxe-collapse-pane v-for="(item, i) in importSetupJsCodes" :key="item.path" :title="item.name" :name="item.path">
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
              <vxe-tag v-if="importSetupJsCodes.length" status="primary" class="example-code-tag">{{ $t(`app.docs.button.step${importSetupJsCodes.length + 1}`) }}</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">{{ $t('app.docs.button.useTitle') }}</vxe-tag>
              <span>{{ getFileName(`${path}.vue`) }}</span>
            </template>
            <template #default>
              <CodeRender language="html" :code="setupJsCodeText" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
        </vxe-collapse>
      </div>
      <div class="example-code-wrapper" v-show="showSetupTS">
        <vxe-collapse v-model="collapseList" padding border>
          <vxe-collapse-pane v-for="(item, i) in importSetupTsCodes" :key="item.path" :title="item.name" :name="item.path">
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
              <vxe-tag v-if="importSetupTsCodes.length" status="primary" class="example-code-tag">{{ $t(`app.docs.button.step${importSetupTsCodes.length + 1}`) }}</vxe-tag>
              <vxe-tag v-else status="primary" class="example-code-tag">{{ $t('app.docs.button.useTitle') }}</vxe-tag>
              <span>{{ getFileName(`${path}.vue`) }}</span>
            </template>
            <template #default>
              <CodeRender language="html" :code="setupTsCodeText" show-copy-button></CodeRender>
            </template>
          </vxe-collapse-pane>
        </vxe-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineAsyncComponent, PropType } from 'vue'
import { demoModules } from '@/common/modules'
import { codeCacheMaps } from '@/common/cache'
import { useAppStore } from '@/store/app'
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
const resBaseUrl = computed(() => appStore.resBaseUrl)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const showInstall = ref(false)
const showPreview = ref(true)
const showOnLineRun = ref(import.meta.env.VITE_APP_IS_ONLINE_RUN === 'true')

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

const collapseList = ref(['demo'])

const importOptionJsCodes = ref<ImportItemVO[]>([])
const importOptionTsCodes = ref<ImportItemVO[]>([])
const importSetupJsCodes = ref<ImportItemVO[]>([])
const importSetupTsCodes = ref<ImportItemVO[]>([])

const DemoCode = props.path ? defineAsyncComponent(demoModules[`/src/views/${props.path}.vue`]) : null

const gitDir = computed(() => {
  return `${import.meta.env.VITE_APP_DOCS_GITHUB_URL}/src/views/${compDir.value}`
})

const compDir = computed(() => {
  const paths = props.path?.split('/') || []
  return paths.slice(0, paths.length - 1).join('/')
})

const previewUrl = computed(() => {
  const { previewPath } = props
  if (previewPath) {
    if (previewPath.startsWith('http')) {
      return previewPath
    }
    return `${resBaseUrl.value}${previewPath}?v=${appStore.systemConfig.previewVersion}`
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
    codeCacheMaps[url] = fetch(`${url}?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(response => {
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
    const exampleBaeUrl = `${siteBaseUrl.value}${import.meta.env.BASE_URL.replace('4', '3')}`
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
      // 替换渲染器兼容方法
      impTexts.forEach(impItem => {
        if (impItem.name.indexOf('.renderer.') > -1) {
          impItem.text = impItem.text.replace('(h, renderOpts, renderParams)', '(renderOpts, renderParams)')
        }
      })
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
    const exampleBaeUrl = `${siteBaseUrl.value}${import.meta.env.BASE_URL.replace('4', '3')}`
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
      // 替换渲染器兼容方法
      impTexts.forEach(impItem => {
        if (impItem.name.indexOf('.renderer.') > -1) {
          impItem.text = impItem.text.replace('(h, renderOpts, renderParams)', '(renderOpts, renderParams)')
        }
      })
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
    const exampleBaeUrl = `${siteBaseUrl.value}${import.meta.env.BASE_URL}`
    Promise.all([
      getExampleText(`${exampleBaeUrl}example/js/${compPath}.vue`),
      ...(props.extraImports?.map(impPath => {
        const { filePath, fileType, codeLang } = parseJsFilePath(impPath)
        return getExampleText(`${exampleBaeUrl}example/js/${filePath}.${fileType}?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(text => {
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
    const exampleBaeUrl = `${siteBaseUrl.value}${import.meta.env.BASE_URL}`
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
  collapseList.value = ['demo']
  if (showOptionJS.value) {
    loadOptionJsCode()
  }
}

const toggleOptionTsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = !showOptionTS.value
  showSetupJS.value = false
  showSetupTS.value = false
  collapseList.value = ['demo']
  if (showOptionTS.value) {
    loadOptionTsCode()
  }
}

const toggleSetupJsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = false
  showSetupJS.value = !showSetupJS.value
  showSetupTS.value = false
  collapseList.value = ['demo']
  if (showSetupJS.value) {
    loadSetupJsCode()
  }
}

const toggleSetupTsVisible = () => {
  showOptionJS.value = false
  showOptionTS.value = false
  showSetupJS.value = false
  showSetupTS.value = !showSetupTS.value
  collapseList.value = ['demo']
  if (showSetupTS.value) {
    loadSetupTsCode()
  }
}

const runEvent = () => {
  const compPath = props.path
  const exampleBaeUrl = `${siteBaseUrl.value}${import.meta.env.BASE_URL}`
  open(`${import.meta.env.VITE_APP_ONLINE_RUN_URL}?files=${btoa('@' + encodeURIComponent(`${exampleBaeUrl}example/js/${compPath}.vue`))}`)
}

const openDocs = () => {
  open(`${import.meta.env.VITE_APP_DOCS_GITHUB_URL}/src/views/${props.path}.vue`)
}
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
  .example-code-tag {
    margin-right: 0.6em;
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
