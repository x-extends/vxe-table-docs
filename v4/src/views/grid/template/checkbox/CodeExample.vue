<template>
  <div>
    <CodeLight path="grid/template/checkbox/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          复选框模板，使用插槽 <ApiLink name="column" prop="checkbox"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/template/checkbox/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX <ApiLink name="column" prop="checkbox"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
