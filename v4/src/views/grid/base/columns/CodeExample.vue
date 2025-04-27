<template>
  <div>
    <CodeLight path="grid/base/columns/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="更新列配置">
          表格列 <ApiLink name="grid" prop="columns"/> 和数据 <ApiLink name="grid" prop="data"/> 都是双向同步，改变对应的属性即可更新
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/columns/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          增加、删除列配置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
