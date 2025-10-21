<template>
  <div>
    <CodeLight path="table/keyboard/editMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现追加方式编辑">
          通过 <ApiLink name="table" prop="keyboard-config"/>.<ApiLink name="table" prop="editMode"/> 设置按键编辑方式
        </vxe-tip>
        <vxe-tip status="error">
          需要注意，如果是拼音输入法，第一个输入的字符将用于激活编辑状态
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
            | Delete | 清空内容 |
            | Backspace | 清空内容并激活选中单元格为编辑状态 |
            | F2 | 激活单元格编辑 |
            | Esc | 取消单元格编辑 |
            | Page Up | 向上翻页滚动 |
            | Page Down | 向下翻页滚动 |
            | Home | 滚动到顶部 |
            | End | 滚动到底部 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="table/keyboard/editMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="table" prop="keyboard-config"/>.<ApiLink name="table" prop="editMethod"/> 自定义实现追加式编辑
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
