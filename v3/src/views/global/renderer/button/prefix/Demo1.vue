<template>
  <div>
    <div>
      <vxe-button mode="text" :icon-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button mode="text" status="primary" :icon-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button mode="text" status="success" :icon-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button mode="text" status="info" :icon-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button mode="text" status="warning" :icon-render="{name: 'myButtonPrefixIcon'}">按钮1</vxe-button>
      <vxe-button mode="text" status="error" :icon-render="{name: 'myButtonPrefixIcon'}">按钮2</vxe-button>
    </div>

    <div>
      <vxe-button :prefix-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button status="primary" :prefix-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button status="success" :prefix-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button status="info" :prefix-render="{name: 'myButtonPrefixIcon'}"></vxe-button>
      <vxe-button status="warning" :prefix-render="{name: 'myButtonPrefixIcon'}">按钮1</vxe-button>
      <vxe-button status="error" :prefix-render="{name: 'myButtonPrefixIcon'}">按钮2</vxe-button>
    </div>
  </div>
</template>
