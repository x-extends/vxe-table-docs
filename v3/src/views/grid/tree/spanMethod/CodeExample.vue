<template>
  <div>
    <CodeLight path="grid/tree/spanMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义合并">
          通过 <ApiLink name="grid" prop="span-method"/> 自定义合并行函数，将对分组行进行合并
        </vxe-tip>
        <vxe-tip status="error">
          <div>合并的性能是非常低的，当所有行都被合并为一行时就等同于关闭虚拟滚动。应该避免合并太多行的使用场景</div>
        </vxe-tip>
        <vxe-tip status="warning">
          <div>该方式的虚拟滚动存在限制；</div>
          <div>如果进行跨行合并，则不支持纵向虚拟滚动；</div>
          <div>如果进行跨列合并，则不支持横向虚拟滚动；</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
