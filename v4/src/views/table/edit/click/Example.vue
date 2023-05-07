<template>
  <div>
    <CodeLight path="table/edit/click/Demo1">
      <template #tip>
        <div>设置 <table-api-link prop="edit-config"/>={trigger: 'click', mode: 'cell'} 启用单元格点击编辑的功能</div>
      </template>
    </CodeLight>

    <CodeLight path="table/edit/click/Demo2">
      <template #tip>
        <div>设置 <table-api-link prop="edit-config"/>={trigger: 'click', mode: 'row'} 启用行点击编辑的功能</div>
      </template>
    </CodeLight>
  </div>
</template>
