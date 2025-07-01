<template>
  <div>
    <CodeLight path="table/edit/handleOriginal/insert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="新增">
          直接对数据进行操作，可以保持数据同步。如果需要自动创建列自动，可以通过调用 <ApiLink name="table" prop="createRow"/> 创建行对象，需要注意 <ApiLink name="table" prop="setEditRow"/> 默认是不会自动聚焦的，如果需要自动聚焦需要指定字段
        </vxe-tip>
        <vxe-tip status="error">
          放弃内部 CRUD 管理器，自行操作数据源，CRUD 管理器 内部的相关方法不可使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
