export interface NavVO {
  title?: string
  describe?: string
  name?: string
  i18nKey?: string
  isDisabled?: boolean
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
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

export const otherUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/other${process.env.VUE_APP_VXE_VERSION}`
export const tablePluginDocsUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/pluginDocs/table${process.env.VUE_APP_VXE_VERSION}`
