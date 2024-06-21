<template>
  <div>
    <CodeLight path="table/edit/realtimeSave/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过监听 <ApiLink name="table" prop="edit-closed"/> 事件实现编辑完成即时保存功能，再配合 <ApiLink name="table" prop="reloadRow"/> 局部加载行的函数，调用该方法之后，会将指定行的状态更新为初始状态，实现局部刷新数据</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
