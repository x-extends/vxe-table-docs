<template>
  <div>
    <CodeLight path="grid/edit/handleOriginal/remove/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="删除">
          直接对数据进行操作，可以保持数据同步
        </vxe-tip>
        <vxe-tip status="error">
          放弃内部 CRUD 管理器，自行操作数据源，CRUD 管理器 内部的相关方法不可使用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/edit/handleOriginal/remove/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="删除">
          树节点同步移除数据
        </vxe-tip>
        <vxe-tip status="error">
          放弃内部 CRUD 管理器，自行操作数据源，CRUD 管理器 内部的相关方法不可使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
