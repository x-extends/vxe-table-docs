<template>
  <div>
    <CodeLight path="table/tree/line/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          树表格，通过配置 <ApiLink name="table" prop="tree-config"/>={<ApiLink name="table" prop="showLine"/>: true} 属性来开启树节点连接线<br>
        </vxe-tip>
        <vxe-tip status="error">
          连接线功能需要开启 <ApiLink name="grid" prop="show-overflow"/>，不支持设置行高，仅支持等行高
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/tree/line/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          复选框与连接线
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
