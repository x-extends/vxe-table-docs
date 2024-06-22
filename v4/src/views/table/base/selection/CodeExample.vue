<template>
  <div>
    <CodeLight path="table/base/selection/Demo1">
      <template #tip>
        <vxe-tip status="primary">多选表格，用户手动勾选时会触发事件 <ApiLink name="table" prop="checkbox-change"/></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo2">
      <template #tip>
        <vxe-tip status="primary">还可以通过 <ApiLink name="table" prop="checkMethod"/> 方法控制 checkbox 是否允许用户手动勾选，还可以配置 <ApiLink name="table" prop="visibleMethod"/> 是否显示复选框，如果被禁用，可以调用 <ApiLink name="table" prop="setCheckboxRow"/> 方法手动设置</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo3">
      <template #tip>
        <vxe-tip status="primary">当表格中不存在有效数据时列头复选框为禁用状态</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo4">
      <template #tip>
        <vxe-tip status="primary">使用 <ApiLink name="table" prop="checkField"/> 和 <ApiLink name="table" prop="indeterminateField"/> 属性绑定方式</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo5">
      <template #tip>
        <vxe-tip status="primary">通过配置 <ApiLink name="table" prop="trigger"/>=row 设置触发方式，点击行可勾选</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo6">
      <template #tip>
        <vxe-tip status="primary">
          默认选中，通过指定 <ApiLink name="table" prop="checkRowKeys"/> 设置默认选中的行，指定默认值需要有 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="keyField"/>，通过 <ApiLink name="table" prop="checkbox-config"/>.<ApiLink name="table" prop="highlight"/> 设置高亮选中行
          <div><span class="red">（注：默认行为只会在 reload 之后触发一次）</span></div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo7">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="table" prop="checkStrictly"/> 设置父子节点不互相关联，启用后 <ApiLink name="table" prop="showHeader"/> 默认为 false</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo8">
      <template #tip>
        <vxe-tip status="primary">多选可单选同时使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/base/selection/Demo9">
      <template #tip>
        <vxe-tip status="primary">还可以多种方式混合使用，通过 <ApiLink name="table" prop="range"/> 启用范围选中，通过鼠标按住复选框的列，向上或向下滑动选取，还可以同时按住 Ctrl 键局部选取</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
