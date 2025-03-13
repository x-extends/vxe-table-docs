<template>
  <div>
    <CodeLight path="grid/scroll/merge/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="合并行与列">
          虚拟渲染与单元格合并，可以通过设置参数 <ApiLink name="grid" prop="merge-cells"/> 或调用函数 <ApiLink name="grid" prop="setMergeCells"/>、<ApiLink name="grid" prop="setMergeCells"/> 来控制单元格的临时合并状态<br>
        </vxe-tip>
        <vxe-tip status="error">
          <div>合并的性能是非常低的，当所有行都被合并时就等同于关闭虚拟滚动。</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
