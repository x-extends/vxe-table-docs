<template>
  <div>
    <CodeLight path="grid/tree/seqMode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="序号">
          树形结构默认的序号是按层级的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/seqMode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="seqMode"/>='increasing' 设置为自增序号
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/tree/seqMode/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="tree-config"/>.<ApiLink name="grid" prop="seqMode"/>='fixed' 设置为固定序号
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
