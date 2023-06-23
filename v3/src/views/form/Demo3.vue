<template>
  <div>
    <vxe-form :collapse-status.sync="collapseStatus" :data="formData" :rules="formRules" title-align="right" title-width="100" prevent-submit title-colon custom-layout>
      <div style="color: red;">使用自定义布局</div>
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <div style="border: 1px dashed green;padding: 10px;">
        <vxe-form-item title="昵称" field="nickname" :item-render="{}" :title-prefix="{ message: '左边图标', icon: 'vxe-icon-question-circle-fill' }">
          <template #default="{ data }">
            <vxe-input v-model="data.nickname" placeholder="请输入昵称" clearable></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="性别" field="sex" :item-render="{}" :title-prefix="{ message: '左边图标', icon: 'vxe-icon-question-circle-fill' }" :title-suffix="{ message: '右边图标', icon: 'vxe-icon-question-circle-fill' }">
          <template #title>
            <span style="color: red;">标题</span>
          </template>
          <template #default="{ data }">
            <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
              <vxe-option value="1" label="女"></vxe-option>
              <vxe-option value="2" label="男"></vxe-option>
            </vxe-select>
          </template>
        </vxe-form-item>
        <vxe-form-item title="年龄" field="age" :item-render="{}" :title-suffix="{ message: '右边图标', icon: 'vxe-icon-question-circle-fill' }">
          <template #default="{ data }">
            <vxe-input v-model="data.age" type="integer" placeholder="请输入年龄" clearable></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="是否禁用" field="active" :item-render="{}">
          <template #default="{ data }">
            <vxe-switch v-model="data.active" open-label="是" close-label="否"></vxe-switch>
          </template>
        </vxe-form-item>
        <div>
          <vxe-checkbox v-model="collapseStatus" content="查看更多" :checked-value="false" :unchecked-value="true"></vxe-checkbox>
        </div>
        <vxe-form-item title="日期" field="date" :item-render="{}" folding>
          <template #default="{ data }">
            <vxe-input v-model="data.date" type="date" placeholder="请选择日期" clearable></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="兴趣爱好" field="flagList" :item-render="{}" folding>
          <template #default="{ data }">
            <vxe-checkbox-group v-model="data.flagList">
              <vxe-checkbox label="1" content="爬山"></vxe-checkbox>
              <vxe-checkbox label="2" content="跑步"></vxe-checkbox>
              <vxe-checkbox label="3" content="听歌"></vxe-checkbox>
            </vxe-checkbox-group>
          </template>
        </vxe-form-item>
        <div>
          <vxe-form-item align="center" collapse-node>
            <template #default>
              <vxe-button status="primary" content="手动提交方式" @click="searchEvent"></vxe-button>
              <vxe-button content="重置" @click="resetEvent"></vxe-button>
            </template>
          </vxe-form-item>
        </div>
      </div>
    </vxe-form>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      collapseStatus: true,
      formData: {
        name: '',
        nickname: '',
        sex: '',
        age: 30,
        status: '1',
        date: '',
        active: false,
        flagList: []
      },
      formRules: {
        name: [
          { required: true, message: '请输入' }
        ],
        nickname: [
          { required: true, message: '请输入' }
        ]
      }
    }
  },
  methods: {
    searchEvent () {
      VXETable.modal.message({ content: '查询事件', status: 'info' })
    },
    resetEvent () {
      VXETable.modal.message({ content: '重置事件', status: 'info' })
    }
  }
}
</script>
