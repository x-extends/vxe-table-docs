<template>
  <div>
    <vxe-form
      vertical
      title-bold
      title-overflow
      span="24"
      :data="currWidget.options">
      <vxe-form-item title="控件字段名" :title-prefix="{icon: 'vxe-icon-question-circle-fill', content: '唯一字段名，默认自动生成'}">
        <vxe-input v-model="currWidget.field" placeholder="唯一，默认自动生成"></vxe-input>
      </vxe-form-item>
      <vxe-form-item title="控件名称">
        <vxe-input v-model="currWidget.title"></vxe-input>
      </vxe-form-item>
      <vxe-form-item title="是否必填">
        <vxe-switch v-model="currWidget.required"></vxe-switch>
      </vxe-form-item>
      <vxe-form-item title="空值占位提示">
        <vxe-input v-model="currWidget.options.placeholder"></vxe-input>
      </vxe-form-item>
      <vxe-form-item title="显示清除按钮">
        <vxe-switch v-model="currWidget.options.clearable"></vxe-switch>
      </vxe-form-item>
      <vxe-form-item title="允许多选">
        <vxe-switch v-model="currWidget.options.multiple"></vxe-switch>
      </vxe-form-item>
      <vxe-form-item title="允许搜索">
        <vxe-switch v-model="currWidget.options.filterable"></vxe-switch>
      </vxe-form-item>
      <vxe-form-item title="数据源">
        <vxe-button mode="text" status="primary" icon="vxe-icon-edit" @click="editEvent">编辑数据</vxe-button>
      </vxe-form-item>
    </vxe-form>

    <vxe-modal v-model="showEditOptions" v-bind="modalOptions" @confirm="confirmEvent">
      <vxe-grid ref="gridRef" v-bind="gridOptions">
        <template #toolbarButtons>
          <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
          <vxe-button status="error" icon="vxe-icon-delete-fill" @click="clearEvent">清除</vxe-button>
        </template>

        <template #action="{ row }">
          <vxe-button mode="text" icon="vxe-icon-delete" status="error" @click="removeRow(row)"></vxe-button>
        </template>
      </vxe-grid>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, PropType, ref } from 'vue'
import { VxeUI, VxeGlobalRendererHandles, VxeModalProps } from 'vxe-pc-ui'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'
import { FormDesignWidgetSelectProps } from './demoFormDesignSelectWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetSelectProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})

const gridRef = ref<VxeGridInstance>()

const showEditOptions = ref(false)
const gridOptions = reactive<VxeGridProps & { data: any[] }>({
  height: '100%',
  border: true,
  showOverflow: true,
  toolbarConfig: {
    slots: {
      buttons: 'toolbarButtons'
    }
  },
  editRules: {
    value: [
      { required: true, content: '请输入值' }
    ]
  },
  editConfig: {
    mode: 'cell',
    trigger: 'click'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'value', title: '值', editRender: { name: 'input' } },
    { field: 'action', title: '操作', width: 80, slots: { default: 'action' } }
  ],
  data: []
})

const modalOptions = reactive<VxeModalProps>({
  title: '数据源',
  width: 500,
  height: 600,
  showFooter: true,
  showConfirmButton: true,
  async beforeHideMethod () {
    const $grid = gridRef.value
    if ($grid) {
      const errMap = await $grid.validate(true)
      if (errMap) {
        VxeUI.modal.message({ status: 'error', content: '请填写必填字段' })
        // 返回 Error 禁止关闭
        return new Error()
      }
    }
  }
})

const addEvent = () => {
  gridOptions.data.unshift({ value: `值${gridOptions.data.length}` })
}

const editEvent = () => {
  showEditOptions.value = true
  gridOptions.data = currWidget.value.options.options
}

const clearEvent = () => {
  gridOptions.data = []
}

const removeRow = (row: any) => {
  gridOptions.data = gridOptions.data.filter(item => item.value !== row.value)
}

const confirmEvent = () => {
  currWidget.value.options.options = gridOptions.data.map(item => {
    return { value: item.value, label: item.value }
  })
}
</script>
