<template>
  <div>
    <CodeLight path="grid/custom/storage/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置唯一 id 和 storage 启用自定义列设置本地储存功能</vxe-tip>
        <vxe-tip status="error">
          用户个性化记忆功能是根据表格 id 进行保存的，必须确保 id 是整个全局唯一的。
        </vxe-tip>
        <vxe-tip status="success">
          用户个性化记忆功能：支持列宽、列排序、冻结列、显示隐藏
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
