<template>
  <div>
    <CodeLight path="table/custom/remoteFull/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过自定义 <ApiLink name="table" prop="updateStore"/> 和 <ApiLink name="table" prop="restoreStore"/> 方法可以将服务端数据状态异步还原到本地，从而实现用户个性化列设置服务端还原 </vxe-tip>
        <vxe-tip status="error">
          用户个性化记忆功能是根据表格 id 进行保存的，必须确保表格 <ApiLink name="table" prop="id"/> 是整个全局唯一的，同时每一列必须设置唯一 <ApiLink name="table" prop="field"/> 属性,如果是分组列头也一样，设置一个唯一字段值就行
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
