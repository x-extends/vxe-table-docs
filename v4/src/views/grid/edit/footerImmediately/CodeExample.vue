<template>
  <div>
    <CodeLight path="grid/edit/footerImmediately/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单击编辑">
          <div>通过表尾来实现合计功能，数据发生变化时实时统计</div>
          <div>如果是内置的渲染器，可以设置 <ApiLink name="column" prop="immediate"/> 属性和相关事件去实时更新</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
