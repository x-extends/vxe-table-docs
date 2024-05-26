<template>
  <div>
    <CodeLight path="table/edit/status/Demo1">
      <template #tip>
        <div>
          设置 <table-api-link prop="keep-source"/> 开启保持原始值状态和 <table-api-link prop="edit-config"/>={showStatus, showUpdateStatus, showInsertStatus} 开启编辑状态显示功能，还可以通过 icon 自定义编辑状态的图标<br>
          对于某些需要局部保存的场景，可以在数据保存完成后调用 <table-api-link prop="reloadRow"/> 方法加载行数据并恢复到初始状态<br>
          <span class="red">（注：开启 showStatus 后如果使用自定义渲染需要配合 <table-api-link prop="updateStatus"/> 方法使用，在对应单元格的值发生改变时调用更新状态）</span>
        </div>
      </template>
    </CodeLight>
  </div>
</template>
