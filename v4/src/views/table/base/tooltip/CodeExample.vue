<template>
  <div>
    <CodeLight path="table/base/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="table" prop="tooltip-config"/>.<ApiLink name="table" prop="showAll"/> 开启全表工具提示，还可以配合 <ApiLink name="table" prop="contentMethod"/> 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息<br>
          还可以设置 <ApiLink name="table" prop="tooltip-config"/>.<ApiLink name="table" prop="enterable"/> 允许鼠标进入 tooltip 中<br>
          如果需要更灵活的展示，还可以使用<vxe-link status="primary" :router-link="{name: 'ComponentTableTemplateTooltip'}">自定义提示插槽模板</vxe-link>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
