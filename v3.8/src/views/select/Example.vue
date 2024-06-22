<template>
  <div>
    <CodeLight path="select/Demo1">
      <template #tip>
        <div>下拉框。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'select'}}">API</router-link></div>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift Tab | 切换到下一个 |
            | Arrow Up ↑ | 展开下拉面板、如果已展开则移动到上一个选项 |
            | Arrow Down ↓ | 展开下拉面板、如果已展开则移动到下一个选项 |
            | Enter | 如果未选择值，则展开下拉面板；如果已展开下拉面板，则选中选项 |
            | Esc | 关闭下拉面板 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo2">
      <template #tip>
        <div>可清除</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo3">
      <template #tip>
        <div>禁用</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo4">
      <template #tip>
        <div>多选</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo5">
      <template #tip>
        <div>可搜索</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo6">
      <template #tip>
        <div>分组</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo7">
      <template #tip>
        <div>自定义选项样式/自定义模板</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo8">
      <template #tip>
        <div>配置式用法</div>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo9">
      <template #tip>
        <div>配置式用法</div>
      </template>
    </CodeLight>
  </div>
</template>
