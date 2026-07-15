export interface NavVO {
  nId?: number
  title?: string
  describe?: string
  componentName?: string
  name?: string
  icon?: string
  i18nKey?: string
  isDisabled?: boolean
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  showCount?: boolean
  isProcess?: boolean
  isUnpublished?: boolean
  isEnterprise?: boolean
  isPlugin?: boolean
  isTemplate?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  linkStatus?: 'warning' | 'success' | 'error'
  isBack?: boolean
  keywords?: string
  children?: NavVO[]
}

export const oldExtendUrl = `https://vxetable.cn/other${process.env.VUE_APP_VXE_VERSION}`
export const otherUrl = process.env.VUE_APP_OTHER_DOCS_URL
export const tablePluginDocsUrl = process.env.VUE_APP_SITE_PLUGIN_URL
