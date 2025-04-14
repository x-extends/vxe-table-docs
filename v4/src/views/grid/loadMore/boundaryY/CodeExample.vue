<template>
  <div>
    <CodeLight path="grid/loadMore/boundaryY/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="指定阈值加载行">
          通过 <ApiLink name="grid" prop="virtual-x-config"/>.<ApiLink name="grid" prop="threshold"/> 当滚动到边缘指定阈值的时候，触发 <ApiLink name="grid" prop="scroll-boundary"/> 事件，从而使用实现加载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
