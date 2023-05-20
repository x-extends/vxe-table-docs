<template>
  <div>
    <CodeLight path="table/edit/autoClear/Demo1">
      <template #tip>
        <div>
          通过设置 <table-api-link prop="edit-config"/>.<table-api-link prop="autoClear"/> 关闭默认的单元格清除激活行为<br>
          <span class="red">（注：如果设置为手动模式则不会自动关闭激活状态，需要手动调用 clearEdit 关闭编辑状态）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
