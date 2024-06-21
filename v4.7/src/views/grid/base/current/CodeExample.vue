<template>
  <div>
    <CodeLight path="grid/base/current/Demo1">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="isCurrent"/> 显示高亮行，当前行是唯一的；用户操作点击选项时会触发事件 <ApiLink name="table" prop="current-change"/></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
