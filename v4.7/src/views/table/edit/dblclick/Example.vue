<template>
  <div>
    <CodeLight path="table/edit/dblclick/Demo1">
      <template #tip>
        <div>设置 <table-api-link prop="edit-config"/>={trigger: 'dblclick', mode: 'cell'} 启用单元格双点击编辑的功能</div>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/dblclick/Demo2">
      <template #tip>
        <div>设置 <table-api-link prop="edit-config"/>={trigger: 'dblclick', mode: 'row'} 启用行双点击编辑的功能</div>
      </template>
    </CodeLight>
  </div>
</template>
