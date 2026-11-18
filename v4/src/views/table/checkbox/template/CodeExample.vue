<template>
  <div>
    <CodeLight path="table/checkbox/template/Demo1" title="自定义插槽模板">
      <template #tip>
        <vxe-tip status="primary">
          使用插槽 <ApiLink name="column" prop="checkbox" /> 来自定义模板，例如换成自定义的图标并使用自带功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/checkbox/template/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现自定义模板的同时，又能同时保持默认勾选逻辑，例如保持禁用状态等
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
