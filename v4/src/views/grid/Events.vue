<template>
  <div>
    <p class="tip">
      表格事件绑定，通过设置 <table-api-link prop="cell-click"/>、<table-api-link prop="cell-dblclick"/> ...等常用事件<br>
      <span class="red">（注：部分特殊事件需要开启对应的参数后才能有效）</span>
    </p>

    <vxe-grid v-bind="gridOptions" v-on="gridEvents">
      <template #name_edit="{ row, column }">
        <vxe-input v-model="row.name" @change="nameChangeEvent({ column })"></vxe-input>
      </template>
      <template #role_edit="{ row, column }">
        <vxe-input v-model="row.role" @change="roleChangeEvent({ column })"></vxe-input>
      </template>
      <template #age_edit="{ row, column }">
        <vxe-input v-model="row.age" @focus="ageFocusEvent({ column })"></vxe-input>
      </template>
      <template #age_filter="{ column, $panel }">
        <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">
      </template>
      <template #sex_default="{ row }">
        <span>{{ formatSex(row.sex) }}</span>
      </template>
      <template #sex_edit="{ row, column }">
        <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">
          <vxe-option value="1" label="男"></vxe-option>
          <vxe-option value="0" label="女"></vxe-option>
        </vxe-select>
      </template>
      <template #date_edit="{ row, column }">
        <vxe-input v-model="row.date" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { VxeGridListeners, VxeGridProps } from 'vxe-table'

export default defineComponent({
  setup () {
    const meanNum = (list: any[], field: string) => {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count / list.length
    }

    const sumNum = (list: any[], field: string) => {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    }

    const gridOptions = reactive<VxeGridProps>({
      border: true,
      stripe: true,
      resizable: true,
      showFooter: true,
      height: 500,
      tooltipConfig: {},
      exportConfig: {},
      menuConfig: {},
      toolbarConfig: {
        export: true,
        zoom: true
      },
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 60 },
        { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
        { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
        { field: 'age', title: 'Age', filters: [{ data: '' }], editRender: {}, slots: { filter: 'age_filter', edit: 'age_edit' } },
        { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
        { field: 'date', title: 'Date', editRender: {}, slots: { edit: 'date_edit' } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '2021-03-13' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, date: '2021-01-05' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, date: '2021-04-13' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, date: '2021-09-13' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, date: '2021-10-13' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '2021-01-33' }
      ],
      footerMethod ({ columns, data }) {
        return [
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '和值'
            }
            if (['age', 'rate'].includes(column.property)) {
              return sumNum(data, column.property)
            }
            return ''
          }),
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '平均'
            }
            if (['age', 'rate'].includes(column.property)) {
              return meanNum(data, column.property)
            }
            return ''
          })
        ]
      }
    })

    const gridEvents: VxeGridListeners = {
      headerCellClick ({ column }) {
        console.log(`表头单元格点击${column.title}`)
      },
      headerCellDblclick ({ column }) {
        console.log(`表头单元格双击${column.title}`)
      },
      headerCellMenu ({ column }) {
        console.log(`表头右键单元格 ${column.title}`)
      },
      cellClick ({ column }) {
        console.log(`单元格点击${column.title}`)
      },
      cellDblclick ({ column }) {
        console.log(`单元格双击${column.title}`)
      },
      cellMenu ({ row }) {
        console.log(`单元格右键行 ${row.name}`)
      },
      footerCellClick ({ column }) {
        console.log(`表尾单元格点击${column.title}`)
      },
      footerCellDblclick ({ column }) {
        console.log(`表尾单元格双击${column.title}`)
      },
      footerCellMenu ({ column }) {
        console.log(`表尾右键单元格 ${column.title}`)
      },
      checkboxChange ({ checked }) {
        console.log(`复选框切换 ${checked}`)
      },
      checkboxAll ({ checked }) {
        console.log(`复选框全选切换 ${checked}`)
      },
      scroll ({ scrollTop, scrollLeft }) {
        console.log(`滚动事件scrollTop=${scrollTop} scrollLeft=${scrollLeft}`)
      },
      zoom ({ type }) {
        console.log(`表格全屏 type=${type}`)
      }
    }

    const formatSex = (value: any) => {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    }

    const enterFilterEvent = ({ $panel }: any) => {
      console.log('筛选回车事件')
      $panel.confirmFilter()
    }

    const nameChangeEvent = ({ column }: any) => {
      console.log(`${column.title} 触发 input 事件`)
    }

    const roleChangeEvent = ({ column }: any) => {
      console.log(`${column.title} 触发 input 事件`)
    }

    const ageFocusEvent = ({ column }: any) => {
      console.log(`${column.title} 触发 focus 事件`)
    }

    const sexChangeEvent = ({ column }: any) => {
      console.log(`${column.title} 触发 change 事件`)
    }

    const dateChangeEvent = ({ column }: any) => {
      console.log(`${column.title} 触发 change 事件`)
    }

    return {
      gridOptions,
      gridEvents,
      formatSex,
      enterFilterEvent,
      nameChangeEvent,
      roleChangeEvent,
      ageFocusEvent,
      sexChangeEvent,
      dateChangeEvent,
      demoCodes: [
        `
        <vxe-grid v-bind="gridOptions" v-on="gridEvents">
          <template #name_edit="{ row, column }">
            <vxe-input v-model="row.name" @change="nameChangeEvent({ column })"></vxe-input>
          </template>
          <template #role_edit="{ row, column }">
            <vxe-input v-model="row.role" @change="roleChangeEvent({ column })"></vxe-input>
          </template>
          <template #age_edit="{ row, column }">
            <vxe-input v-model="row.age" @focus="ageFocusEvent({ column })"></vxe-input>
          </template>
          <template #age_filter="{ column, $panel }">
            <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">
          </template>
          <template #sex_default="{ row }">
            <span>{{ formatSex(row.sex) }}</span>
          </template>
          <template #sex_edit="{ row, column }">
            <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">
              <vxe-option value="1" label="男"></vxe-option>
              <vxe-option value="0" label="女"></vxe-option>
            </vxe-select>
          </template>
          <template #date_edit="{ row, column }">
            <vxe-input v-model="row.date" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive } from 'vue'
        import { VxeGridListeners, VxeGridProps } from 'vxe-table'

        export default defineComponent({
          setup () {
            const meanNum = (list: any[], field: string) => {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count / list.length
            }

            const sumNum = (list: any[], field: string) => {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            }

            const gridOptions = reactive<VxeGridProps>({
              border: true,
              stripe: true,
              resizable: true,
              showFooter: true,
              height: 500,
              tooltipConfig: {},
              exportConfig: {},
              menuConfig: {},
              toolbarConfig: {
                export: true,
                zoom: true
              },
              editConfig: {
                trigger: 'click',
                mode: 'cell'
              },
              columns: [
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },
                { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
                { field: 'age', title: 'Age', filters: [{ data: '' }], editRender: {}, slots: { filter: 'age_filter', edit: 'age_edit' } },
                { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
                { field: 'date', title: 'Date', editRender: {}, slots: { edit: 'date_edit' } }
              ],
              data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '2021-03-13' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, date: '2021-01-05' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, date: '2021-04-13' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, date: '2021-09-13' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, date: '2021-10-13' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '2021-01-33' }
              ],
              footerMethod ({ columns, data }) {
                return [
                  columns.map((column, columnIndex) => {
                    if (columnIndex === 0) {
                      return '和值'
                    }
                    if (['age', 'rate'].includes(column.property)) {
                      return sumNum(data, column.property)
                    }
                    return ''
                  }),
                  columns.map((column, columnIndex) => {
                    if (columnIndex === 0) {
                      return '平均'
                    }
                    if (['age', 'rate'].includes(column.property)) {
                      return meanNum(data, column.property)
                    }
                    return ''
                  })
                ]
              }
            })

            const gridEvents: VxeGridListeners = {
              headerCellClick ({ column }) {
                console.log(\`表头单元格点击\${column.title}\`)
              },
              headerCellDblclick ({ column }) {
                console.log(\`表头单元格双击\${column.title}\`)
              },
              headerCellMenu ({ column }) {
                console.log(\`表头右键单元格 \${column.title}\`)
              },
              cellClick ({ column }) {
                console.log(\`单元格点击\${column.title}\`)
              },
              cellDblclick ({ column }) {
                console.log(\`单元格双击\${column.title}\`)
              },
              cellMenu ({ row }) {
                console.log(\`单元格右键行 \${row.name}\`)
              },
              footerCellClick ({ column }) {
                console.log(\`表尾单元格点击\${column.title}\`)
              },
              footerCellDblclick ({ column }) {
                console.log(\`表尾单元格双击\${column.title}\`)
              },
              footerCellMenu ({ column }) {
                console.log(\`表尾右键单元格 \${column.title}\`)
              },
              checkboxChange ({ checked }) {
                console.log(\`复选框切换 \${checked}\`)
              },
              checkboxAll ({ checked }) {
                console.log(\`复选框全选切换 \${checked}\`)
              },
              scroll ({ scrollTop, scrollLeft }) {
                console.log(\`滚动事件scrollTop=\${scrollTop} scrollLeft=\${scrollLeft}\`)
              },
              zoom ({ type }) {
                console.log(\`表格全屏 type=\${type}\`)
              }
            }

            const formatSex = (value: any) => {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            }

            const enterFilterEvent = ({ $panel }: any) => {
              console.log('筛选回车事件')
              $panel.confirmFilter()
            }

            const nameChangeEvent = ({ column }: any) => {
              console.log(\`\${column.title} 触发 input 事件\`)
            }

            const roleChangeEvent = ({ column }: any) => {
              console.log(\`\${column.title} 触发 input 事件\`)
            }

            const ageFocusEvent = ({ column }: any) => {
              console.log(\`\${column.title} 触发 focus 事件\`)
            }

            const sexChangeEvent = ({ column }: any) => {
              console.log(\`\${column.title} 触发 change 事件\`)
            }

            const dateChangeEvent = ({ column }: any) => {
              console.log(\`\${column.title} 触发 change 事件\`)
            }

            return {
              gridOptions,
              gridEvents,
              formatSex,
              enterFilterEvent,
              nameChangeEvent,
              roleChangeEvent,
              ageFocusEvent,
              sexChangeEvent,
              dateChangeEvent
            }
          }
        })
        `
      ]
    }
  }
})
</script>
