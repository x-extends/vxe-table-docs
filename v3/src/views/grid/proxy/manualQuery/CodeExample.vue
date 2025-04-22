<template>
  <div>
    <CodeLight path="grid/proxy/manualQuery/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动调用查询">
          当需要对细节逻辑灵活的进行详细控制时，比如手动调用刷新列表，通过调用提交代理 <ApiLink name="grid" prop="commitProxy"/>(code) 方法
        </vxe-tip>
        <vxe-tip status="success">
          内置功能 code：query（查询当前）、reload（重新加载，如果有分页，返回第一页）
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/proxy/manualQuery/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以传额外参数 <ApiLink name="grid" prop="commitProxy"/>(code, { ... })，接收 query(params, customParams)
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
