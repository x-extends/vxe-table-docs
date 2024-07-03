<template>
  <div>
    <CodeLight path="grid/base/seq/Demo1">
      <template #tip>
        <vxe-tip status="primary">设置 <ApiLink name="column" prop="type"/>=<ApiLink name="column" prop="seq"/> 开启序号列</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="seq-config"/>={<ApiLink name="grid" prop="startIndex"/>} 自定义起始序号</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo3">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="grid" prop="seq-config"/>={<ApiLink name="grid" prop="seqMethod"/>} 自定义方法</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
