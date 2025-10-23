<template>
  <div>
    <CodeLight path="table/scroll/hvEdit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可编辑表格">
          同时纵向与横向虚拟滚动。
        </vxe-tip>
        <vxe-tip status="error" title="同时纵向与横向虚拟滚动">
          <div>如果列较多的情况下 table 的性能很差的，应该使用最高性能的 grid</div>
          <div>如果同时加载超大量行与列，需要大内存与更长的预加载时间</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
