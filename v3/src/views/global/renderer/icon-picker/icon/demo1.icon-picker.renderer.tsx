// main.js

import { VxeUI } from 'vxe-pc-ui'

// 创建一个选项图标渲染器
VxeUI.renderer.add('myIconPickerOptionIcon', {
  renderIconPickerOptionIcon (h, renderOpts, renderParams) {
    const { option } = renderParams
    switch (option.icon) {
      case 'myoptionIcon1':
        return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
          </g>
        </svg>
      case 'myoptionIcon2':
        return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z" fill="currentColor"></path>
          </g>
        </svg>
      case 'myoptionIcon3':
        return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z" fill="currentColor"></path>
            <path d="M0 12C0 10.4697 1.14578 9.20702 2.62626 9.02304L5.00001 10.6055V14.2361C4.46925 14.7111 3.76836 15 3 15C1.34315 15 0 13.6568 0 12Z" fill="currentColor"></path>
            <path d="M11 14.2361C11.5308 14.7111 12.2316 15 13 15C14.6569 15 16 13.6569 16 12C16 10.3431 14.6569 9 13 9C12.2316 9 11.5308 9.28885 11 9.76389V14.2361Z" fill="currentColor"></path>
            <path d="M8.28111 5.01444C8.29524 5.00503 8.31184 5 8.32881 5C8.36139 5 8.39117 5.0184 8.40574 5.04754L9.38197 7H13V5H10.618L10.1946 4.15311C9.84124 3.44641 9.11893 3 8.32881 3C7.91699 3 7.51437 3.1219 7.17171 3.35034L4.86132 4.8906C4.32322 5.24934 4 5.85327 4 6.5C4 7.14673 4.32322 7.75066 4.86132 8.1094L7 9.53518V13H9V8.46482L6.05278 6.5L8.28111 5.01444Z" fill="currentColor"></path>
          </g>
        </svg>
    }
    return <i></i>
  }
})
