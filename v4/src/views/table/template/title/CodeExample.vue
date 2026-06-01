<template>
  <div>
    <CodeLight path="table/template/title/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          表头标题模板，使用插槽 <ApiLink name="column" prop="title"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/template/title/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
