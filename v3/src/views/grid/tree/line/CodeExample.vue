<template>
  <div>
    <CodeLight path="grid/tree/line/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格，通过配置 <ApiLink name="grid" prop="tree-config"/>={<ApiLink name="grid" prop="showLine"/>: true} 属性来开启树节点连接线<br>
        </vxe-tip>
        <vxe-tip status="error">
          连接线功能需要开启 <ApiLink name="grid" prop="show-overflow"/>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/line/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          复选框与连接线
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
