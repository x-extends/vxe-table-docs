<template>
  <div>
    <CodeLight path="grid/custom/remoteFull/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过自定义 updateStore 和 restoreStore 方法可以将服务端数据状态异步还原到本地，从而实现用户个性化列设置服务端还原 </vxe-tip>
        <vxe-tip status="error">
          用户个性化记忆功能是根据表格 id 进行保存的，必须确保表格 <ApiLink name="grid" prop="id"/> 是整个全局唯一的，同时每一列必须设置唯一 <ApiLink name="grid" prop="field"/> 属性,如果是分组列头也一样，设置一个唯一字段值就行
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/custom/remoteFull/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列头，支持任意跨层级拖拽后的保存状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
