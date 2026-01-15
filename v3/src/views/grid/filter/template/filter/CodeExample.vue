<template>
  <div>
    <CodeLight path="grid/filter/template/filter/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          筛选模板，使用插槽 <ApiLink name="column" prop="filter"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/filter/template/filter/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX <ApiLink name="column" prop="filter"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
