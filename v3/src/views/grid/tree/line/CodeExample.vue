<template>
  <div>
    <CodeLight path="grid/tree/line/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格，通过配置 <ApiLink name="grid" prop="tree-config"/>={<ApiLink name="grid" prop="showLine"/>: true} 属性来开启树节点连接线<br>
        </vxe-tip>
        <vxe-tip status="error">连接线不支持虚拟滚动</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
