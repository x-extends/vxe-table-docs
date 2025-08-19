<template>
  <div>
    <CodeLight path="grid/tree/stripe/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="斑马线样式">
          斑马线样式，通过设置 <ApiLink name="grid" prop="stripe"/> 参数
        </vxe-tip>
        <vxe-tip status="error">
          需要注意斑马线样式仅支持 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="transform"/> 平级结构
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/stripe/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="isHover"/> 属性启用 hover 行高亮</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
