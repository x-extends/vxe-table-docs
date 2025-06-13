<template>
  <div>
    <CodeLight path="grid/colResizable/minWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="限制拖拽最小列宽">
          通过 <ApiLink name="grid" prop="resizable-config"/>.<ApiLink name="grid" prop="minWidth"/> 自定义最小列宽的限制，默认是继承 column.<ApiLink name="column" prop="min-width"/> 限制，当需要脱离列限制时就有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
