<template>
  <div>
    <CodeLight path="grid/checkbox/template/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义插槽模板">
          使用插槽 <ApiLink name="column" prop="checkbox" /> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/checkbox/template/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          实现自定义模板的同时，又能同时保持默认勾选逻辑，例如保持禁用状态等
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
