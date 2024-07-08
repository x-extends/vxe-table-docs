<template>
  <div>
    <h2>{{ $t('app.aside.nav.global') }}</h2>
    <pre>
      <pre-code class="typescript">{{ demoCodes[0] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/* eslint-disable */
export default defineComponent({
  setup () {
    return {
      demoCodes: [
        `
        import { VXETable } from 'vxe-table'

        // 旧版本使用 setup({}) 或者 config({})
        VXETable.setConfig({
          // size: null, // 全局尺寸
          // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡；新版本可以使用 dom-zindex 共享配置
          // version: 1, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
          emptyCell: '　',

          table: {
            fit: true,
            showHeader: true,
            animat: true,
            delayHover: 250,
            autoResize: true,
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
            rowConfig: {
              keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名，必须设置，随时都可能会被改变
            },
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
              showAsterisk: true
            },
            importConfig: {
              _typeMaps: {
                csv: 1,
                html: 1,
                xml: 1,
                txt: 1
              }
            },
            exportConfig: {
              _typeMaps: {
                csv: 1,
                html: 1,
                xml: 1,
                txt: 1
              }
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
              // enabled: false,
              gt: 60
              // oSize: 0
            },
            scrollY: {
              // enabled: false,
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
              message: true,
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
        `
      ]
    }
  }
})
</script>
