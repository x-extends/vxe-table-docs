<template>
  <div>
    <CodeLight path="table/events/rendered/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="数据渲染事件">
          可以通过 <ApiLink name="table" prop="data-change"/>、<ApiLink name="table" prop="init-rendered"/>、<ApiLink name="table" prop="data-rendered"/> 等监听数据变化事件
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
