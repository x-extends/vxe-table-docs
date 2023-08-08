<template>
  <div>
    <CodeLight path="table/base/selection/Demo1">
      <template #tip>
        <div>多选表格，用户手动勾选时会触发事件 <table-api-link prop="checkbox-change"/></div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo2">
      <template #tip>
        <div>还可以通过 <table-api-link prop="checkMethod"/> 方法控制 checkbox 是否允许用户手动勾选，还可以配置 <table-api-link prop="visibleMethod"/> 是否显示复选框，如果被禁用，可以调用 <table-api-link prop="setCheckboxRow"/> 方法手动设置</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo3">
      <template #tip>
        <div>当表格中不存在有效数据时列头复选框为禁用状态</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo4">
      <template #tip>
        <div>使用 <table-api-link prop="checkField"/> 属性绑定方式</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo5">
      <template #tip>
        <div>通过配置 <table-api-link prop="trigger"/>=row 设置触发方式，点击行可勾选</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo6">
      <template #tip>
        <div>默认选中，通过指定 <table-api-link prop="checkRowKeys"/> 设置默认选中的行，指定默认值需要有 <table-api-link prop="row-config"/>.<table-api-link prop="keyField"/>，通过 <table-api-link prop="checkbox-config"/>.<table-api-link prop="highlight"/> 设置高亮选中行</div>
        <div><span class="red">（注：默认行为只会在 reload 之后触发一次）</span></div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo7">
      <template #tip>
        <div>通过 <table-api-link prop="checkStrictly"/> 设置父子节点不互相关联，启用后 <table-api-link prop="showHeader"/> 默认为 false</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo8">
      <template #tip>
        <div>多选可单选同时使用</div>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo9">
      <template #tip>
        <div>还可以多种方式混合使用，通过 <table-api-link prop="range"/> 启用范围选中，通过鼠标按住复选框的列，向上或向下滑动选取，还可以同时按住 Ctrl 键局部选取</div>
      </template>
    </CodeLight>
  </div>
</template>
