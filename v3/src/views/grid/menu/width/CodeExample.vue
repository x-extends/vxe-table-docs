<template>
  <div>
    <CodeLight path="grid/menu/width/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置宽度">
          通过 <ApiLink name="grid" prop="menu-config"/>.<ApiLink name="grid" prop="width"/> 来设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/menu/width/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          可以通过 css 变量定义菜单选项的宽度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
