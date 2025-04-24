<template>
  <div>
    <CodeLight path="grid/scroll/bigData/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="百万级数据量">
          当数据量超过虚拟虚拟滚动30万行上限时，会自动启用超大量渲染模式，仅支持通过调用 <ApiLink name="grid" prop="loadData"/> 或者 <ApiLink name="grid" prop="reloadData"/> 来加载数据
        </vxe-tip>
        <vxe-tip status="success">
          <div>超大量数据理论上限：纵向最大可以支持 500w 行，当 gt 为 0 时为总是启用。</div>
        </vxe-tip>
        <vxe-tip status="error">
          <div>当启用渲染超大量数据时，对内存的占用较高；当使用超大量数据时，部分功能将会不支持启用。</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
