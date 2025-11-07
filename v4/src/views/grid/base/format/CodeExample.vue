<template>
  <div>
    <CodeLight path="grid/base/format/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          自定义 <ApiLink name="column" prop="formatter"/>、<ApiLink name="column" prop="footer-formatter"/> 格式化内容<br>
        </vxe-tip>
        <vxe-tip status="error"><ApiLink name="column" prop="formatter"/> 只会在指定的 <ApiLink name="column" prop="field"/> 值发生改变时触发格式化，如果想要多字段关联变化请使用 自定义模板</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/format/Demo2" :extraImports="['./demo2.format.ts']">
      <template #tip>
        <vxe-tip status="primary">
          全局格式化内容，使用 formatter 添加格式函数，会在渲染的时候自动调用<br>
        </vxe-tip>
        <vxe-tip status="success">用于实现业务中统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
