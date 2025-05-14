<template>
  <div>
    <CodeLight path="grid/scroll/mergeFixed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="合并与复杂功能">
          虚拟渲染与单元格合并，可以通过设置参数 <ApiLink name="table" prop="merge-cells"/> 或调用函数 <ApiLink name="table" prop="setMergeCells"/>、<ApiLink name="table" prop="setMergeCells"/> 来控制单元格的临时合并状态<br>
        </vxe-tip>
        <vxe-tip status="error">
          <div>合并的性能是非常低的，当所有行都被合并为一行时就等同于关闭虚拟滚动。</div>
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
