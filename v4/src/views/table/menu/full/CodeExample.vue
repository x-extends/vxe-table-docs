<template>
  <div>
    <CodeLight path="table/menu/full/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="完整功能">右键菜单，支持表头菜单、内容菜单、表尾菜单，自定义样式，配置项 <ApiLink name="table" prop="menu-config"/>={header,body,footer}</vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 移动到上一个菜单选项 |
            | Arrow Down ↓ | 移动到下一个菜单选项 |
            | Arrow Left ← | 关闭二级菜单 |
            | Arrow Right → | 打开二级菜单 |
            | Esc | 关闭菜单选项 |
            | Enter | 选中当前菜单选项 |
            | Spacebar | 选中当前菜单选项 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
