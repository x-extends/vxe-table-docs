<template>
  <div>
    <CodeLight path="grid/template/layout/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义插槽模板">
          使用自定义插槽模板
        </vxe-tip>
        <vxe-tip status="success">
          <div>
            <ApiLink name="grid" prop="form"/>：自定义表单模板<br>
            <ApiLink name="grid" prop="toolbar"/>：自定义工具栏模板<br>
            <ApiLink name="grid" prop="top"/>：自定义顶部模板<br>
            <ApiLink name="grid" prop="bottom"/>：自定义底部模板<br>
            <ApiLink name="grid" prop="left"/>：自定义左边模板<br>
            <ApiLink name="grid" prop="right"/>：自定义右边模板<br>
            <ApiLink name="grid" prop="asideLeft"/>：自定义左侧模板<br>
            <ApiLink name="grid" prop="asideRight"/>：自定义右侧模板<br>
            <ApiLink name="grid" prop="pager"/>：自定义分页模板<br>
          </div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
