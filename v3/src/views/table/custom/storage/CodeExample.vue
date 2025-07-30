<template>
  <div>
    <CodeLight path="table/custom/storage/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置唯一 <ApiLink name="table" prop="id"/> 和 <ApiLink name="table" prop="storage"/> 启用个性化列设置本地储存功能</vxe-tip>
        <vxe-tip status="error">
          用户个性化记忆功能是根据表格 id 进行保存的，必须确保 id 是整个全局唯一的。
        </vxe-tip>
        <vxe-tip status="success">
          用户个性化记忆功能 <ApiLink name="table" prop="store-options"/> 配置项支持：列宽、列排序、冻结列、显示隐藏、聚合分组、聚合函数
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/storage/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列头，支持任意跨层级拖拽后的保存状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
