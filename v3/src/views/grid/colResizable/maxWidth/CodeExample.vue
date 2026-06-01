<template>
  <div>
    <CodeLight path="grid/colResizable/maxWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="限制拖拽最大列宽">
          通过 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="maxWidth"/> 自定义最大列宽的限制，默认是继承 column.<ApiLink name="column" prop="max-width"/> 限制，当需要脱离列限制时就有用了
        </vxe-tip>
        <vxe-tip status="error" title="重要提醒">
          该功能虽然可以突破列限制，但是会失去部分功能的支持，建议通过列 <ApiLink name="column" prop="max-width"/> 来设置而不是 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="maxWidth"/> 来突破限制，该功能作为特殊场景使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
