<template>
  <div>
    <CodeLight path="table/custom/remote/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过自定义 <ApiLink name="table" prop="updateStore"/> 方法可以将数据状态保存到本地或者服务端，从而实现用户个性化列设置服务端保存 </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/remote/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列头，支持任意跨层级拖拽后的保存状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
