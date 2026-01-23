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

    <CodeLight path="grid/edit/handleTemp/update/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          除了默认字段字段监听之外，还可以通过 <ApiLink name="grid" prop="edit-dirty-config"/>.<ApiLink name="grid" prop="includeFields"/> 或 <ApiLink name="grid" prop="edit-dirty-config"/>.<ApiLink name="grid" prop="excludeFields"/> 指定或排除哪些字段需要监听数据变化的，对于很多场景并不需要监听所有编辑字段的变化时非常用用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
