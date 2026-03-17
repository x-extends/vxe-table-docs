<template>
  <div>
    <CodeLight path="grid/currentColumn/strict/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可取消">
          通过设置 <ApiLink name="grid" prop="current-column-config"/>.<ApiLink name="grid" prop="strict"/>=false 允许取消选中
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
