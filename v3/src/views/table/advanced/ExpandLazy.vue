<template>
  <div>
    <p class="tip">展开行的懒加载，通过配置 <table-api-link prop="expand-config"/>={<table-api-link prop="lazy"/>, <table-api-link prop="loadMethod"/>} 加载方法来开启懒加载<br></p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="$refs.xTable.toggleRowExpand(tableData[1])">切换第二行展开</vxe-button>
        <vxe-button @click="$refs.xTable.setRowExpand([tableData[2], tableData[3]], true)">设置第三、四行展开</vxe-button>
        <vxe-button @click="$refs.xTable.setAllRowExpand(true)">设置所有行展开</vxe-button>
        <vxe-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="xTable"
      :data="tableData"
      :expand-config="{lazy: true, loadMethod: loadContentMethod}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column type="expand" width="80">
        <template #content="{ row }">
          <ul>
            <li v-for="(item, index) in row.detailList" :key="index">
              <span>Role: {{ item.role }}</span>
              <span style="margin-left: 100px"> Age: {{ item.age }}</span>
              <span style="margin-left: 100px"> Sex: {{ item.sex }}</span>
            </li>
          </ul>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">实现父子表格懒加载</p>

    <vxe-table
      border
      :data="tableData2"
      :expand-config="{accordion: true, lazy: true, loadMethod: loadContentMethod2}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column type="expand" width="80">
        <template #content="{ row }">
          <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data () {
    return {
      tableData: [
        { name: 'Develop', age: 20, sex: '女', detailList: [] },
        { name: 'Develop', age: 22, sex: '女', detailList: [] },
        { name: 'Develop', age: 24, sex: '男', detailList: [] },
        { name: 'Develop', age: 26, sex: '女', detailList: [] }
      ],
      tableData2: [
        { name: 'Develop', age: 20, sex: '女', childCols: [], childData: [] },
        { name: 'Develop', age: 22, sex: '女', childCols: [], childData: [] },
        { name: 'Develop', age: 24, sex: '男', childCols: [], childData: [] },
        { name: 'Develop', age: 26, sex: '女', childCols: [], childData: [] }
      ],
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="$refs.xTable.toggleRowExpand(tableData[1])">切换第二行展开</vxe-button>
            <vxe-button @click="$refs.xTable.setRowExpand([tableData[2], tableData[3]], true)">设置第三、四行展开</vxe-button>
            <vxe-button @click="$refs.xTable.setAllRowExpand(true)">设置所有行展开</vxe-button>
            <vxe-button @click="$refs.xTable.clearRowExpand()">关闭所有行展开</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          ref="xTable"
          :data="tableData"
          :expand-config="{lazy: true, loadMethod: loadContentMethod}">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column type="expand" width="80">
            <template #content="{ row }">
              <ul>
                <li v-for="(item, index) in row.detailList" :key="index">
                  <span>Role: {{ item.role }}</span>
                  <span style="margin-left: 100px"> Age: {{ item.age }}</span>
                  <span style="margin-left: 100px"> Sex: {{ item.sex }}</span>
                </li>
              </ul>
            </template>
          </vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
        `,
        `
        import XEUtils from 'xe-utils'

        export default {
          data () {
            return {
              tableData: [
                { name: 'Develop', age: 20, sex: '女', detailList: [] },
                { name: 'Develop', age: 22, sex: '女', detailList: [] },
                { name: 'Develop', age: 24, sex: '男', detailList: [] },
                { name: 'Develop', age: 26, sex: '女', detailList: [] }
              ]
            }
          },
          methods: {
            loadContentMethod ({ row }) {
              return new Promise(resolve => {
                setTimeout(() => {
                  const detailList = XEUtils.sample([
                    { role: 'Develop', age: 20, sex: '女' },
                    { role: 'Develop', age: 22, sex: '女' },
                    { role: 'Develop', age: 24, sex: '男' },
                    { role: 'Develop', age: 26, sex: '女' },
                    { role: 'Develop', age: 28, sex: '男' },
                    { role: 'Develop', age: 30, sex: '男' }
                  ], XEUtils.random(1, 5))
                  row.detailList = detailList
                  resolve()
                }, 500)
              })
            }
          }
        }
        `,
        `
        <vxe-table
          border
          :data="tableData"
          :expand-config="{accordion: true, lazy: true, loadMethod: loadContentMethod}">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column type="expand" width="80">
            <template #content="{ row }">
              <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>
            </template>
          </vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
        `,
        `
        import XEUtils from 'xe-utils'
        
        export default {
          data () {
            return {
              tableData: [
                { name: 'Develop', age: 20, sex: '女', childCols: [], childData: [] },
                { name: 'Develop', age: 22, sex: '女', childCols: [], childData: [] },
                { name: 'Develop', age: 24, sex: '男', childCols: [], childData: [] },
                { name: 'Develop', age: 26, sex: '女', childCols: [], childData: [] }
              ]
            }
          },
          methods: {
            loadContentMethod ({ row }) {
              return new Promise(resolve => {
                setTimeout(() => {
                  const childCols = XEUtils.sample([
                    { type: 'seq', title: 'Sequence' },
                    { field: 'name', title: 'Name' },
                    { field: 'role', title: 'Role' },
                    { field: 'age', title: 'Age' },
                    { field: 'sex', title: 'Sex' }
                  ], XEUtils.random(3, 5))
                  const childData = XEUtils.sample([
                    { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },
                    { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },
                    { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },
                    { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },
                    { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },
                    { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }
                  ], XEUtils.random(1, 5))
                  row.childCols = childCols
                  row.childData = childData
                  resolve()
                }, 500)
              })
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    loadContentMethod ({ row }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const detailList = XEUtils.sample([
            { role: 'Develop', age: 20, sex: '女' },
            { role: 'Develop', age: 22, sex: '女' },
            { role: 'Develop', age: 24, sex: '男' },
            { role: 'Develop', age: 26, sex: '女' },
            { role: 'Develop', age: 28, sex: '男' },
            { role: 'Develop', age: 30, sex: '男' }
          ], XEUtils.random(1, 5))
          row.detailList = detailList
          resolve()
        }, 500)
      })
    },
    loadContentMethod2 ({ row }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const childCols = XEUtils.sample([
            { type: 'seq', title: 'Sequence' },
            { field: 'name', title: 'Name' },
            { field: 'role', title: 'Role' },
            { field: 'age', title: 'Age' },
            { field: 'sex', title: 'Sex' }
          ], XEUtils.random(3, 5))
          const childData = XEUtils.sample([
            { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },
            { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },
            { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },
            { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },
            { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },
            { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }
          ], XEUtils.random(1, 5))
          row.childCols = childCols
          row.childData = childData
          resolve()
        }, 500)
      })
    }
  }
}
</script>
