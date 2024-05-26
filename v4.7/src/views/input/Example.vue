<template>
  <div>
    <CodeLight path="input/Demo1">
      <template #tip>
        <div>输入框。查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'input'}}">API</router-link></div>
        <div><span class="red">（注：输入组件输出为字符串类型）</span></div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo2">
      <template #tip>
        <div>文本输入</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo3">
      <template #tip>
        <div>搜索输入</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo4">
      <template #tip>
        <div>密码输入</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo5">
      <template #tip>
        <div>日期选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo6">
      <template #tip>
        <div>周选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo7">
      <template #tip>
        <div>月选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo8">
      <template #tip>
        <div>季选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo9">
      <template #tip>
        <div>年选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo10">
      <template #tip>
        <div>日期和时间选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo11">
      <template #tip>
        <div>时间选择器</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo12">
      <template #tip>
        <div>日期多选</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo13">
      <template #tip>
        <div>数值输入</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo14">
      <template #tip>
        <div>整数输入</div>
      </template>
    </CodeLight>

    <CodeLight path="input/Demo15">
      <template #tip>
        <div>小数输入</div>
      </template>
    </CodeLight>

    <!-- <CodeLight path="input/Demo16">
      <template #tip>
        <div>超大整数输入</div>
      </template>
    </CodeLight> -->

    <CodeLight path="input/Demo17">
      <template #tip>
        <div>自定义插槽</div>
      </template>
    </CodeLight>
  </div>
</template>
