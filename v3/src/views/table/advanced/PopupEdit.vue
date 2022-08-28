<template>
  <div>
    <p class="tip">实现弹框表单编辑功能<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vxe-table
      border
      resizable
      height="500"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
      <vxe-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vxe-button type="text" icon="vxe-icon-edit" @click="editEvent(row)"></vxe-button>
          <vxe-button type="text" icon="vxe-icon-delete"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>

    <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" resize destroy-on-close>
      <template #default>
        <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
          <vxe-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: 'vxe-icon-comment'}"></vxe-form-item>
          <vxe-form-item field="name" title="Name" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="role" title="Role" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.name" placeholder="请输入角色"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="sex" title="Sex" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-select v-model="data.sex" transfer>
                <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item field="age" title="Age" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.age" type="number" placeholder="请输入年龄"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-radio-group v-model="data.flag1">
                <vxe-radio label="Y" content="是"></vxe-radio>
                <vxe-radio label="N" content="否"></vxe-radio>
              </vxe-radio-group>
            </template>
          </vxe-form-item>
          <vxe-form-item field="checkedList" title="可选信息" :span="24" :item-render="{}">
            <template #default="{ data }">
              <vxe-checkbox-group v-model="data.checkedList">
                <vxe-checkbox label="1" content="运动、跑步"></vxe-checkbox>
                <vxe-checkbox label="2" content="听音乐"></vxe-checkbox>
                <vxe-checkbox label="3" content="爬山"></vxe-checkbox>
                <vxe-checkbox label="4" content="吃美食"></vxe-checkbox>
              </vxe-checkbox-group>
            </template>
          </vxe-form-item>
          <vxe-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: '请填写必填项', icon: 'vxe-icon-info-circle-fill'}"></vxe-form-item>
          <vxe-form-item field="num" title="Number" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.num" type="number" placeholder="请输入数值"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="date3" title="Date" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vxe-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: '提示信息！！', icon: 'vxe-icon-question-circle-fill'}">
            <template #default="{ data }">
              <vxe-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vxe-textarea>
            </template>
          </vxe-form-item>
          <vxe-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vxe-button type="submit">提交</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </template>
    </vxe-modal>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import VXETable from 'vxe-table'

export default {
  data () {
    return {
      selectRow: null,
      showEdit: false,
      sexList: [
        { label: '', value: '' },
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ],
      formData: null,
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vxe-table
          border
          resizable
          height="500"
          :row-config="{isCurrent: true, isHover: true}"
          :data="tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address" show-overflow></vxe-column>
          <vxe-column title="操作" width="100" show-overflow>
            <template #default="{ row }">
              <vxe-button type="text" icon="vxe-icon-edit" @click="editEvent(row)"></vxe-button>
              <vxe-button type="text" icon="vxe-icon-delete"></vxe-button>
            </template>
          </vxe-column>
        </vxe-table>

        <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" resize destroy-on-close>
          <template #default>
            <vxe-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
              <vxe-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: 'vxe-icon-comment'}"></vxe-form-item>
              <vxe-form-item field="name" title="Name" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.name" placeholder="请输入名称"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="role" title="Role" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.name" placeholder="请输入角色"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="sex" title="Sex" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-select v-model="data.sex" transfer>
                    <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
                  </vxe-select>
                </template>
              </vxe-form-item>
              <vxe-form-item field="age" title="Age" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.age" type="number" placeholder="请输入年龄"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-radio-group v-model="data.flag1">
                    <vxe-radio label="Y" content="是"></vxe-radio>
                    <vxe-radio label="N" content="否"></vxe-radio>
                  </vxe-radio-group>
                </template>
              </vxe-form-item>
              <vxe-form-item field="checkedList" title="可选信息" :span="24" :item-render="{}">
                <template #default="{ data }">
                  <vxe-checkbox-group v-model="data.checkedList">
                    <vxe-checkbox label="1" content="运动、跑步"></vxe-checkbox>
                    <vxe-checkbox label="2" content="听音乐"></vxe-checkbox>
                    <vxe-checkbox label="3" content="爬山"></vxe-checkbox>
                    <vxe-checkbox label="4" content="吃美食"></vxe-checkbox>
                  </vxe-checkbox-group>
                </template>
              </vxe-form-item>
              <vxe-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: '请填写必填项', icon: 'vxe-icon-info-circle-fill'}"></vxe-form-item>
              <vxe-form-item field="num" title="Number" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.num" type="number" placeholder="请输入数值"></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="date3" title="Date" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vxe-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vxe-input>
                </template>
              </vxe-form-item>
              <vxe-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: '提示信息！！', icon: 'vxe-icon-question-circle-fill'}">
                <template #default="{ data }">
                  <vxe-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vxe-textarea>
                </template>
              </vxe-form-item>
              <vxe-form-item align="center" title-align="left" :span="24">
                <template #default>
                  <vxe-button type="submit">提交</vxe-button>
                  <vxe-button type="reset">重置</vxe-button>
                </template>
              </vxe-form-item>
            </vxe-form>
          </template>
        </vxe-modal>
        `,
        `
        import VXETable from 'vxe-table'
        
        export default {
          data () {
            return {
              selectRow: null,
              showEdit: false,
              sexList: [
                { label: '', value: '' },
                { label: '女', value: '0' },
                { label: '男', value: '1' }
              ],
              formData: null,
              formRules: {
                name: [
                  { required: true, message: '请输入名称' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
                ],
                nickname: [
                  { required: true, message: '请输入昵称' }
                ],
                sex: [
                  { required: true, message: '请选择性别' }
                ]
              },
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
              ]
            }
          },
          methods: {
            formatterSex ({ cellValue }) {
              const item = this.sexList.find(item => item.value === cellValue)
              return item ? item.label : ''
            },
            editEvent (row) {
              this.formData = {
                name: row.name,
                nickname: row.nickname,
                role: row.role,
                sex: row.sex,
                age: row.age,
                num: row.num,
                date3: row.date3,
                address: row.address
              }
              this.selectRow = row
              this.showEdit = true
            },
            submitEvent () {
              this.showEdit = false
              VXETable.modal.message({ content: '保存成功', status: 'success' })
              Object.assign(this.selectRow, this.formData)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatterSex ({ cellValue }) {
      const item = this.sexList.find(item => item.value === cellValue)
      return item ? item.label : ''
    },
    editEvent (row) {
      this.formData = {
        name: row.name,
        nickname: row.nickname,
        role: row.role,
        sex: row.sex,
        age: row.age,
        num: row.num,
        date3: row.date3,
        address: row.address
      }
      this.selectRow = row
      this.showEdit = true
    },
    submitEvent () {
      this.showEdit = false
      VXETable.modal.message({ content: '保存成功', status: 'success' })
      Object.assign(this.selectRow, this.formData)
    }
  }
}
</script>
