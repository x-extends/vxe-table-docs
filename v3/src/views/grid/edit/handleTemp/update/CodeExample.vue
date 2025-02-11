<template>
  <div>
    <CodeLight path="grid/edit/handleTemp/update/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="修改">
          数据是自动同步更新的，直接修改数据就可以了
        </vxe-tip>
        <vxe-tip status="error">
          由内部 CRUD 管理器自动记录操作行为，可以通过 <ApiLink name="grid" prop="getUpdateRecords"/> 获取，开启 <ApiLink name="grid" prop="keep-source"/> 后生效
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
