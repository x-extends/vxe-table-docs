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
            import { VXETable } from 'vxe-table'

            // 旧版本使用 setup({}) 或者 config({})
            VXETable.setConfig({
              // size: null, // 全局尺寸
              // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡；新版本可以使用 dom-zindex 共享配置
              // version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据

              alert: {},
              anchor: {},
              anchorLink: {},
              breadcrumb: {
                separator: '/'
              },
              breadcrumbItem: {},
              button: {},
              buttonGroup: {},
              checkbox: {},
              checkboxGroup: {},
              col: {},
              colgroup: {},
              collapse: {},
              collapsePane: {},
              column: {},
              drawer: {
                // size: null,
                position: 'left',
                showHeader: true,
                lockView: true,
                mask: true,
                showTitleOverflow: true,
                showClose: true,
                padding: true
              },
              form: {
                // preventSubmit: false,
                // size: null,
                // colon: false,
                validConfig: {
                  showMessage: true,
                  autoPos: true
                },
                tooltipConfig: {
                  enterable: true
                },
                titleAsterisk: true
              },
              formDesign: {
                height: 400,
                showPc: true
              },
              formGather: {},
              formItem: {},
              formView: {},
              grid: {},
              icon: {},
              image: {},
              imagePreview: {},
              input: {
                // size: null,
                // transfer: false
                // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
                // labelFormat: '',
                // valueFormat: '',
                startDate: new Date(1900, 0, 1),
                endDate: new Date(2100, 0, 1),
                startDay: 1,
                selectDay: 1,
                digits: 2,
                controls: true
              },
              layoutAside: {},
              layoutBody: {},
              layoutContainer: {},
              layoutFooter: {},
              layoutHeader: {},
              link: {
                underline: true
              },
              listDesign: {
                height: 400,
                showPc: true
              },
              list: {
                // size: null,
                scrollY: {
                  enabled: true,
                  gt: 100
                  // oSize: 0
                }
              },
              loading: {},
              modal: {
                // size: null,
                top: 15,
                showHeader: true,
                minWidth: 340,
                minHeight: 140,
                lockView: true,
                mask: true,
                duration: 3000,
                marginSize: 0,
                dblclickZoom: true,
                showTitleOverflow: true,
                showClose: true,
                padding: true,
                draggable: true,
                showConfirmButton: null,
                // storage: false,
                storageKey: 'VXE_MODAL_POSITION'
              },
              optgroup: {},
              option: {},
              pager: {
                // size: null,
                // autoHidden: false,
                // perfect: true,
                // pageSize: 10,
                // pagerCount: 7,
                // pageSizes: [10, 15, 20, 50, 100],
                // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
              },
              pulldown: {},
              radio: {
                strict: true
              },
              radioButton: {
                strict: true
              },
              radioGroup: {
                strict: true
              },
              row: {},
              select: {
                multiCharOverflow: 8
              },
              switch: {},
              tabPane: {},
              table: {},
              tabs: {},
              textarea: {},
              toolbar: {},
              tip: {},
              tooltip: {
                // size: null,
                trigger: 'hover',
                theme: 'dark',
                enterDelay: 500,
                leaveDelay: 300
              },
              tree: {},
              treeSelect: {},
              upload: {
                mode: 'all',
                imageTypes: ['jpg', 'jpeg', 'png', 'gif']
              }
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
