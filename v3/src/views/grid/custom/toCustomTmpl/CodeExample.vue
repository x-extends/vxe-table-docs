<template>
  <div>
    <CodeLight path="grid/custom/toCustomTmpl/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义实现用户列设置">
          通过调用方法 <ApiLink name="grid" prop="getCustomStoreData"/> 获取当前个性化数据，调用方法 <ApiLink name="grid" prop="setCustomStoreData"/> 可以重新初始化设置个性化数据，对于需要自定义实现或者多个性化模板时可能会用到
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
