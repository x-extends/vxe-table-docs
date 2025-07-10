<template>
  <div>
    <div>
      <vxe-button mode="text" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button mode="text" status="primary" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button mode="text" status="success" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button mode="text" status="info" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button mode="text" status="warning" :suffix-render="{name: 'myButtonSuffixIcon'}">按钮1</vxe-button>
      <vxe-button mode="text" status="error" :suffix-render="{name: 'myButtonSuffixIcon'}">按钮2</vxe-button>
    </div>

    <div>
      <vxe-button :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button status="primary" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button status="success" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button status="info" :suffix-render="{name: 'myButtonSuffixIcon'}"></vxe-button>
      <vxe-button status="warning" :suffix-render="{name: 'myButtonSuffixIcon'}">按钮1</vxe-button>
      <vxe-button status="error" :suffix-render="{name: 'myButtonSuffixIcon'}">按钮2</vxe-button>
    </div>
  </div>
</template>
