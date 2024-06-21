<template>
  <div>
    <CodeLight path="grid/proxy/manualMark/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动调用标记删除行">
          当需要对细节逻辑灵活的进行详细控制时，比如手动调用将指定行标记为删除状态，通过调用 <ApiLink name="grid" prop="setPendingRow"/> 方法设置标记状态。最后通过调用提交代理 <ApiLink name="grid" prop="commitProxy"/>(code) 方法保存。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
