<template>
  <div>
    <CodeLight path="grid/editRender/customRenser/myInput/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现输入框渲染器">
          通过 <ApiLink name="grid" prop="renderer-config" /> 定义局部渲染器，也可以 <vxe-link status="primary" :router-link="{name: 'GlobalRendererTableEditMyEditAmount'}">全局定义</vxe-link> 可复用渲染器
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
