<template>
  <div>
    <CodeLight path="grid/base/loadData/Demo1" previewPath="/resource/docsImg/table_base_load_data.gif">
      <template #tip>
        <vxe-tip status="primary" title="加载数据">
          数据是双向同步的，修改 <ApiLink name="table" prop="data"/> 就可以自动刷新
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/loadData/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          除了修改 <ApiLink name="table" prop="data"/> 之外，还可以通过调用 <ApiLink name="table" prop="loadData、"/><ApiLink name="table" prop="reloadData"/> 方法刷新数据
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
