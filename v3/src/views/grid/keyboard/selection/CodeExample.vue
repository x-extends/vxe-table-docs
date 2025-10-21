<template>
  <div>
    <CodeLight path="grid/keyboard/selection/Demo1" previewPath="/resource/docsImg/table_keyboard_selection.gif">
      <template #tip>
        <vxe-tip status="primary" title="切换选中状态">
          通过设置 <ApiLink name="grid" prop="keyboard-config"/>.<ApiLink name="grid" prop="isChecked"/> 启用复选框/单选框切换选中状态
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |
            | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |
            | Arrow Left ← | 移动到当前活动单元格左边的单元格 |
            | Arrow Right → | 移动到当前活动单元格右边的单元格 |
            | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |
            | Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |
            | Spacebar | 翻页滚动，如果可编辑则进入编辑，如果单元格是复选框或单选框则切换勾选状态 |
            | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |
            | Page Up | 向上翻页滚动 |
            | Page Down | 向下翻页滚动 |
            | Home | 滚动到顶部 |
            | End | 滚动到底部 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
