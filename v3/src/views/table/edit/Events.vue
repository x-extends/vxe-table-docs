<template>
  <div>
    <p class="tip">通过 <table-column-api-link prop="events"/> 自定义目标组件的事件<br><span class="red">（注：具体请查看目标组件所支持的事件）</span></p>

    <vxe-table
      border
      resizable
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row, column }">
          <vxe-input v-model="row.name" type="text" @change="nameChangeEvent({ column })"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row, column }">
          <vxe-input v-model="row.role" type="text" @change="roleChangeEvent({ column })"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="nickname" title="Nickname" :filters="[{ data: '' }]" :filter-render="{}" :edit-render="{}">
        <template #filter="{ column, $panel }">
          <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">
        </template>
        <template #edit="{ row, column }">
          <vxe-input v-model="row.nickname" type="text" @focus="roleFocusEvent({ column })"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row, column }">
          <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">
            <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row, column }">
          <vxe-input v-model="row.date12" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ],
      sexList: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ],
      demoCodes: [
        `
        <vxe-table
          border
          resizable
          show-overflow
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell'}">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row, column }">
              <vxe-input v-model="row.name" type="text" @change="nameChangeEvent({ column })"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="role" title="Role" :edit-render="{}">
            <template #edit="{ row, column }">
              <vxe-input v-model="row.role" type="text" @change="roleChangeEvent({ column })"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="nickname" title="Nickname" :filters="[{ data: '' }]" :filter-render="{}" :edit-render="{}">
            <template #filter="{ column, $panel }">
              <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">
            </template>
            <template #edit="{ row, column }">
              <vxe-input v-model="row.nickname" type="text" @focus="roleFocusEvent({ column })"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="sex" title="Sex" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatSex(row.sex) }}</span>
            </template>
            <template #edit="{ row, column }">
              <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">
                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-column>
          <vxe-column field="date12" title="Date" :edit-render="{}">
            <template #edit="{ row, column }">
              <vxe-input v-model="row.date12" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>
            </template>
          </vxe-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
              ],
              sexList: [
                { label: '女', value: '0' },
                { label: '男', value: '1' }
              ]
            }
          },
          methods: {
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            enterFilterEvent ({ column, $panel }) {
              console.log(\`\${column.title} 筛选回车事件\`)
              $panel.confirmFilter()
            },
            nameChangeEvent ({ column }) {
              console.log(\`\${column.title} 触发 input 事件\`)
            },
            roleChangeEvent ({ column }) {
              console.log(\`\${column.title} 触发 input 事件\`)
            },
            roleFocusEvent ({ column }) {
              console.log(\`\${column.title} 触发 focus 事件\`)
            },
            sexChangeEvent ({ column }) {
              console.log(\`\${column.title} 触发 change 事件\`)
            },
            dateChangeEvent ({ column }) {
              console.log(\`\${column.title} 触发 change 事件\`)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatSex (value) {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    },
    enterFilterEvent ({ column, $panel }) {
      console.log(`${column.title} 筛选回车事件`)
      $panel.confirmFilter()
    },
    nameChangeEvent ({ column }) {
      console.log(`${column.title} 触发 input 事件`)
    },
    roleChangeEvent ({ column }) {
      console.log(`${column.title} 触发 input 事件`)
    },
    roleFocusEvent ({ column }) {
      console.log(`${column.title} 触发 focus 事件`)
    },
    sexChangeEvent ({ column }) {
      console.log(`${column.title} 触发 change 事件`)
    },
    dateChangeEvent ({ column }) {
      console.log(`${column.title} 触发 change 事件`)
    }
  }
}
</script>
