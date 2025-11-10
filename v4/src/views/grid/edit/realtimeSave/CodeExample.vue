<template>
  <div>
    <CodeLight path="grid/edit/realtimeSave/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现单元格实时保存">
          在编辑完成事件中去保存数据到后端，保存完成后调用 <ApiLink name="grid" prop="reloadRow"/> 重新加载对应行来局部更新、实现单元格实时保存
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
