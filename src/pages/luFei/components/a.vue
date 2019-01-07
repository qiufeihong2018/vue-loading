<template>
  <div>
    子组件:{{name}}
    <button @click="handclick">是否响应</button>
    <grand-children-inject></grand-children-inject>
  </div>
</template>

<script>
  import grandChildrenInject from './b'

  export default {
    name: 'childInject',
    inject: ['name'],
    components: {
      grandChildrenInject
    },
    methods: {
      handclick() {
        this.name = 'author'
      }
    }
  }
</script>
