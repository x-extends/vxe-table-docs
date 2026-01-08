<template>
  <div>
    <CodeLight path="grid/custom/maxHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义最大高度">
          在表格设置高度或最小高度的情况下个性化列弹出层默认内部模式（自适应表格高度），表格多高就最大多高；未设置高度情况下默认外部模式（不跟随表格高度）
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/maxHeight/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          强制渲染弹出层为内部模式，可以通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="poupuOptions"/>.<ApiLink name="grid" prop="mode"/>='inside' 来设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/maxHeight/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          强制渲染弹出层为外部模式，可以通过 <ApiLink name="grid" prop="custom-config"/>.<ApiLink name="grid" prop="poupuOptions"/>.<ApiLink name="grid" prop="mode"/>='outside' 来设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
