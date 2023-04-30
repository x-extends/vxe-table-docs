<template>
  <div>
    <CodeLight path="grid/fullEdit/Demo1">
      <template #tip>
        <p class="tip">
          完整功能：服务端排序代理、服务端筛选代理、服务端分页代理、服务端增删改查、服务端导入导出<br>
          还可以通过配置 <grid-api-link prop="form-config"/> 实现动态表单，还可以通过 <grid-api-link prop="titlePrefix"/> 或 <grid-api-link prop="titleSuffix"/> 设置标题提示信息<br>
          对于分页场景下，如果想要保留选中状态，可以通过设置 <table-api-link prop="checkbox-config"/> 的 <table-api-link prop="reserve"/> 属性<br>
          还可以通过 <table-api-link prop="checkMethod"/> 设置个性化列禁止勾选<br>
          由 <grid-api-link name="vxe-grid"/> 代理数据转换，只需要配置好数据源即可；非常简单就可以渲染一个表格，从重复写冗余的代码中解放出来
        </p>
      </template>
    </CodeLight>
  </div>
</template>
