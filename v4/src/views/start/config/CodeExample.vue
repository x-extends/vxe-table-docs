<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary">
          通过调用 setConfig({ ... }) 方法可以给组件设置全局默认参数
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

            VxeUI.setConfig({
              // size: null, // 全局尺寸
              // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡；新版本可以使用 dom-zindex 共享配置
              // version: 1, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据

              emptyCell: '　',
              table: {
                fit: true,
                showHeader: true,
                delayHover: 250,
                autoResize: true,
                padding: true,
                minHeight: 144,
                // keepSource: false,
                // showOverflow: null,
                // showHeaderOverflow: null,
                // showFooterOverflow: null,
                // resizeInterval: 500,
                // size: null,
                // zIndex: null,
                // stripe: false,
                // border: false,
                // round: false,
                // emptyText: '暂无数据',
                // emptyRender: {
                //   name: ''
                // },
                // rowConfig: {
                //   keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
                // },
                resizeConfig: {
                  refreshDelay: 250
                },
                radioConfig: {
                  // trigger: 'default'
                  strict: true
                },
                checkboxConfig: {
                  // trigger: 'default',
                  strict: true
                },
                tooltipConfig: {
                  enterable: true
                },
                validConfig: {
                  showMessage: true,
                  autoClear: true,
                  autoPos: true,
                  message: 'inline',
                  msgMode: 'single'
                },
                columnConfig: {
                  maxFixedSize: 4
                },
                // menuConfig: {
                //   visibleMethod () {}
                // },
                customConfig: {
                  allowVisible: true,
                  allowResizable: true,
                  allowFixed: true,
                  allowSort: true,
                  showFooter: true,
                  placement: 'top-right',
                  //  storage: false,
                  //  checkMethod () {},
                  modalOptions: {
                    showMaximize: true,
                    mask: true,
                    lockView: true,
                    resize: true,
                    escClosable: true
                  }
                },
                sortConfig: {
                  // remote: false,
                  // trigger: 'default',
                  // orders: ['asc', 'desc', null],
                  // sortMethod: null,
                  showIcon: true,
                  iconLayout: 'vertical'
                },
                filterConfig: {
                  // remote: false,
                  // filterMethod: null,
                  showIcon: true
                },
                treeConfig: {
                  rowField: 'id',
                  parentField: 'parentId',
                  childrenField: 'children',
                  hasChildField: 'hasChild',
                  mapChildrenField: '_X_ROW_CHILD',
                  indent: 20,
                  showIcon: true
                },
                expandConfig: {
                  // trigger: 'default',
                  showIcon: true
                },
                editConfig: {
                  // mode: 'cell',
                  showIcon: true,
                  showAsterisk: true,
                  autoFocus: true
                },
                importConfig: {
                },
                exportConfig: {
                },
                printConfig: {
                },
                mouseConfig: {
                  extension: true
                },
                keyboardConfig: {
                  isEsc: true
                },
                areaConfig: {
                  autoClear: true,
                  selectCellByHeader: true
                },
                clipConfig: {
                  isCopy: true,
                  isCut: true,
                  isPaste: true
                },
                fnrConfig: {
                  isFind: true,
                  isReplace: true
                },
                scrollX: {
                  // enabled: false, // 是否默认开启虚拟滚动
                  gt: 60
                  // oSize: 0
                },
                scrollY: {
                  // enabled: false, // 是否默认开启虚拟滚动
                  gt: 100
                  // oSize: 0
                }
              },
              // export: {
              //   types: {}
              // },
              grid: {
                // size: null,
                // zoomConfig: {
                //   escRestore: true
                // },
                formConfig: {
                  enabled: true
                },
                pagerConfig: {
                  enabled: true
                  // perfect: false
                },
                toolbarConfig: {
                  enabled: true
                  // perfect: false
                },
                proxyConfig: {
                  enabled: true,
                  autoLoad: true,
                  showResponseMsg: true,
                  showActiveMsg: true,
                  props: {
                    list: null,
                    result: 'result',
                    total: 'page.total',
                    message: 'message'
                  }
                  // beforeItem: null,
                  // beforeColumn: null,
                  // beforeQuery: null,
                  // afterQuery: null,
                  // beforeDelete: null,
                  // afterDelete: null,
                  // beforeSave: null,
                  // afterSave: null
                }
              },
              toolbar: {
                // size: null,
                // import: {
                //   mode: 'covering'
                // },
                // export: {
                //   types: ['csv', 'html', 'xml', 'txt']
                // },
                // buttons: []
              }
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
