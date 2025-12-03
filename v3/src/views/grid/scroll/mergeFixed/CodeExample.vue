<template>
  <div>
    <CodeLight path="grid/scroll/mergeFixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="合并与复杂功能">
          虚拟渲染同时使用单元格合并与自适应行高，可以通过设置参数 <ApiLink name="table" prop="merge-cells"/> 或调用函数 <ApiLink name="table" prop="setMergeCells"/>、<ApiLink name="table" prop="setMergeCells"/> 来控制单元格的临时合并状态<br>
        </vxe-tip>
        <vxe-tip status="error" title="如何优化合并">
          <div>合并的性能是非常低的，当所有行都被合并为一个单元格时就等同于关闭纵向虚拟滚动，当所有列都被合并为一个单元格时就等同于关闭横向虚拟滚动。应该避免合并范围过大的使用场景</div>
        </vxe-tip>
        <vxe-tip status="warning" title="小提示">
          <div>如果使用 <ApiLink name="grid" prop="merge-cells"/> 方式则是全功能的，支持虚拟滚动；</div>
          <div>如果是 <ApiLink name="grid" prop="span-method"/> 方式的虚拟滚动支持部分功能，存在功能限制：如果进行跨行合并，则不支持纵向虚拟滚动；如果进行跨列合并，则不支持横向虚拟滚动</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
