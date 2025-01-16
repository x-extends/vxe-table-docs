<template>
  <div>
    <CodeLight path="table/tree/stripe/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="斑马线条纹">
          斑马线条纹，通过设置 <ApiLink name="table" prop="stripe"/> 参数
        </vxe-tip>
        <vxe-tip status="error">
          需要注意斑马线条纹仅支持 <ApiLink name="table" prop="tree-config"/>.<ApiLink name="table" prop="transform"/> 平级结构
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/stripe/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="isHover"/> 属性启用 hover 行高亮</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
