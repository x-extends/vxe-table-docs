<template>
  <div>
    <CodeLight path="grid/tree/spanMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并行函数，将对分组行进行合并
        </vxe-tip>
        <vxe-tip status="error" title="如何优化合并">
          <div>合并的性能是非常低的，当所有行都被合并为一个单元格时就等同于关闭纵向虚拟滚动，当所有列都被合并为一个单元格时就等同于关闭横向虚拟滚动。应该避免合并范围过大的使用场景</div>
        </vxe-tip>
        <vxe-tip status="warning" title="小提示">
          <div>如果使用 <ApiLink name="grid" prop="merge-cells"/> 方式则是全功能的，支持虚拟滚动；</div>
          <div>如果是 <ApiLink name="grid" prop="span-method"/> 方式的虚拟滚动支持部分功能，存在功能限制；</div>
          <div>如果进行跨行合并，则不支持纵向虚拟滚动；</div>
          <div>如果进行跨列合并，则不支持横向虚拟滚动；</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
