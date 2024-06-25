<template>
  <div>
    <CodeLight path="table/expand/lazy/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          展开行的懒加载，通过配置 <ApiLink name="table" prop="expand-config"/>={<ApiLink name="table" prop="lazy"/>, <ApiLink name="table" prop="loadMethod"/>} 加载方法来开启展开行的懒加载，会在展开时触发加载一次<br>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
