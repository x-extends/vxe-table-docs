<template>
  <div>
    <CodeLight path="grid/base/stripe/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          斑马线条纹，通过设置 <ApiLink name="grid" prop="stripe"/> 参数
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/stripe/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="row-config"/>.<ApiLink name="grid" prop="isHover"/> 属性启用 hover 行高亮</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
