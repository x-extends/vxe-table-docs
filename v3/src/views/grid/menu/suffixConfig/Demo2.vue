<template>
  <div>
    <vxe-grid v-bind="gridOptions" @menu-click=menuClickEvent></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      rowConfig: {
        isCurrent: true
      },
      columnConfig: {
        resizable: true
      },
      columns: [
        { field: 'checkbox', type: 'checkbox', width: 50 },
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'age', title: 'Age' },
        { field: 'role', title: 'Role' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ],
      menuConfig: {
        header: {
          options: [
            [
              {
                code: 'custom1',
                name: '自定义前缀图标',
                suffixConfig: {
                  icon () {
                    return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  }
                }
              },
              { code: 'custom2', name: '自定义前缀内容', suffixConfig: { content: 'Ctrl+S' } }
            ]
          ]
        },
        body: {
          options: [
            [
              {
                code: 'custom3',
                name: '自定义前缀图标',
                suffixConfig: {
                  icon () {
                    return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  }
                }
              },
              { code: 'custom4', name: '自定义前缀内容', suffixConfig: { content: 'Ctrl+S' } }
            ],
            [
              {
                code: 'custom5',
                name: '二级菜单',
                children: [
                  {
                    code: 'custom6',
                    name: '自定义前缀图标',
                    suffixConfig: {
                      icon () {
                        return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                          </g>
                        </svg>
                      }
                    }
                  },
                  { code: 'custom7', name: '自定义前缀内容', suffixConfig: { content: 'Ctrl+S' } }
                ]
              }
            ]
          ]
        },
        footer: {
          options: [
            [
              {
                code: 'custom8',
                name: '前缀图标',
                suffixConfig: {
                  icon () {
                    return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  }
                }
              },
              { code: 'custom9', name: '前缀内容', suffixConfig: { content: 'Ctrl+S' } }
            ]
          ]
        }
      },
      footerData: [
        { checkbox: '合计', age: 135 }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    menuClickEvent ({ menu }) {
      VxeUI.modal.alert(`点击了 ${menu.name} 选项`)
    }
  }
})
</script>
