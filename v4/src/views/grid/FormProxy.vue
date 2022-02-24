<template>
  <div>
    <p class="tip">表单数据代理，可以通过设置 <grid-api-link prop="form-config"/>={<grid-api-link prop="items"/>} 渲染表单</p>

    <vxe-grid v-bind="gridOptions">
      <template #name_item="{ data }">
        <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>
      </template>
      <template #sex_item="{ data }">
        <vxe-select v-model="data.sex" transfer>
          <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
        </vxe-select>
      </template>
      <template #submit_item>
        <vxe-button type="submit" status="primary" content="查询"></vxe-button>
      </template>
      <template #reset_item>
        <vxe-button type="reset" content="重置"></vxe-button>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { VxeGridProps } from 'vxe-table'

export default defineComponent({
  setup () {
    const gridOptions = reactive<VxeGridProps>({
      border: true,
      showOverflow: true,
      height: 400,
      exportConfig: {},
      columnConfig: {
        resizable: true
      },
      pagerConfig: {
        pageSize: 10
      },
      formConfig: {
        items: [
          { field: 'name', title: '名称', itemRender: {}, slots: { default: 'name_item' } },
          { field: 'sex', title: '性别', itemRender: {}, slots: { default: 'sex_item' } },
          { itemRender: {}, slots: { default: 'submit_item' } },
          { itemRender: {}, slots: { default: 'reset_item' } }
        ]
      },
      toolbarConfig: {
        export: true,
        custom: true
      },
      proxyConfig: {
        form: true, // 启用表单代理
        ajax: {
          // 接收 Promise API
          query: ({ page, form }) => {
            return new Promise(resolve => {
              setTimeout(() => {
                const list = [
                  { id: 10001, name: 'Test1' + form.name, nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
                  { id: 10002, name: 'Test2' + form.name, nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3' + form.name, nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4' + form.name, nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
                  { id: 10005, name: 'Test5' + form.name, nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6' + form.name, nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
                  { id: 10007, name: 'Test7' + form.name, nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
                  { id: 10008, name: 'Test8' + form.name, nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
                  { id: 10009, name: 'Test9' + form.name, nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
                  { id: 10010, name: 'Test10' + form.name, nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
                ]
                resolve({
                  result: list,
                  page: {
                    totle: page.pageSize * 20
                  }
                })
              }, 500)
            })
          }
        }
      },
      columns: [
        { type: 'seq', width: 60 },
        { type: 'checkbox', width: 60 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'age', title: 'Age' },
        { field: 'sex', title: 'Sex' },
        { field: 'describe', title: 'Describe', showOverflow: true }
      ]
    })

    const sexList1 = ref<any[]>([])

    // 异步更新下拉选项
    setTimeout(() => {
      sexList1.value = [
        { value: '1', label: '男' },
        { value: '0', label: '女' }
      ]
    }, 200)

    return {
      gridOptions,
      sexList1,
      demoCodes: [
        `
        <vxe-grid v-bind="gridOptions">
          <template #name_item="{ data }">
            <vxe-input v-model="data.name" type="text" placeholder="请输入名称"></vxe-input>
          </template>
          <template #sex_item="{ data }">
            <vxe-select v-model="data.sex" transfer>
              <vxe-option v-for="item in sexList1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
            </vxe-select>
          </template>
          <template #submit_item>
            <vxe-button type="submit" status="primary" content="查询"></vxe-button>
          </template>
          <template #reset_item>
            <vxe-button type="reset" content="重置"></vxe-button>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive, ref } from 'vue'
        import { VxeGridProps } from 'vxe-table'

        export default defineComponent({
          setup () {
            const gridOptions = reactive<VxeGridProps>({
              border: true,
              showOverflow: true,
              height: 400,
              exportConfig: {},
              columnConfig: {
                resizable: true
              },
              pagerConfig: {
                pageSize: 10
              },
              formConfig: {
                items: [
                  { field: 'name', title: '名称', itemRender: {}, slots: { default: 'name_item' } },
                  { field: 'sex', title: '性别', itemRender: {}, slots: { default: 'sex_item' } },
                  { itemRender: {}, slots: { default: 'submit_item' } },
                  { itemRender: {}, slots: { default: 'reset_item' } }
                ]
              },
              toolbarConfig: {
                export: true,
                custom: true
              },
              proxyConfig: {
                form: true, // 启用表单代理
                ajax: {
                  // 接收 Promise API
                  query: ({ page, form }) => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        const list = [
                          { id: 10001, name: 'Test1' + form.name, nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
                          { id: 10002, name: 'Test2' + form.name, nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
                          { id: 10003, name: 'Test3' + form.name, nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
                          { id: 10004, name: 'Test4' + form.name, nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
                          { id: 10005, name: 'Test5' + form.name, nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
                          { id: 10006, name: 'Test6' + form.name, nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
                          { id: 10007, name: 'Test7' + form.name, nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
                          { id: 10008, name: 'Test8' + form.name, nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
                          { id: 10009, name: 'Test9' + form.name, nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
                          { id: 10010, name: 'Test10' + form.name, nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
                        ]
                        resolve({
                          result: list,
                          page: {
                            totle: page.pageSize * 20
                          }
                        })
                      }, 500)
                    })
                  }
                }
              },
              columns: [
                { type: 'seq', width: 60 },
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name' },
                { field: 'nickname', title: 'Nickname' },
                { field: 'age', title: 'Age' },
                { field: 'sex', title: 'Sex' },
                { field: 'describe', title: 'Describe', showOverflow: true }
              ]
            })

            const sexList1 = ref<any[]>([])

            // 异步更新下拉选项
            setTimeout(() => {
              sexList1.value = [
                { value: '1', label: '男' },
                { value: '0', label: '女' }
              ]
            }, 200)

            return {
              gridOptions,
              sexList1
            }
          }
        })
        `
      ]
    }
  }
})
</script>
