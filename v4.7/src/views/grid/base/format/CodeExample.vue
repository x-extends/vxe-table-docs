<template>
  <div>
    <CodeLight path="grid/base/format/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          局部自定义 <ApiLink name="column" prop="formatter"/> 格式化内容<br>
          <span class="red">（注：<ApiLink name="column" prop="formatter"/> 只会在指定的 <ApiLink name="column" prop="field"/> 值发生改变时触发格式化，如果想要多字段关联变化请使用 自定义模板）</span>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/format/Demo2" :extraImports="['./demo2.format.ts']">
      <template #tip>
        <vxe-tip status="primary">
          全局格式化内容，使用 formats 添加格式函数，单元格会在渲染的时候自动调用<br>
          <span class="green">（用于实现业务中统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码）</span>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
