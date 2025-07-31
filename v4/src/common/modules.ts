import { Component } from 'vue'

export const demoModules = import.meta.glob<Component>([
  '@/views/**/*.vue'
])
