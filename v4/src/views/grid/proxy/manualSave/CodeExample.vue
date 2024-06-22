<template>
  <div>
    <CodeLight path="grid/proxy/manualSave/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动调用删除已选行">
          当需要对细节逻辑灵活的进行详细控制时，比如手动调用删除已选行列表，通过调用提交代理 <ApiLink name="grid" prop="commitProxy"/>(code) 方法
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
